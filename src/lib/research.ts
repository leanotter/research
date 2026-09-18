import type { CollectionEntry } from "astro:content";

export const FLOWS = [
  {
    slug: "market-customer-research",
    title: "Market and Customer Research",
    description: "",
  },
] as const;

export const CONTENT_TYPES = [
  { slug: "interviews", title: "Interviews" },
] as const;

export type FlowSlug = (typeof FLOWS)[number]["slug"];
export type ContentTypeSlug = (typeof CONTENT_TYPES)[number]["slug"];

export type ResearchDoc = {
  entry: CollectionEntry<"research">;
  id: string;
  slug: string;
  url: string;
  flow: FlowSlug;
  flowTitle: string;
  type: ContentTypeSlug;
  typeTitle: string;
  title: string;
  date?: string;
  participants?: string;
  jobTitle?: string;
  company?: string;
  description?: string;
  notesBody: string;
  transcriptBody?: string;
  hasTranscript: boolean;
};

function stripExtension(value: string) {
  return value.replace(/\.md$/i, "");
}

function titleFromBody(body: string) {
  const match = body.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() ?? "Untitled";
}

function descriptionFromBody(body: string) {
  const snapshotMatch = body.match(
    /^##\s+(?:Snapshot|Overview)\s*\n+([\s\S]*?)(?:\n##\s+|\n*$)/m,
  );
  if (!snapshotMatch?.[1]) {
    return undefined;
  }

  const firstParagraph = snapshotMatch[1].split(/\n\s*\n/)[0] ?? snapshotMatch[1];

  return firstParagraph
    .replace(/\n+/g, " ")
    .trim()
    .slice(0, 220);
}

function splitDocumentSections(body: string) {
  const transcriptMatch = body.match(/^##\s+Full Transcript\s*$/m);
  if (!transcriptMatch || transcriptMatch.index === undefined) {
    return {
      notesBody: body.trim(),
      transcriptBody: undefined,
      hasTranscript: false,
    };
  }

  const notesBody = body.slice(0, transcriptMatch.index).trim();
  const transcriptBody = body.slice(transcriptMatch.index).trim();

  return {
    notesBody,
    transcriptBody,
    hasTranscript: transcriptBody.length > 0,
  };
}

function extractDetail(body: string, label: string) {
  const expression = new RegExp(`^- \\*\\*${label}:\\*\\*\\s*(.+)$`, "m");
  const match = body.match(expression);
  return match?.[1]?.trim();
}

function getFlowMeta(slug: string) {
  return FLOWS.find((flow) => flow.slug === slug);
}

function getTypeMeta(slug: string) {
  return CONTENT_TYPES.find((type) => type.slug === slug);
}

export function toResearchDoc(entry: CollectionEntry<"research">): ResearchDoc | null {
  const rawId = stripExtension(entry.id);
  const segments = rawId.split("/");
  if (segments.length < 3) {
    return null;
  }

  const [flow, type, slug] = segments as [string, string, string];
  const flowMeta = getFlowMeta(flow);
  const typeMeta = getTypeMeta(type);

  if (!flowMeta || !typeMeta) {
    return null;
  }

  const sections = splitDocumentSections(entry.body);

  return {
    entry,
    id: rawId,
    slug,
    url: `/${type}/${slug}/`,
    flow: flowMeta.slug,
    flowTitle: flowMeta.title,
    type: typeMeta.slug,
    typeTitle: typeMeta.title,
    title: titleFromBody(entry.body),
    date: extractDetail(entry.body, "Date"),
    participants: extractDetail(entry.body, "Participants"),
    jobTitle: extractDetail(entry.body, "Job [Tt]itle"),
    company: extractDetail(entry.body, "Company"),
    description: descriptionFromBody(sections.notesBody),
    notesBody: sections.notesBody,
    transcriptBody: sections.transcriptBody,
    hasTranscript: sections.hasTranscript,
  };
}

export function getFlowBySlug(flow: string) {
  return getFlowMeta(flow);
}

export function getTypeBySlug(type: string) {
  return getTypeMeta(type);
}

function dateValue(date?: string) {
  if (!date) {
    return Number.NEGATIVE_INFINITY;
  }

  const timestamp = Date.parse(date);
  return Number.isNaN(timestamp) ? Number.NEGATIVE_INFINITY : timestamp;
}

export function sortDocs(docs: ResearchDoc[]) {
  return [...docs].sort((left, right) => {
    const dateDifference = dateValue(right.date) - dateValue(left.date);
    if (dateDifference !== 0) {
      return dateDifference;
    }

    return left.title.localeCompare(right.title);
  });
}

export function splitParticipants(participants?: string) {
  if (!participants) {
    return [];
  }

  return participants
    .split(",")
    .map((participant) => participant.trim())
    .filter(Boolean);
}
