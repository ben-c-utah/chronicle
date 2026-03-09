
# Chronicle Admin Dashboard Blueprint
Version 1.0

The Chronicle Admin Dashboard is a private interface used to create, edit, and manage Chronicle records.

Its purpose is to provide a structured environment for building Chronicle content quickly, consistently, and safely while maintaining strong relationships between records.

The dashboard should function as a historian’s writing workshop rather than a traditional CMS.

---

# Purpose

The dashboard allows the editor to:

- create new records
- edit existing records
- choose record types
- enter structured metadata
- write narrative content
- link related records
- validate content structure
- generate clean Markdown files
- preview entries before publishing

---

# Core Goals

The system should support five primary goals:

### Structured Authoring
The interface should automatically show the correct fields for each record type.

### Relationship Management
Records should be easily connected to other Chronicle entries.

### Data Consistency
The system should prevent missing or inconsistent metadata.

### Fast Content Creation
Creating new entries should be quick and repeatable.

### Markdown‑First Output
All saved records should generate structured Markdown files with YAML frontmatter.

---

# Dashboard Structure

The admin dashboard contains the following primary areas:

- Home
- Records Library
- New Record
- Edit Record
- Relationships
- Settings / Taxonomy

---

# Home Dashboard

Purpose:
Provide a quick overview of Chronicle content.

Recommended widgets:

- New Record button
- Recently edited records
- Draft records
- Content counts by record type
- Records missing required fields
- Records missing relationships

Example summary:

42 Events  
8 Cultures  
6 Places  
5 People  
4 Arms & Warfare  
2 Campaigns

---

# Records Library

Purpose:
Allow browsing and searching of all Chronicle entries.

Columns:

- Title
- Record Type
- Era
- Year or Date Range
- Region
- Status
- Last Updated

Filters:

- Record Type
- Era
- Region
- Draft / Published
- Missing coordinates
- Missing relationships
- Missing sources

---

# New Record

Purpose:
Create a new Chronicle entry.

Workflow:

1. Click “New Record”
2. Select record type
3. System loads appropriate form
4. Enter metadata and narrative content
5. Link related records
6. Validate required fields
7. Preview generated output
8. Save draft or publish

---

# Record Types

Supported types:

- Event
- Culture
- Person
- Campaign
- Arms & Warfare
- Place

Each record type shows only the relevant fields.

---

# Event Fields

- Title
- Year
- Location
- Region
- Latitude
- Longitude
- Factions
- Event Type
- Summary
- Chronicle Narrative
- Historical Significance
- Outcome
- Wargaming Section
- Terrain Section
- Sources
- Tags

---

# Culture Fields

- Title
- Era
- Region
- Summary
- Cultural Overview
- Society
- Warfare
- Equipment & Arms
- Architecture & Settlements
- Major Events
- Wargaming Section
- Sources
- Tags

---

# Person Fields

- Title
- Era
- Culture
- Summary
- Biography
- Historical Importance
- Major Events
- Leadership & Strategy
- Wargaming Inspiration
- Sources
- Tags

---

# Campaign Fields

- Title
- Start Year
- End Year
- Region
- Summary
- Background
- Campaign Timeline
- Key Battles & Events
- Outcome
- Play This Campaign
- Sources
- Tags

---

# Arms & Warfare Fields

- Title
- Era
- Summary
- Overview
- Key Characteristics
- Historical Impact
- Use in Battle
- Related Cultures
- Wargaming Section
- Sources
- Tags

---

# Place Fields

- Title
- Region
- Latitude
- Longitude
- Summary
- Overview
- Historical Importance
- Major Events
- Terrain Characteristics
- Wargaming Section
- Sources
- Tags

---

# Relationship System

Each record can link to other Chronicle entries.

Possible links:

- Related Events
- Related Cultures
- Related People
- Related Places
- Related Arms & Warfare
- Related Campaigns

The dashboard should include:

- searchable record picker
- filtering by record type
- multi‑select linking
- display of current links
- ability to remove links

The system should store relationships using **stable record IDs**.

---

# Validation Rules

Examples:

Event must include:
- title
- record type
- year
- summary

Campaign must include:
- title
- record type
- startYear or endYear
- summary

Place recommended fields:
- coordinates
- region

Warnings may include:

- missing coordinates
- missing sources
- missing relationships
- empty wargaming section

---

# Publishing Status

Recommended status system:

- Draft
- Review
- Published
- Archived

This allows entries to be written gradually without appearing publicly before completion.

---

# Output Model

The dashboard generates Markdown files with YAML frontmatter.

Example paths:

content/events/0793-lindisfarne.md  
content/cultures/vikings.md  
content/technology/viking-longship.md

Markdown output ensures:

- human‑readable content
- Git version control
- portability
- simple static site generation

---

# File Naming Rules

Events:
0793-lindisfarne.md

People:
alfred-the-great.md

Cultures:
vikings.md

Technology:
viking-longship.md

Places:
lindisfarne.md

Campaigns:
great-heathen-army.md

---

# Preview System

Before publishing, the editor should allow preview of:

- rendered record page
- generated Markdown
- relationship links
- map marker placement (if coordinates exist)

---

# Recommended MVP

The first version of the admin dashboard should include:

- record library
- new record creation
- record editing
- relationship linking
- validation warnings
- Markdown generation
- draft / publish status

---

# Future Features

Possible later additions:

- image library
- map click to set coordinates
- campaign event ordering
- source management
- duplicate detection
- link health reports
- scenario card generator
- featured content controls

---

# Admin UX Principles

The dashboard should feel:

- calm
- efficient
- structured
- distraction‑free

It should resemble a historian’s writing workspace rather than a commercial SaaS interface.

---

# Guiding Rule

The admin system should make the **correct Chronicle structure the easiest path**.

That means:

- relevant fields appear automatically
- linking records is simple
- generated content remains standardized
- errors are caught early

The goal is to allow Chronicle to grow into a large, interconnected historical record while remaining easy to manage.


# Update: Media Editing Support

The admin dashboard editor must include a **Media Section**.

Media Section Fields:

Featured Image  
Image Gallery  
Video Links

Video Links accept:
- YouTube
- Vimeo

Video links populate the `videoGallery` field.

Dashboard behavior:

- paste YouTube/Vimeo URL
- preview embedded video
- store as VideoItem in frontmatter
