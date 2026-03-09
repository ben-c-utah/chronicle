
# Chronicle Architecture Principles
Version 1.0

This document defines the guiding architectural principles for the Chronicle project.

These principles exist to protect the long-term scalability, modularity, and clarity of the system as Chronicle grows over time.

---

# 1. Markdown-First Content

All Chronicle content is stored as Markdown files with YAML frontmatter.

Reasons:

- human-readable
- portable
- version-controlled
- not dependent on a database
- easy to migrate or transform later

The admin dashboard may generate these files, but the files themselves remain the source of truth.

---

# 2. Schema as the Source of Truth

The Chronicle Data Schema defines:

- field names
- data types
- validation rules
- record relationships

All systems must follow the schema:

- the public application
- the admin dashboard
- validation tools
- migration scripts

Changes to the schema should be deliberate and versioned.

---

# 3. Stable Record IDs

Every Chronicle record has a unique ID.

Rules:

- IDs must remain stable once published
- relationships reference IDs, not titles
- IDs are lowercase and hyphen-separated

Example:

lindisfarne-793
alfred-the-great
viking-longship

Titles may change, but IDs should not.

---

# 4. Content / Application / Authoring Separation

Chronicle consists of three distinct layers.

## Content Layer
Markdown files and schema definitions.

## Application Layer
The public Chronicle site including map, timeline, and record rendering.

## Authoring Layer
The Chronicle Admin Dashboard used to create and edit records.

These layers should remain loosely coupled so they can evolve independently.

---

# 5. Relationship-Based Architecture

Chronicle records form a network rather than a strict hierarchy.

Records link to each other through ID-based relationships.

Examples:

events link to cultures
people link to campaigns
places link to events
technology links to cultures

This relationship model allows new navigation and discovery systems to be added without changing the underlying content.

---

# 6. Pluggable Record Types

Record types should be modular.

Each record type should define:

- schema fields
- editor form
- display components
- validation rules

New record types should be possible without rewriting the entire system.

Possible future types:

artifact
religion
architecture
unit
source

---

# 7. Controlled Vocabularies

Important classification fields should use controlled vocabularies.

Examples:

- event types
- regions
- technology types
- status values

This prevents inconsistent tagging and improves filtering and discovery.

---

# 8. Validation and Data Integrity

Automated validation should exist for Chronicle records.

Checks should include:

- required fields
- valid enum values
- duplicate IDs
- broken relationships
- invalid coordinates

Validation protects long-term data quality.

---

# 9. Human-Readable Content Files

Content files should remain clean and easy to read.

Avoid:

- machine-heavy structures
- unnecessary nesting
- auto-generated clutter

If the dashboard disappeared tomorrow, a human should still be able to understand and edit the content.

---

# 10. Support for Incremental Publishing

Records should support multiple states:

- draft
- review
- published
- archived

This allows entries to be written gradually without exposing incomplete content publicly.

---

# 11. Media Strategy

Images and media should follow consistent conventions.

Decisions include:

- image storage locations
- file naming conventions
- alt text and captions
- image metadata structure

Media should integrate cleanly with Chronicle records.

---

# 12. Migration-Friendly Content

Chronicle content should remain structured enough that automated migration scripts can update records when the schema evolves.

Consistency in formatting and field usage is critical.

---

# 13. Separate Editorial Content

Editorial content (Journal posts) should remain distinct from structured Chronicle records.

Chronicle Records:
structured historical knowledge

Journal Posts:
project updates, tutorials, hobby content

Keeping these separate preserves the integrity of the historical dataset.

---

# 14. Capability-Oriented Design

The Chronicle system should focus on core capabilities rather than fixed pages.

Core capabilities include:

- storing structured historical records
- linking records
- rendering records
- map visualization
- timeline navigation
- editorial publishing

Interfaces can evolve while capabilities remain stable.

---

# 15. Future Expansion

Chronicle should remain open to future systems such as:

- artifact databases
- scenario generators
- campaign builders
- downloadable scenario cards
- AI-assisted exploration
- community submissions

The architecture should allow these systems to be added without restructuring existing content.

---

# Guiding Principle

Chronicle should grow as a structured historical network that remains:

- understandable
- maintainable
- extensible
- durable

The architecture should favor clarity and long-term sustainability over short-term convenience.
