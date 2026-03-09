# Chronicle Project Structure
Version 1.0

This document defines the recommended repository layout for the Chronicle project.

The goal of this structure is to keep Chronicle modular, scalable, and easy to maintain as it grows.

The repository should separate:

- public application code
- admin dashboard code
- structured content
- shared schema/types
- scripts and tooling
- project documentation

---

# Guiding Principles

The repository structure should:

- separate content from code
- separate public UI from admin tooling
- keep shared logic in one place
- make scripts and migrations easy to find
- allow new features and record types to be added without major reorganization

---

# Recommended Repository Layout

```text
chronicle/
  docs/
  content/
  src/
    app/
    components/
    features/
    lib/
    styles/
    types/
  admin/
  schema/
  scripts/
  public/
  tests/
```

---

# Top-Level Folders

## docs/

Project documentation and planning files.

Examples:
- chronicle-design-system.md
- chronicle-content-types.md
- chronicle-entry-templates.md
- chronicle-content-architecture.md
- chronicle-application-blueprint.md
- chronicle-admin-dashboard-blueprint.md
- chronicle-journal-system.md
- chronicle-data-schema.md
- chronicle-architecture-principles.md
- chronicle-future-ideas.md

---

## content/

All Markdown content lives here.

Recommended structure:

```text
content/
  events/
  cultures/
  people/
  campaigns/
  technology/
  places/
  journal/
```

Examples:
- content/events/0793-lindisfarne.md
- content/cultures/vikings.md
- content/technology/viking-longship.md
- content/journal/painting-saxon-warband.md

This folder should remain human-readable and portable.

---

## src/

Main public application code.

Recommended structure:

```text
src/
  app/
  components/
  features/
  lib/
  styles/
  types/
```

### src/app/
Application routes/pages.

Examples:
- home page
- map page
- timeline page
- browse page
- journal page
- record detail pages

### src/components/
Reusable UI components.

Examples:
- ChroniclePanel
- RecordHeader
- RelatedRecords
- TimelineSlider
- MapView
- JournalCard

### src/features/
Feature-specific code grouped by domain.

Examples:
- map/
- timeline/
- records/
- journal/
- search/
- campaigns/

This helps keep larger features modular.

### src/lib/
Shared utilities and application services.

Examples:
- markdown parsing
- record loading
- relationship helpers
- map helpers
- search indexing
- validation helpers

### src/styles/
Global and shared styling.

Examples:
- theme tokens
- typography
- manuscript UI styles

### src/types/
Shared TypeScript types.

Examples:
- record types
- source types
- image types
- journal types

---

## admin/

Private authoring dashboard code.

This should remain separate from the public application as much as practical.

Recommended internal structure:

```text
admin/
  app/
  components/
  forms/
  lib/
```

Examples:
- record editor
- relationship picker
- preview panel
- taxonomy settings
- dashboard overview

---

## schema/

Shared schema definitions.

This is where the system's formal data contracts should live.

Examples:
- zod schemas
- field definitions
- enums
- validation logic
- record-type configs

This folder is one of the most important for long-term consistency.

---

## scripts/

Project scripts and maintenance tooling.

Examples:
- content validation
- broken link checker
- migration scripts
- markdown generation
- search indexing
- image audits

Keeping scripts here makes maintenance much easier.

---

## public/

Static public assets.

Examples:
- images
- icons
- map marker artwork
- decorative manuscript borders
- favicon
- downloadable PDFs later

Possible structure:

```text
public/
  images/
  icons/
  markers/
  ornaments/
```

---

## tests/

Automated tests.

Examples:
- schema tests
- validation tests
- rendering tests
- relationship integrity tests

Even a small test suite here will help Chronicle stay stable over time.

---

# Suggested src/features Layout

A good feature-based structure might look like:

```text
src/features/
  map/
    components/
    lib/
  timeline/
    components/
    lib/
  records/
    components/
    lib/
  journal/
    components/
    lib/
  search/
    components/
    lib/
  campaigns/
    components/
    lib/
```

This keeps related logic together and makes the project easier to grow.

---

# Shared vs Feature Logic

Use this rule:

## Put code in a feature folder if:
- it belongs only to one domain
- it will not likely be reused elsewhere

## Put code in src/lib or src/components if:
- it is reused across multiple parts of the app
- it is part of the core Chronicle framework

This prevents both duplication and over-centralization.

---

# Recommended Content Path Conventions

Structured content:

- `content/events/`
- `content/cultures/`
- `content/people/`
- `content/campaigns/`
- `content/technology/`
- `content/places/`

Editorial content:

- `content/journal/`

This clear separation should be preserved.

---

# Recommended Schema/Config Strategy

The schema folder should eventually include:

```text
schema/
  enums.ts
  source.ts
  image.ts
  common-record.ts
  event.ts
  culture.ts
  person.ts
  campaign.ts
  technology.ts
  place.ts
  journal.ts
  index.ts
```

This allows:
- shared validation
- typed forms
- safer rendering
- cleaner editor logic

---

# Recommended Scripts Folder Structure

```text
scripts/
  validate-content.ts
  check-links.ts
  generate-search-index.ts
  migrate-schema.ts
  audit-images.ts
```

These scripts will become increasingly valuable as Chronicle grows.

---

# Media Strategy

Static media should generally live in:

```text
public/images/
```

If Chronicle later needs heavier media handling, that can evolve, but this is a strong starting point.

Suggested image grouping:

```text
public/images/
  events/
  cultures/
  people/
  technology/
  places/
  journal/
```

---

# Example Full Project Tree

```text
chronicle/
  docs/
    chronicle-design-system.md
    chronicle-content-types.md
    chronicle-entry-templates.md
    chronicle-content-architecture.md
    chronicle-application-blueprint.md
    chronicle-admin-dashboard-blueprint.md
    chronicle-journal-system.md
    chronicle-data-schema.md
    chronicle-architecture-principles.md
    chronicle-future-ideas.md
    chronicle-project-structure.md

  content/
    events/
    cultures/
    people/
    campaigns/
    technology/
    places/
    journal/

  src/
    app/
    components/
    features/
    lib/
    styles/
    types/

  admin/
    app/
    components/
    forms/
    lib/

  schema/
  scripts/
  public/
    images/
    icons/
    markers/
    ornaments/

  tests/
```

---

# Architectural Notes

## 1. Public app and admin dashboard should stay distinct
They may share types and schema, but their UI and workflows are different.

## 2. Content should remain portable
The content folder should not depend on the admin dashboard to remain understandable.

## 3. Shared schema should sit outside both app and admin
This ensures consistency and prevents duplication.

## 4. Scripts should be first-class citizens
Validation, migrations, and indexing are part of the real project, not an afterthought.

---

# Guiding Principle

The project structure should make Chronicle easy to:

- understand
- extend
- validate
- refactor
- scale

A clean structure now will save enormous pain later.
