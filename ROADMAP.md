---
id: CER-0009
title: Roadmap
status: draft
version: 0.2
tags:
  - roadmap
  - scope
---

# Roadmap

The Case Engine Reference will be developed through bounded milestones.

CER v1.0 is intended to be complete, implementable, and finite.

## Scope rule

CER v1.0 SHALL define the minimum complete specification required to implement a full paper-based cold case generator.

Ideas that are valuable but not required for a complete v1.0 implementation SHALL be placed in `extensions/` or future RFCs.

This repository MUST NOT grow indefinitely without a release target.

## CER v1.0 Core

CER v1.0 Core includes:

1. Specification Framework
2. Foundations
3. Case Architecture
4. Evidence System
5. Document System
6. Discovery System
7. Validation System
8. Rendering and Packaging
9. Agent Architecture
10. JSON Schemas
11. Reference Case

## Out of core for v1.0

The following are explicitly out of core scope for v1.0 unless later promoted by accepted RFC:

- live event orchestration
- AI non-player characters
- augmented reality scenes
- video-heavy evidence packages
- audio drama mode
- campaign mode
- multiplayer scoring systems
- commercial storefront implementation
- production admin GUI
- fully automated graphic design studio

These MAY be specified as extensions.

## Definition of Done for v1.0

CER v1.0 is complete when:

- each core volume has accepted documents
- core terminology is stable
- core rules are numbered and cross-referenced
- core patterns are documented
- validation tests exist for solvability, consistency, redundancy, and spoiler safety
- JSON schemas exist for the primary models
- one reference case demonstrates the full pipeline
- implementation notes are sufficient for a LangGraph-style engine
- extension candidates are separated from core requirements

## M0 — Specification Framework

Goal: establish the structure and governance of CER.

Deliverables:

- repository structure
- master outline
- style guide
- writing guidelines
- specification language
- terminology
- versioning
- ADR process
- RFC process
- architecture overview
- scope control
- extension process

## M1 — Foundations

Goal: define the core theory of case construction.

Topics:

- vision
- design philosophy
- information-first model
- investigation theory
- case as information system
- player-facing vs hidden information
- fairness
- core solvability

## M2 — Case Architecture

Goal: define the core graph models.

Topics:

- Truth Graph
- Timeline Graph
- Relationship Graph
- Evidence Graph
- Perception Graph
- Discovery Graph
- Case Graph
- Document Distribution Matrix
- Actor Model
- Fact Model
- Claim Model
- Event Model
- Object Model
- Location Model
- Constraint Graph

## M3 — Evidence System

Goal: define evidence, clues, claims, contradictions, red herrings, evidence strength, and redundancy.

Minimum deliverables:

- evidence model
- evidence fragment
- evidence exposure
- evidence strength
- evidence reliability
- evidence redundancy
- critical facts
- corroboration
- contradiction taxonomy
- red herring model
- context clues
- means, motive, opportunity evidence

## M4 — Document System

Goal: define document types, document roles, document templates, and document realism.

Minimum deliverables:

- document model
- document metadata
- document roles
- document distribution matrix integration
- document realism rules
- police documents
- medical documents
- legal documents
- financial documents
- personal documents
- digital evidence documents
- media and context documents

## M5 — Discovery System

Goal: define player discovery, hypothesis progression, inference chains, group reasoning, and difficulty.

## M6 — Validation System

Goal: define conformance tests, quality gates, solvability checks, repair strategy, and quality metrics.

## M7 — Rendering and Packaging

Goal: define printable outputs, DOCX/PDF packaging, visual design, asset handling, solution packs, and spoiler boundaries.

## M8 — Agent Architecture

Goal: define implementation-independent agent architecture and LangGraph mapping notes.

## M9 — Schemas and Reference Case

Goal: publish schemas and one complete reference case demonstrating CER v1.0.

## M10 — Complete v1.0 Release

Goal: publish a complete v1.0 reference suitable for implementation.