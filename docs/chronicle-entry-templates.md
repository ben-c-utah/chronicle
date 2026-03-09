# Chronicle Entry Templates
Version 1.1

This document provides templates for writing Chronicle records.

Chronicle records are normally created through the **Chronicle Admin Dashboard**, which automatically generates the appropriate frontmatter and section structure for each record type.

These templates represent the **underlying structure used by the system**. They are provided as a reference for understanding how Chronicle content is organized and stored.

---

# Base Frontmatter Template

All Chronicle entries begin with YAML frontmatter.

---
id:
recordType:
title:
era:
summary:

year:
startYear:
endYear:

location:
region:
latitude:
longitude:

factions:

relatedEvents:
relatedCultures:
relatedPeople:
relatedPlaces:
relatedTechnology:
relatedCampaigns:

tags:
sources:
---

---

# Base Narrative Structure

# Title

## Overview
Short introduction describing the subject.

---

## Chronicle Narrative
Narrative description written in an engaging historical tone.

---

## Historical Significance
Why the subject matters historically.

---

# Event Template

## Event Details

Year:
Location:
Factions:

---

## What Happened
Narrative description of the event.

---

## Outcome
Results and consequences.

---

## For the Wargaming Table
Suggested scenario ideas.

---

## Terrain & Table Ideas
Terrain features useful for building tabletop boards.

Examples:
- monastery complex
- rivers
- forests
- fortifications

---

# Culture Template

## Cultural Overview
Origins and general description.

---

## Society
Social structure and everyday life.

---

## Warfare
Military traditions and fighting style.

---

## Equipment & Arms
Typical weapons and armor.

---

## Architecture & Settlements
Village structures and fortifications.

---

## Major Historical Events
Important events involving this culture.

---

## For the Wargaming Table
Ideas for representing this culture in tabletop games.

---

# Person Template

## Biography
Narrative life story.

---

## Historical Importance
Why the individual matters historically.

---

## Major Events
Events involving this figure.

---

## Leadership & Strategy
Military or political style.

---

## Wargaming Inspiration
Ideas for scenarios or character inspiration.

---

# Campaign Template

## Background
Events leading up to the campaign.

---

## Campaign Timeline
Chronological overview.

---

## Key Battles & Events
Important events during the campaign.

---

## Outcome
Historical consequences.

---

## Play This Campaign
Ideas for a linked tabletop campaign.

---

# Arms & Warfare Template

## Overview
Description of the weapon, tactic, or technology.

---

## Key Characteristics
Important design or functional features.

Examples:
- construction
- materials
- design innovations

---

## Historical Impact
How this influenced warfare.

---

## Use in Battle
How it was deployed historically.

---

## Related Cultures
Which groups used this technology.

---

## For the Wargaming Table
Ideas for representing the technology in tabletop scenarios.

---

# Place Template

## Overview
Description of the place.

---

## Historical Importance
Why this location mattered.

---

## Major Events
Important events that occurred there.

---

## Terrain Characteristics
Landscape features useful for tabletop terrain.

---

## For the Wargaming Table
Terrain layout inspiration.


# Update: Media Fields

All Chronicle record templates support media attachments.

Supported fields:

featuredImage
imageGallery
videoGallery

Example YAML:

featuredImage: /images/events/example.jpg

imageGallery:
  - src: /images/example1.jpg
    caption: Example caption

videoGallery:
  - platform: youtube
    url: https://youtube.com/watch?v=example

Media can appear in the **Media** section of any record template.
