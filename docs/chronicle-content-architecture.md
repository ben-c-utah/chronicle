
# Chronicle Content Architecture
Version 1.0

This document defines the structural blueprint for how Chronicle organizes historical information.

Chronicle is designed as a **network of interconnected historical records** rather than a simple list of events.
Users should be able to move naturally between people, places, cultures, and events while exploring history.

---

# Core Record Types

Chronicle currently supports six primary record types.

- Events
- Cultures
- People
- Campaigns
- Arms & Warfare
- Places

Each record type plays a specific role in how history is explored.

---

# Event

Events represent specific historical occurrences tied to time and place.

Examples:
- Raid on Lindisfarne
- Battle of Edington
- Sack of Paris

Events drive:
- timeline exploration
- map markers
- scenario inspiration for wargamers

Events usually connect to:
- cultures
- people
- places
- campaigns
- arms & warfare

---

# Culture

Cultures describe societies and peoples.

Examples:
- Vikings
- Anglo-Saxons
- Franks

Culture entries explain:
- social structure
- warfare traditions
- architecture and settlements
- equipment and arms

Cultures connect strongly to:
- people
- arms & warfare
- places
- events
- campaigns

---

# People

People entries represent historical individuals.

Examples:
- Alfred the Great
- Harald Hardrada
- Rollo

These records help connect multiple events and campaigns through a single figure.

People typically connect to:
- cultures
- events
- campaigns
- places

---

# Campaign

Campaigns represent a sequence of related events forming a historical narrative.

Examples:
- The Great Heathen Army
- Viking Raids in Francia
- Harald Hardrada’s invasion of England

Campaigns help users follow history as a story and can inspire linked tabletop scenarios.

Campaigns connect to:
- events
- people
- cultures
- places
- arms & warfare

---

# Arms & Warfare

This category includes weapons, tactics, ships, armor, and military innovations.

Examples:
- Viking Longship
- Saxon Shield Wall
- Scandinavian Sword
- English Longbow

These records explain how warfare actually functioned and are highly valuable for tabletop gamers.

Arms & Warfare entries connect to:
- cultures
- events
- campaigns
- sometimes people

---

# Place

Places represent historically important locations.

Examples:
- Lindisfarne
- York (Jorvik)
- Dublin
- Paris

Place entries may appear on the map even when no specific event is selected.

Places connect to:
- events
- cultures
- people
- campaigns

---

# Relationship Model

Chronicle records form a web of connections.

Example relationship flow:

Culture
 ↔ People
 ↔ Arms & Warfare
 ↔ Places
 ↔ Events
 ↔ Campaigns

The system is intentionally designed so that no page exists in isolation.

Every entry should link to multiple related records.

---

# Navigation Paths

Users should be able to enter Chronicle through multiple discovery paths.

## Map Exploration

Map → Event or Place → Related Cultures / People / Campaigns / Arms & Warfare

## Timeline Exploration

Timeline → Event → Related Records

## Culture Exploration

Culture → Events / People / Arms & Warfare / Places

## Campaign Exploration

Campaign → Ordered Events → Related People / Places / Technology

## Warfare Exploration

Arms & Warfare → Related Cultures / Events / Campaigns

---

# Feature Relationships

Feature | Powered By
------- | ----------
Map | Events, Places
Timeline | Events
Scenario Inspiration | Events, Campaigns, Arms & Warfare
Narrative Exploration | Campaigns, People, Events

---

# Version 1 Scope

Initial development should focus on:

- Events
- Cultures
- People
- Arms & Warfare
- Places

Campaigns can be added once the basic system is working.

---

# Content Hierarchy

Chronicle
└── The Viking Age
    ├── Map
    ├── Timeline
    ├── Events
    ├── Cultures
    ├── People
    ├── Arms & Warfare
    ├── Places
    └── Campaigns

This hierarchy keeps the system clear and expandable.

---

# Architectural Principle

Chronicle should always prioritize **relationships over categories**.

Categories organize the system, but relationships allow discovery.

Every record should link to at least two or more related records to keep the knowledge network alive.

---

# Chronicle Philosophy

Chronicle is not merely a historical reference.

It is a **living chronicle of the age**, where:

- events
- peoples
- places
- warfare
- and stories

intertwine to tell the history of the world.


# Update: Media Attachments

Media (images and video) attach to Chronicle records as supporting content.

Media types:

Images  
Video  

Video is attached through the `videoGallery` field and may reference:

- YouTube
- Vimeo

Media should enhance Chronicle records but does not exist as its own record type.
