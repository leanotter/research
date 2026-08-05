# Research Repository Guide

This repository is organised as a research repository, currently focused on the Private Equity flow.

## Top-Level Structure

All work should live under `research/` and then be grouped by flow first:

- `research/private-equity/`

Within each flow, organise content by type:

- `interviews/`
- `notes/`
- `synthesis/`

Example structure:

```text
research/
  private-equity/
    interviews/
    notes/
    synthesis/
```

## Interview Output Guide

This section defines how interview notes should be created and formatted in a flow's `interviews/` directory.

## File Naming

- Each interview file must use the format `[first]-[last].md`.
- Use lowercase only.
- Replace spaces with hyphens.
- Do not include middle names, titles, or company names in the filename unless explicitly needed.

Examples:

- `will-arinze.md`
- `jane-smith.md`
- `alex-johnson.md`

## Purpose

Each interview document should do two things:

1. Capture a concise, structured summary that is easy to scan later.
2. Preserve the full raw transcript beneath the summary for reference.

Different flows may require different summary structures. Use the structure defined for the relevant flow rather than assuming one template applies everywhere.

## Writing Principles

- Write in clear, plain English.
- Prefer synthesis over transcription in the summary section.
- Keep the summary useful for future pattern analysis across many interviews.
- Focus on insights, signals, risks, recommendations, and implications for the relevant flow.
- Avoid overly casual language in the summary, even if the transcript is informal.
- Preserve the transcript as-is as much as possible when included in the `Full Transcript` section.

## Private Equity Interview Structure

For Private Equity interviews, the reference example is:

- `research/private-equity/interviews/amir-qureshi.md`

These calls are typically most useful when they surface buyer behaviour, diligence priorities, positioning implications, and routes to market.

Every Private Equity interview file should follow this structure in this order:

```md
# First Last

## Meeting Details

- **Date:** Mon DD
- **Participants:** Name, Name
- **Meeting title:** Exact meeting title

## Snapshot

Short 1-2 paragraph summary of who they are, how they operate in the private equity / M&A ecosystem, and the main implications from the conversation.

## Who They Are / Relevant Context

- Current role and background.
- PE, M&A, advisory, operator, or portfolio perspective.
- Relevant sector focus, deal size, or operating model.
- Why their view matters to us.

## Key Commercial Insights

### 1. Insight title

Short paragraph.

### 2. Insight title

Short paragraph.

## How This Market Buys

- How work like this is usually sourced.
- Who makes the decision.
- Whether buying is relationship-led, referral-led, process-led, or procurement-led.
- Typical objections or barriers.

## Where Our Offer Fits

- Pre-acquisition opportunities.
- Post-acquisition opportunities.
- Fundraise / deal prep opportunities.
- Retainer / advisory opportunities.
- Where they did or did not see clear demand.

## Diligence / Value Creation Priorities

- What buyers care about most.
- What gets scrutinised in diligence.
- What increases or reduces value.
- Common red flags.

## Positioning And Messaging Implications

- How we should describe the offer.
- What language resonates.
- What language to avoid.
- Whether to specialise by sector, buyer type, or problem.

## GTM / Relationship Strategy

- Which networks, introductions, or channels matter.
- Whether to target PE firms directly or adjacent buyers first.
- Reputation / credibility signals needed.
- Suggested first steps for market entry.

## Commercial Model Considerations

- Project vs retainer.
- Specialist diligence vs broader strategic support.
- Pricing signals if mentioned.
- Separate brand / audience segmentation if relevant.

## Risks / Challenges

- Market-entry risks.
- Credibility gaps.
- Positioning traps.
- Things that could make the offer too broad or too narrow.

## Suggested People To Speak To

- **Name**: brief reason.

## Takeaways For Us

- Clear, actionable bullets.
- What to test.
- What to refine.
- What to avoid.

## Full Transcript

Meeting Title: ...
Date: ...
Meeting participants: ...

Transcript:

Raw transcript pasted here.
```

## Section Guidance

### `# First Last`

- Use the interviewee's normal display name with standard capitalisation.

### `## Meeting Details`

- Keep this short and factual.
- Use bullets exactly as shown in the example.

### `## Snapshot`

- Summarise who the person is, where they sit in the deal ecosystem, and the main commercial implications of the call.

### `## Who They Are / Relevant Context`

- Use this to orient future readers quickly.
- Capture the person's background, operating perspective, and why their opinion is relevant.

### `## Key Commercial Insights`

- Use numbered `###` subheadings.
- Focus on buying behaviour, market demand, differentiation, diligence needs, and commercial implications.

### `## How This Market Buys`

- Capture how work is sourced and bought in practice.
- Include decision-makers, relationship dynamics, and any barriers to purchase.

### `## Where Our Offer Fits`

- Clarify whether the perceived opportunity is pre-deal, post-deal, advisory, diligence, or fundraising.
- Note where the interviewee sees the offer as strongest or weakest.

### `## Diligence / Value Creation Priorities`

- Capture what investors, buyers, founders, or acquirers care about most.
- Include the issues most likely to affect value, risk, or execution.

### `## Positioning And Messaging Implications`

- Note how the offer should be described to resonate with this market.
- Include language to lean into or avoid.

### `## GTM / Relationship Strategy`

- Capture who to target, how to get introduced, and what credibility signals are needed.
- Include any advice on market entry or sequencing.

### `## Commercial Model Considerations`

- Note any signals on project work, retainers, advisory models, packaging, pricing, or audience segmentation.

### `## Risks / Challenges`

- Capture market-entry risks, positioning risks, credibility issues, and other traps.

### `## Suggested People To Speak To`

- List referrals, adjacent contacts, or names the interviewee recommends.
- Include a short explanation for why they are relevant.

### `## Takeaways For Us`

- Keep this focused on what we should learn, test, preserve, or avoid.
- This should be actionable.

### `## Full Transcript`

- Always place the full transcript after the summary sections.
- Keep the original wording intact where possible.
- If the source transcript includes speaker labels like `Me:` and `Them:`, preserve them.

## Style Rules

- Use Markdown headings exactly as shown in the template.
- Use sentence case within bullet content.
- Use bold only for labels and names where helpful.
- Keep bullets concise and specific.
- Do not over-format the transcript.
- Do not remove nuance just to make the summary neater.
- Use British English spelling where practical for consistency.

## Consistency Rules

- Every flow should follow the same folder structure unless there is a strong reason not to.
- Within a given flow, interview files in that flow's `interviews/` directory should follow the same structure unless there is a strong reason not to.
- Do not assume one flow's interview template applies to another flow.
- If a section has no meaningful content for a particular interview, keep the section and write a brief note rather than deleting it.

## Default Workflow

When creating a new interview file:

1. Place it in the correct flow under `research/[flow-name]/interviews/`.
2. Name the file `[first]-[last].md`.
3. Use the template for that specific flow.
4. Add the structured summary first.
5. Add the full transcript below the summary.
6. Use the relevant flow's existing interview files as the formatting reference.
