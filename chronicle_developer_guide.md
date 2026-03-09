git status  
git add .  
git commit -m "short description"  
git push
# Chronicle Developer Guide

## Overview

Chronicle is a static‑first historical knowledge engine designed for
tabletop wargamers, historians, and hobbyists.\
The system allows users to explore historical events, places, cultures,
and people through an interconnected knowledge graph built from Markdown
content files.

The project prioritizes:

-   long‑term maintainability
-   content ownership through Markdown
-   schema validation to ensure data integrity
-   static site performance
-   deep relationship navigation between historical records

Chronicle is not a traditional CMS. Instead, it is a **knowledge system
driven by structured Markdown content**.

------------------------------------------------------------------------

# Core Philosophy

## Markdown First

All historical data lives in Markdown / MDX files.

Example location:

content/ records/ journal/

Markdown files contain:

-   YAML frontmatter metadata
-   MDX content body

This ensures:

-   version control
-   portability
-   long‑term preservation
-   Git‑based workflows

The admin dashboard generates and edits Markdown files but does not
replace them as the system of record.

------------------------------------------------------------------------

## Schema Driven

Chronicle uses a centralized schema definition that defines:

-   valid record types
-   required metadata
-   data types
-   relationship fields

Every Markdown record must pass schema validation before it can be used
by the application.

Benefits:

-   prevents malformed records
-   prevents broken relationships
-   ensures long‑term data consistency

------------------------------------------------------------------------

## Static‑First Architecture

Chronicle is built using **Next.js static generation**.

This allows:

-   extremely fast site performance
-   minimal hosting infrastructure
-   Git‑based deployments
-   simplified scaling

Most Chronicle pages are generated at build time.

Dynamic functionality such as map interaction runs client‑side.

------------------------------------------------------------------------

# Tech Stack

Core technologies:

Next.js\
React\
TypeScript\
MDX\
Mapbox GL JS

Supporting tools:

Zod (schema validation)\
gray‑matter (frontmatter parsing)\
remark / rehype (MDX processing)

The system is designed to run as a fully static site hosted on platforms
such as:

-   Vercel
-   Netlify
-   Cloudflare Pages

------------------------------------------------------------------------

# Repository Structure

Typical Chronicle repository layout:

chronicle/

content/ records/ journal/

src/

components/ pages/ lib/ schema/ map/ timeline/

public/

scripts/

Each directory has a specific role.

------------------------------------------------------------------------

## content/

Contains all historical knowledge records written in Markdown.

Example:

content/records/event-lindisfarne-793.mdx

These files represent the entire Chronicle knowledge base.

------------------------------------------------------------------------

## src/schema/

Contains the canonical Chronicle data schemas.

Examples:

Event schema\
Person schema\
Place schema\
Culture schema\
Technology schema\
Campaign schema

All content records must validate against these schemas.

------------------------------------------------------------------------

## src/lib/

Contains utilities for:

-   loading Markdown files
-   validating schemas
-   building the knowledge graph
-   linking relationships between records

------------------------------------------------------------------------

## src/map/

Contains the interactive Chronicle map system built with Mapbox GL JS.

Responsibilities:

-   render map
-   display event markers
-   cluster points
-   open record views from map interactions

------------------------------------------------------------------------

## src/timeline/

Contains the timeline visualization system used to browse historical
events chronologically.

------------------------------------------------------------------------

## src/components/

Reusable React components for UI elements such as:

-   record cards
-   navigation panels
-   related record lists
-   map popups

------------------------------------------------------------------------

# Chronicle Record Model

Chronicle data is organized into structured record types.

Primary types:

Event\
Person\
Culture\
Place\
Technology\
Campaign

Each record type represents a historical concept.

Records connect to each other through relationships.

------------------------------------------------------------------------

# Example Record

Example MDX file for a historical event.

------------------------------------------------------------------------

id: event-lindisfarne-793\
recordType: event\
title: Raid on Lindisfarne\
year: 793\
latitude: 55.6708\
longitude: -1.7990

relatedCultures:

-   culture-vikings
-   culture-anglo-saxons

relatedPlaces:

-   place-lindisfarne

------------------------------------------------------------------------

Content describing the event goes here.

------------------------------------------------------------------------

This structure allows Chronicle to build a knowledge graph connecting
events, people, and cultures.

------------------------------------------------------------------------

# Relationship Graph

Chronicle automatically constructs relationships between records.

Example connections:

Event → Culture\
Event → Place\
Person → Culture\
Person → Event\
Campaign → Event

These relationships allow users to move naturally through historical
content.

Example navigation:

Event page → related people → related cultures → related places.

------------------------------------------------------------------------

# Map System

Chronicle uses Mapbox GL JS to visualize geographic data.

Events with coordinates appear as markers on the map.

Map features include:

-   marker clustering
-   zoom‑dependent visibility
-   popups linking to record pages
-   filtering by culture or period

The map acts as a primary discovery interface for Chronicle.

------------------------------------------------------------------------

# Timeline System

The timeline visualizes events chronologically.

Users can scroll through historical periods and open event records.

Timeline features:

-   year scale
-   event markers
-   clickable event cards
-   filtering by culture or region

------------------------------------------------------------------------

# Record Pages

Each record generates a page in the application.

Record pages contain:

-   metadata
-   narrative content
-   related records
-   geographic links
-   timeline context

The goal is to create a reading experience that feels like exploring a
historical chronicle rather than browsing a database.

------------------------------------------------------------------------

# Journal System

Chronicle includes a separate journal system for hobby content.

Journal posts may include:

-   terrain builds
-   campaign reports
-   painting guides
-   historical research notes

Journal content is simpler than Chronicle records and does not require
complex relationships.

------------------------------------------------------------------------

# Admin Dashboard

Chronicle includes a custom authoring interface.

This tool allows the developer to:

-   create new records
-   edit metadata
-   validate schema
-   manage relationships
-   generate Markdown files

The admin tool is not intended to replace Markdown but to assist with
content creation.

------------------------------------------------------------------------

# Development Workflow

Typical workflow:

1.  Create or edit a Markdown record.
2.  Run schema validation.
3.  Commit changes to Git.
4.  Build the site.
5.  Deploy static output.

Because the system is static‑first, deployment is simple and
predictable.

------------------------------------------------------------------------

# Build Pipeline

Chronicle build process:

1.  Load Markdown records.
2.  Parse frontmatter.
3.  Validate schema.
4.  Build record graph.
5.  Generate static pages.
6.  Bundle map and timeline data.

------------------------------------------------------------------------

# Project Goals

Chronicle aims to create:

-   a deeply interconnected historical knowledge base
-   an exploration interface for tabletop gamers
-   a long‑term archive of historical knowledge

The Viking Age is the first era supported, but the architecture is
designed to support any historical period.

------------------------------------------------------------------------

# Long Term Vision

Future possibilities include:

-   additional historical eras
-   campaign generators
-   AI assisted research tools
-   map overlays for battles and migrations
-   deeper timeline visualization

Chronicle is intended to grow into a comprehensive historical
exploration platform.

------------------------------------------------------------------------

End of Developer Guide.
