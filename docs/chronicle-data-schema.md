# Chronicle Data Schema
Version 1.0

This document defines the core data model for **Chronicle: The Viking Age**.

The schema is designed to support:

- the public Chronicle application
- the Chronicle Admin Dashboard
- Markdown content files with YAML frontmatter
- linked historical records
- editorial Journal posts

The goal is consistency, portability, and long-term scalability.

---

# Schema Philosophy

Chronicle contains two content systems:

## 1. Chronicle Records
Structured historical records.

Supported record types:

- event
- culture
- person
- campaign
- technology
- place

## 2. Journal Posts
Editorial content.

Journal posts are simpler and do not use the full Chronicle record schema.

---

# Record Identification Rules

## id
Type: `string`  
Required: yes

A stable internal identifier used for linking records.

Rules:
- lowercase
- hyphen-separated
- should not change once published
- should be unique across all Chronicle records

Examples:
- `lindisfarne-793`
- `vikings`
- `alfred-the-great`
- `viking-longship`

---

# Common Chronicle Record Schema

These fields apply to all structured Chronicle records.

## Core Fields

### id
Type: `string`  
Required: yes

### recordType
Type: `enum`  
Required: yes

Allowed values:
- `event`
- `culture`
- `person`
- `campaign`
- `technology`
- `place`

### title
Type: `string`  
Required: yes

Human-readable record title.

### era
Type: `string`  
Required: yes

Examples:
- `Viking Age`

### summary
Type: `string`  
Required: yes

Short 1–2 sentence summary used in cards, previews, and search results.

### status
Type: `enum`  
Required: yes

Allowed values:
- `draft`
- `review`
- `published`
- `archived`

### tags
Type: `string[]`  
Required: no

Keywords used for filtering and discovery.

Example:
- `monastery`
- `coastal-raid`
- `northumbria`

### sources
Type: `Source[]`  
Required: no

List of source objects.

See source schema below.

### featuredImage
Type: `string`  
Required: no

Path or URL to a primary image.

Example:
- `/images/events/lindisfarne.jpg`

### imageGallery
Type: `ImageItem[]`  
Required: no

Optional list of images associated with the record.

---

# Date and Time Fields

These fields vary by record type.

### year
Type: `number`  
Required: conditional

Used primarily for events.

### startYear
Type: `number`  
Required: conditional

Used for campaigns or persons when needed.

### endYear
Type: `number`  
Required: conditional

Used for campaigns or date ranges.

### dateLabel
Type: `string`  
Required: no

Human-readable date display.

Examples:
- `AD 793`
- `Spring 878`
- `c. 991`

---

# Geography Fields

### location
Type: `string`  
Required: conditional

Human-readable location label.

Examples:
- `Lindisfarne, Northumbria`
- `Dublin, Ireland`

### region
Type: `string`  
Required: recommended

Examples:
- `Britain`
- `Scandinavia`
- `Francia`
- `Ireland`
- `Baltic`

### latitude
Type: `number`  
Required: conditional

### longitude
Type: `number`  
Required: conditional

Coordinates are required for:
- place records
- events intended for map display

### mapVisibility
Type: `boolean`  
Required: no  
Default: `false`

If `true`, the record may appear on the public map.

Typical usage:
- true for events and places with coordinates
- false for most cultures, people, campaigns, and technology records

---

# Relationship Fields

Relationships should always store **record IDs**, not titles.

### relatedEvents
Type: `string[]`  
Required: no

### relatedCultures
Type: `string[]`  
Required: no

### relatedPeople
Type: `string[]`  
Required: no

### relatedPlaces
Type: `string[]`  
Required: no

### relatedTechnology
Type: `string[]`  
Required: no

### relatedCampaigns
Type: `string[]`  
Required: no

### relatedRecords
Type: `string[]`  
Required: no

Optional generic cross-link array for utility use.

Important rule:
Every published Chronicle record should link to at least 2 related records where possible.

---

# Record-Type Specific Fields

## Event Schema

Used for:
- raids
- battles
- sieges
- political events
- expeditions
- settlements

