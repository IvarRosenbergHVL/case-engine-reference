---
id: CER-1101
title: Artifact Production Specification
status: draft
version: 0.1
tags:
  - artifact-production
  - specification
  - work-order
---

# Artifact Production Specification

An Artifact Production Specification defines the requirements for producing a case artifact.

## Purpose

The specification is the work order.

It allows a human or machine producer to create an artifact without inventing case facts, evidence, visual continuity, or acceptance criteria.

## Definition

An Artifact Production Specification is a structured requirement document for producing one artifact or a related artifact set.

It defines what must be produced, what must be preserved, what must not be included, and how the artifact will be accepted.

## Required fields

An Artifact Production Specification SHOULD define:

| Field | Description |
|---|---|
| artifact_id | Stable identifier. |
| artifact_type | Document, photo, map, logo, screenshot, diagram, etc. |
| purpose | Why the artifact is needed. |
| source_specification | Related document, evidence, rendering, or production specification. |
| required_facts | Facts that must be represented or preserved. |
| required_exposures | Evidence exposures that must appear. |
| forbidden_content | Facts, objects, actors, or clues that must not appear. |
| style_requirements | Tone, realism, format, visual or textual style. |
| continuity_requirements | Case style, actor appearance, logos, layout, period, location. |
| quality_gates | Checks required before approval. |
| acceptance_criteria | Conditions for approving the artifact. |
| review_status | Draft, review, revision, approved, locked, rejected. |

## Required vs recommended

The specification SHOULD separate:

- requirements that must be satisfied
- recommendations that may improve output
- examples that are illustrative only
- forbidden content that must not appear

## Producer independence

The specification SHOULD be usable by:

- a human writer
- a graphic designer
- a photographer
- an illustrator
- a layout tool
- an AI text generator
- an AI image generator
- a renderer

## Normative requirements

An artifact SHOULD be evaluated against its specification, not against the prompt or tool used to create it.

The producer SHOULD NOT invent new critical facts.

The artifact MUST satisfy required facts and forbidden content constraints before approval.

## Validation questions

- Does the specification state what must be produced?
- Are required and forbidden elements clear?
- Can a human fulfill the specification without seeing hidden reasoning?
- Can an AI prompt be derived from the specification if needed?
- Are acceptance criteria testable?

## Related

- ADR-0005
- CER-1100
- CER-0905
- CER-1001
