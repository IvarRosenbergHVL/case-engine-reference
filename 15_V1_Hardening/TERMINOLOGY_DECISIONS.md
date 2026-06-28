---
id: CER-1503
title: Terminology Decisions
status: draft
version: 0.1
tags:
  - v1
  - terminology
  - hardening
---

# Terminology Decisions

Terminology Decisions define preferred V1 vocabulary.

## Purpose

CER should use the same words for the same concepts across the whole specification.

This document locks preferred terms for V1 audit.

## Preferred terms

| Preferred term | Use |
|---|---|
| artifact | Any produced case material, including documents, images, maps, renders, package files, and facilitator material. |
| document | A specific kind of artifact with document form, source, role, and metadata. |
| document specification | The planned requirements for a document before writing and rendering. |
| artifact production specification | The work order defining requirements for producing an artifact. |
| case style guide | Case-specific visual and textual production guide. |
| human review | Human inspection of material before decision. |
| human approval | Human decision accepting material for use. |
| locked artifact | Approved artifact protected from unapproved change. |
| producer | Human, AI, renderer, tool, or workflow that creates an artifact. |
| quality gate | Required check before approval or release. |
| production graph | Dependency graph for production objects. |
| production node | Node in a production graph. |
| production edge | Dependency relationship in a production graph. |
| package manifest | Structured record of release package contents. |
| audience group | Player, hints, facilitator, production, or archive grouping. |
| validation report | Structured output from validation checks. |
| waiver | Explicit human acceptance of a known issue. |

## Terms to avoid or limit

| Term | Guidance |
|---|---|
| asset | Use artifact unless referring to a reusable visual or template component. |
| prompt | Use only when discussing optional AI prompt derivation. |
| AI production | Use artifact production unless AI itself is the topic. |
| final artifact | Prefer approved artifact, locked artifact, rendered file, or release file depending on meaning. |
| player-safe | Prefer audience-safe when discussing package groups broadly. |
| solution file | Prefer facilitator material or answer-only material. |

## Human control terms

Use human review for inspection.

Use human approval for acceptance.

Use locked for material protected from unapproved changes.

Use waiver for accepting a known issue without treating it as normal pass.

## Production terms

Use specification for requirements.

Use recommendation for optional guidance.

Use prompt only for generated tool instructions derived from specifications.

## Graph terms

Use Production Graph as the general dependency graph.

Use Truth Graph, Evidence Graph, Discovery Graph, Document Graph, Artifact Graph, Rendering Graph, and Release Graph for specialized graph views.

## Normative requirements

V1 documents SHOULD follow these terminology decisions.

Departures SHOULD be intentional and contextually clear.

Audit SHOULD flag inconsistent terms that may confuse implementation.

## Related

- CER-1502
- CER-1504
- CER-0002