### eventType
Type: `enum`  
Required: yes

Allowed values:
- `raid`
- `battle`
- `siege`
- `settlement`
- `political`
- `expedition`

### factions
Type: `string[]`  
Required: no

Examples:
- `Vikings`
- `Northumbrians`

### overview
Type: `markdown`  
Required: no

### chronicleNarrative
Type: `markdown`  
Required: yes

### historicalSignificance
Type: `markdown`  
Required: yes

### outcome
Type: `markdown`  
Required: no

### wargamingSection
Type: `markdown`  
Required: no

### terrainIdeas
Type: `string[]` or `markdown`  
Required: no

---

## Culture Schema

### overview
Type: `markdown`  
Required: yes

### society
Type: `markdown`  
Required: no

### warfare
Type: `markdown`  
Required: no

### equipmentAndArms
Type: `markdown`  
Required: no

### architectureAndSettlements
Type: `markdown`  
Required: no

### majorEvents
Type: `string[]`  
Required: no

Store related event IDs when possible.

### wargamingSection
Type: `markdown`  
Required: no

---

## Person Schema

### culture
Type: `string`  
Required: no

Preferred to also use `relatedCultures`.

### biography
Type: `markdown`  
Required: yes

### historicalImportance
Type: `markdown`  
Required: no

### leadershipAndStrategy
Type: `markdown`  
Required: no

### majorEvents
Type: `string[]`  
Required: no

### wargamingInspiration
Type: `markdown`  
Required: no

---

## Campaign Schema

### overview
Type: `markdown`  
Required: no

### background
Type: `markdown`  
Required: yes

### campaignTimeline
Type: `markdown` or `CampaignStage[]`  
Required: no

### keyBattlesAndEvents
Type: `string[]`  
Required: no

### outcome
Type: `markdown`  
Required: no

### playThisCampaign
Type: `markdown`  
Required: no

---

## Technology Schema

This record type corresponds to **Arms & Warfare** in the public Chronicle UI.

### technologyType
Type: `enum`  
Required: no

Allowed values:
- `weapon`
- `armor`
- `ship`
- `tactic`
- `fortification`
- `equipment`
- `other`

### overview
Type: `markdown`  
Required: yes

### keyCharacteristics
Type: `markdown`  
Required: no

### historicalImpact
Type: `markdown`  
Required: no

### useInBattle
Type: `markdown`  
Required: no

### wargamingSection
Type: `markdown`  
Required: no

---

## Place Schema

### overview
Type: `markdown`  
Required: yes

### historicalImportance
Type: `markdown`  
Required: no

### majorEvents
Type: `string[]`  
Required: no

### terrainCharacteristics
Type: `markdown`  
Required: no

### wargamingSection
Type: `markdown`  
Required: no

---

# Journal Post Schema

Journal posts are editorial content and should be stored separately from Chronicle records.

## Required Fields

### title
Type: `string`  
Required: yes

### date
Type: `string`  
Required: yes

Recommended format:
- `YYYY-MM-DD`

### author
Type: `string`  
Required: no

### summary
Type: `string`  
Required: yes

### tags
Type: `string[]`  
Required: no

### status
Type: `enum`  
Required: yes

Allowed values:
- `draft`
- `review`
- `published`
- `archived`

### relatedRecords
Type: `string[]`  
Required: no

List of Chronicle record IDs referenced by the post.

### featuredImage
Type: `string`  
Required: no

### imageGallery
Type: `ImageItem[]`  
Required: no

### content
Type: `markdown`  
Required: yes

---

# Source Schema

Source objects should be structured consistently.

## Source
```yaml
title:
url:
author:
publisher:
year:
notes:
```

Field types:

### title
Type: `string`  
Required: yes

### url
Type: `string`  
Required: no

### author
Type: `string`  
Required: no

### publisher
Type: `string`  
Required: no

### year
Type: `number`  
Required: no

### notes
Type: `string`  
Required: no

---

# ImageItem Schema

## ImageItem
```yaml
src:
alt:
caption:
credit:
```

Field types:

