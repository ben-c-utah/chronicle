# Chronicle Application Blueprint
Version 1.0

This document defines the screen structure, navigation model, and core interactions for **Chronicle: The Viking Age**.

Chronicle is not just a map. It is a historical companion for wargamers built around:
- historical narrative
- map discovery
- timeline exploration
- linked historical records
- scenario inspiration

This blueprint defines how users move through the application and how the main features work together.

---

# Application Goal

The first version of Chronicle should allow a user to:

1. enter the project through a clear landing page
2. explore the Viking Age through a map and timeline
3. open a Chronicle record
4. move naturally to related records
5. gain both historical understanding and tabletop inspiration

---

# Product Structure

Chronicle
└── The Viking Age
    ├── Home
    ├── Map
    ├── Timeline
    ├── Events
    ├── Cultures
    ├── People
    ├── Arms & Warfare
    ├── Places
    ├── Campaigns
    └── Search / Browse

---

# Core Screens

## 1. Home Screen

Purpose:
- establish the Chronicle identity
- introduce the current era
- provide clear starting points

Main content:
- title: Chronicle
- subtitle: The Viking Age
- short project description
- primary navigation choices

Suggested actions:
- Explore the Map
- Follow the Timeline
- Browse the Chronicle
- Discover a Scenario

Optional featured section:
- Featured Event
- Featured Culture
- Featured Campaign

Home should feel like opening a great historical volume.

---

## 2. Map Screen

Purpose:
- provide spatial discovery
- let users browse by geography
- act as a visual table of contents

Main elements:
- Europe map
- event markers
- place markers
- filter controls
- selected record panel

Version 1 marker sources:
- Events
- Places

Future marker sources:
- campaign paths
- trade routes
- migration routes

Map interactions:
- click marker → open Chronicle panel
- filter markers by type, year, region, culture
- optionally focus map on a selected campaign or culture story

Important rule:
The map is a discovery tool, not the sole heart of the app.

---

## 3. Timeline Screen

Purpose:
- let users experience the age unfolding through time
- provide chronological discovery

Main elements:
- horizontal timeline or year slider
- chronological event list
- quick event cards
- selected event panel

Core interactions:
- click year/event → open record
- move through key moments
- optionally play forward chronologically

Version 1 focus:
- Events only

Future expansion:
- campaign phases
- rulers
- political transitions

---

## 4. Record Detail Screen

Purpose:
- display the full Chronicle record
- serve as the main reading experience

This screen is the heart of the application.

Supported record types:
- Event
- Culture
- Person
- Campaign
- Arms & Warfare
- Place

Standard structure:
- title block
- metadata
- chronicle narrative
- historical significance
- wargaming section
- related records

Important rule:
No record page should feel isolated.

Every record should include related links such as:
- related events
- related places
- related cultures
- related people
- related warfare entries
- related campaigns

---

## 5. Browse Screen

Purpose:
- allow category-based exploration
- help users discover content beyond map and timeline

Browse categories:
- Events
- Cultures
- People
- Arms & Warfare
- Places
- Campaigns

Possible sorting/filtering:
- alphabetical
- by year
- by region
- by culture
- by record type

This page is especially useful for users who know what they want.

---

## 6. Search Screen

Purpose:
- allow direct lookup of names, places, and subjects

Search should support:
- record title
- alternate names
- tags
- cultures
- places
- warfare topics

Examples:
- Lindisfarne
- Alfred
- longship
- shield wall
- York

Search results should clearly show record type.

Example:
- Raid on Lindisfarne — Event
- Lindisfarne — Place
- Viking Longship — Arms & Warfare

---

## 7. Campaign Screen

Purpose:
- let users follow a multi-event historical arc
- provide the best pathway for linked tabletop play

Main elements:
- campaign overview
- timeline of campaign stages
- map highlights
- key battles and people
- "Play This Campaign" section

Campaigns are one of the strongest long-term features, but can be introduced after the basic record system is working.

---

# Navigation Model

Users should be able to enter Chronicle from multiple directions.

## Navigation Paths

### Path A: Home → Map → Record
A user starts visually.

### Path B: Home → Timeline → Event → Related Records
A user starts chronologically.

### Path C: Home → Browse → Culture → Related Events / Warfare / Places
A user starts conceptually.

### Path D: Home → Search → Record
A user starts with a specific subject.

### Path E: Home → Campaign → Ordered Events
A user starts with a story arc.

This multi-entry design is important because different users think differently.

---

# Core UI Regions

## Global Header

Should include:
- Chronicle logo/title
- current era
- navigation links
- search access

Suggested nav:
- Home
- Map
- Timeline
- Browse
- Campaigns

---

## Main Content Area

Varies by page, but generally follows:
- primary exploration surface
- secondary context or detail panel

Example:
- map + chronicle panel
- timeline + selected event panel
- browse list + record preview

---

## Chronicle Panel

This is the visual and emotional centerpiece.

It should feel like a manuscript page opened beside the exploration view.

Used on:
- map screen
- timeline screen
- optionally browse/search preview

Contents:
- title
- year or date
- location
- narrative
- significance
- tabletop inspiration
- related links

---

# Main Interactions

## Marker Click
User clicks a map marker.
Result:
- map focuses marker
- chronicle panel opens
- selected record is displayed

## Timeline Selection
User clicks an event in time.
Result:
- selected event opens
- related items become visible

## Related Record Click
User opens a linked record.
Result:
- application transitions to that record page or panel

## Filter Change
User changes year, region, or type filters.
Result:
- visible content updates
- current context remains clear

---

# Record Relationships in the UI

Each record page should visually show connections.

Example sections:
- Related Events
- Related People
- Related Cultures
- Related Places
- Related Arms & Warfare
- Related Campaigns

This is what turns Chronicle into a living knowledge network.

---

# MVP Recommendation

Version 1 should keep the blueprint simple.

## Include in MVP
- Home
- Map
- Timeline
- Record Detail
- Browse
- basic Search
- Events
- Cultures
- People
- Arms & Warfare
- Places

## Defer until later
- campaign map paths
- animated routes
- advanced scenario generator
- user accounts
- community content
- battle report uploads

---

# Suggested First Build Order

## Phase 1
- Home page
- Map page with event markers
- Record detail panel/page
- 5 to 10 event records

## Phase 2
- Timeline page
- Culture records
- Place records
- related record links

## Phase 3
- People records
- Arms & Warfare records
- Browse page
- search

## Phase 4
- Campaign records
- campaign navigation
- richer scenario tools

---

# UX Principles

Chronicle should always feel:
- calm
- clear
- scholarly
- immersive
- useful to wargamers

Rules:
- no dead-end pages
- no cluttered screens
- no overdesigned map controls
- every page must suggest a next step
- historical content must remain readable

---

# Page Blueprint Summary

Home
→ brand, entry points, featured records

Map
→ geographic exploration + chronicle panel

Timeline
→ chronological exploration + selected event

Browse
→ category-based discovery

Search
→ direct access to records

Record Detail
→ full narrative page for any record type

Campaigns
→ linked historical story arcs

---

# Guiding Product Rule

Chronicle is not a map with notes attached.

Chronicle is a historical companion where:
- map
- timeline
- records
- campaigns
- and wargaming inspiration

all work together to tell the story of the age.

The interface should always support that larger purpose.


# Update: Media Rendering

Chronicle record pages support media sections.

Media components:

Featured Image  
Image Gallery  
Embedded Video

Video should be displayed using a VideoEmbed component.

Video may appear in:

- Chronicle records
- Journal posts
- tutorials
- battle reports
