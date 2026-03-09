# Chronicle Starter Skeleton

This is a starter implementation skeleton for **Chronicle**, based on the architecture docs.

## Included in this skeleton

- Next.js App Router setup
- Zod schemas in `/schema`
- MDX frontmatter loader
- record validation pipeline
- simple relationship graph builder
- starter home, map, timeline, browse, and record detail routes
- copied example event content

## First steps

1. Install dependencies

```bash
npm install
```

2. Add your Mapbox token to `.env.local`

```bash
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=...
```

3. Validate content

```bash
npm run validate:content
```

4. Start the app

```bash
npm run dev
```

## Important note

This skeleton is deliberately conservative. It establishes the project foundation without locking you into premature UI complexity.
