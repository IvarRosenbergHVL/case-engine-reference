---
id: CER-0009
title: Roadmap
status: draft
version: 0.3
tags:
  - roadmap
  - scope
  - v1
---

# Roadmap

The Case Engine Reference is developed through bounded milestones.

CER v1.0 is intended to be complete, implementable, and finite.

## Current phase

CER is now in **V1 Hardening**.

The focus is:

- completing remaining V1 gaps
- removing scope creep
- auditing terminology and references
- preparing a release candidate

## Scope rule

CER v1.0 defines the minimum complete specification required to implement a document-based investigation case engine or production workflow.

Ideas that are valuable but not required for a complete v1.0 implementation SHOULD be placed in `extensions/`, future RFCs, or V1.1 planning.

This repository SHOULD NOT grow indefinitely without a release target.

## CER v1.0 Core

CER v1.0 Core includes:

1. Specification Framework
2. Foundations
3. Case Architecture
4. Evidence System
5. Document System
6. Representative Document Types
7. Discovery System
8. Information Economy
9. Critical Failure Modes
10. Validation System
11. Rendering and Packaging
12. Artifact Production
13. Case Engine Reference Architecture
14. Production Graphs
15. Minimal JSON Schemas
16. Compliance
17. V1 Hardening and Release Checklist

## Out of core for v1.0

The following are out of core scope for v1.0 unless required to repair a V1 blocker:

- exhaustive document type catalog
- large schema catalog
- production admin GUI
- live event orchestration
- player telemetry and analytics
- advanced certification program
- commercial storefront implementation
- provider-specific prompt libraries
- runtime-specific orchestration examples
- full reference case package

These MAY be specified as extensions or future versions.

## Definition of Done for v1.0

CER v1.0 is complete when:

- all V1 core sections exist
- V1 scope freeze is documented
- terminology decisions are documented
- normative language guidance is documented
- critical failure modes exist
- rendering and packaging requirements are complete
- artifact production and human review are defined
- case engine reference architecture is complete
- production graph dependency model is defined
- minimal schemas exist
- compliance model exists
- audit checklist exists
- known blocking issues are resolved or tracked

## M0 — Specification Framework

Status: complete for V1.

Goal: establish the structure and governance of CER.

## M1 — Foundations

Status: complete for V1.

Goal: define the core theory of case construction.

## M2 — Case Architecture

Status: complete for V1.

Goal: define the core graph models.

## M3 — Evidence System

Status: complete for V1.

Goal: define evidence, clues, claims, contradictions, red herrings, evidence strength, and redundancy.

## M4 — Document System

Status: complete for V1.

Goal: define document models, document specifications, roles, distribution, validation, rendering, and packaging.

## M5 — Discovery System

Status: complete for V1.

Goal: define player discovery, hypothesis progression, inference chains, elimination, suspicion, and confidence.

## M6 — Information Economy and Failure Modes

Status: complete enough for V1.

Goal: define clue density, noise, load, context cost, and the critical failure modes that block fair release.

## M7 — Validation System

Status: complete for V1.

Goal: define validation checks, quality dimensions, severity, waivers, repair recommendations, case score, and release decisions.

## M8 — Rendering and Packaging

Status: complete for V1.

Goal: define templates, assets, visual clue preservation, print readiness, export formats, audience separation, package manifests, rendering validation, and accessibility.

## M9 — Artifact Production

Status: complete for V1.

Goal: define specification-driven artifact production, human control, quality gates, prompt derivation, visual continuity, case style guide, capability profiles, and producer selection.

## M10 — Case Engine and Production Graphs

Status: complete for V1.

Goal: define implementation-independent engine components, pipeline, dependency tracking, impact analysis, and partial regeneration.

## M11 — Schemas and Compliance

Status: minimal V1 complete.

Goal: provide enough machine-readable structure and compliance guidance to support early implementations.

## M12 — V1 Hardening

Status: active.

Goal: audit, align, and prepare CER 1.0 release candidate.

## M13 — CER 1.0 Release

Goal: publish a complete V1 reference suitable for implementation.
