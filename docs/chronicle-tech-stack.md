
# Chronicle Tech Stack
Version 1.0

This document defines the official technology stack used for building Chronicle.
These decisions are intended to provide a stable, scalable foundation for the project.

---

# Core Philosophy

Chronicle is designed as a **static-first historical knowledge engine**.  
All primary content lives as **Markdown / MDX files in the repository**, not in a database.

Benefits:

- content is portable
- version controlled
- easy for community contributions
- fast static site performance
- no database infrastructure required

---

# Frontend Framework

Chronicle uses:

Next.js

Reasons:

- React ecosystem
- static site generation
- strong developer tooling
- excellent hosting integration

Next.js allows Chronicle to generate pages from Markdown content at build time.

---

# Language

TypeScript

Reasons:

- strong type safety
- scalable architecture
- easier refactoring
- schema validation integration

---

# Content Format

Chronicle records are stored using:

MDX

MDX allows:

- Markdown writing
- React components inside content
- embedded media components
- rich layouts

Example content location:

content/events/lindisfarne-raid.mdx

---

# Map System

Chronicle uses:

Mapbox GL JS

Reasons:

- high quality interactive maps
- customizable historical map styling
- scalable GeoJSON support
- modern performance

Guidelines:

Most geographic data should use **Mapbox layers and GeoJSON**.

HTML markers should only be used for special interactive cases.

---

# Timeline System

Chronicle uses a **custom React timeline component**.

Reasons:

- fully customizable Chronicle styling
- tighter integration with Chronicle records
- easier linking with map navigation
- no dependency on heavy timeline libraries

The timeline reads event dates from record metadata:

year
startYear
endYear

Future phases may add:

- era bands
- campaign overlays
- advanced navigation

---

# Schema Validation

Chronicle uses:

Zod

Zod validates Markdown frontmatter to ensure records follow the Chronicle schema.

Example usage:

EventSchema.parse(frontmatter)

Benefits:

- prevents broken records
- ensures data consistency
- provides type inference

---

# Search Engine

Chronicle uses:

FlexSearch

Reasons:

- fast client-side search
- no server required
- good performance for static sites

Search index is generated during build.

---

# Image Handling

Images use the Next.js image component.

next/image

Benefits:

- automatic optimization
- responsive sizing
- lazy loading
- CDN compatibility

---

# Video Support

Video is supported through a Chronicle component:

VideoEmbed

Supported platforms:

- YouTube
- Vimeo

Videos are stored in the schema using:

videoGallery

Videos are **media attached to records**, not standalone record types.

---

# Admin Dashboard

Chronicle includes an internal admin dashboard located at:

/admin

This dashboard allows creation and editing of Chronicle records.

Features:

- record editor
- media upload fields
- relationship linking
- schema validation
- preview system

The admin dashboard lives in the **same Next.js application** during early development.

---

# Hosting

Chronicle will be hosted using:

Vercel

Reasons:

- optimized for Next.js
- instant deployments
- excellent performance
- easy scaling

---

# Repository

Chronicle uses GitHub for:

- version control
- collaboration
- issue tracking
- documentation

---

# Summary

Chronicle Technology Stack

Frontend: Next.js + React + TypeScript
Content: MDX
Map: Mapbox GL JS
Timeline: Custom React component
Validation: Zod
Search: FlexSearch
Images: Next.js Image
Video: VideoEmbed component
Admin: Integrated /admin dashboard
Hosting: Vercel
Repository: GitHub

