# Private Research Site

This Astro site surfaces private equity research interviews.

## Local setup

Create a `.env` file in the repo root with:

```bash
SITE_USERNAME=research
SITE_PASSWORD=change-me
SESSION_SECRET=replace-with-a-long-random-secret
```

Then run:

```bash
npm install
npm run dev
```

For deployment, set the same three environment variables in your hosting provider.