### src
Type: `string`  
Required: yes

### alt
Type: `string`  
Required: yes

### caption
Type: `string`  
Required: no

### credit
Type: `string`  
Required: no

---

# CampaignStage Schema

Optional structured representation for campaign phases.

## CampaignStage
```yaml
title:
year:
relatedEvent:
summary:
```

### title
Type: `string`  
Required: yes

### year
Type: `number`  
Required: no

### relatedEvent
Type: `string`  
Required: no

### summary
Type: `string`  
Required: no

---

# Validation Rules by Type

## Event
Must have:
- id
- recordType = event
- title
- era
- summary
- status
- eventType
- chronicleNarrative
- historicalSignificance

Recommended:
- year
- location
- region
- relatedPlaces
- relatedCultures

## Culture
Must have:
- id
- recordType = culture
- title
- era
- summary
- status
- overview

## Person
Must have:
- id
- recordType = person
- title
- era
- summary
- status
- biography

## Campaign
Must have:
- id
- recordType = campaign
- title
- era
- summary
- status
- background

Recommended:
- startYear or endYear

## Technology
Must have:
- id
- recordType = technology
- title
- era
- summary
- status
- overview

## Place
Must have:
- id
- recordType = place
- title
- era
- summary
- status
- overview

Recommended:
- region
- latitude
- longitude

## Journal Post
Must have:
- title
- date
- summary
- status
- content

---

# File Storage Model

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

```text
content/events/0793-lindisfarne.md
content/cultures/vikings.md
content/people/alfred-the-great.md
content/campaigns/great-heathen-army.md
content/technology/viking-longship.md
content/places/lindisfarne.md
content/journal/painting-saxon-warband.md
```

---

# Filename Rules

## Structured Records
Use lowercase, hyphen-separated filenames.

### Events
`YYYY-slug.md`

Example:
- `0793-lindisfarne.md`

### Non-events
`slug.md`

Examples:
- `vikings.md`
- `alfred-the-great.md`
- `viking-longship.md`

## Journal Posts
Use descriptive slugs.

Examples:
- `painting-saxon-warband.md`
- `terrain-tutorial-wattle-fence.md`

---

# Example Event Frontmatter

```yaml
---
id: lindisfarne-793
recordType: event
title: Raid on Lindisfarne
era: Viking Age
summary: Norse raiders attacked the monastery at Lindisfarne, shocking Christian Europe.
status: draft

year: 793
dateLabel: AD 793

location: Lindisfarne, Northumbria
region: Britain
latitude: 55.67
longitude: -1.80
mapVisibility: true

eventType: raid
factions:
  - Vikings
  - Northumbrians

relatedCultures:
  - vikings
  - anglo-saxons

relatedPlaces:
  - lindisfarne

relatedTechnology:
  - viking-longship

tags:
  - monastery
  - coastal-raid
  - early-viking-age
---
```

---

# Example Journal Frontmatter

```yaml
---
title: Painting a Viking Warband
date: 2026-03-08
author: Ben
summary: Notes and photos from painting a new group of Viking warriors for the tabletop.
status: draft
tags:
  - miniatures
  - vikings
  - painting
relatedRecords:
  - vikings
  - lindisfarne-793
---
```

---

# Guiding Rule

The schema should make Chronicle content:

- easy to author
- easy to validate
- easy to render
- easy to link
- easy to grow

The correct structure should always be the path of least resistance.


# Update: Video Media Support

Chronicle records may include embedded or referenced video media. Video is treated as **media attached to records**, not as a standalone record type.

## videoGallery

Example:

videoGallery:
  - platform: youtube
    url: https://youtube.com/watch?v=example
    title: Example Historical Explanation
    description: Short explanation of the event
    creator: Example Channel
    thumbnail: optional-image-url

## VideoItem Schema

Fields:

platform
Allowed values:
- youtube
- vimeo
- file

url
URL of the video source.

title
Optional display title.

description
Optional description.

creator
Name of the channel or creator.

thumbnail
Optional thumbnail override.

Video items may appear in:
- Chronicle records
- Journal posts
