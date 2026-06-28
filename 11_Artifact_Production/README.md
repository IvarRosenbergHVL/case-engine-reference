---
id: CER-1100
title: Artifact Production Index
status: draft
version: 0.2
tags:
  - artifact-production
  - index
  - audit-safe
---

# Artifact Production

Artifact Production defines how documents, images, graphics, maps, scans, screenshots, and other case materials are specified, produced, reviewed, approved, and locked.

## Purpose

CER does not assume that artifacts are produced by AI.

A production task may be completed by a human, an AI system, a design tool, a renderer, a photographer, an illustrator, or a combination of these.

The requirement is that the final artifact satisfies its specification.

## Core idea

The Case Engine should produce clear requirements and work orders.

The producer may be human or machine.

```text
Case Facts
→ Evidence Requirements
→ Artifact Production Specification
→ Production
→ Quality Review
→ Human Approval
→ Locked Artifact
```

## Core topics

| Topic | Purpose |
|---|---|
| Artifact Production Specification | Defines the requirements for an artifact. |
| Production Workflow | Defines status, review, revision, approval, and locking. |
| Human Control | Defines human authority over artifact approval. |
| Quality Gates | Defines required checks before approval. |
| Production Recommendations | Defines optional guidance for humans or tools. |
| Prompt Derivation | Defines prompts as derived implementation artifacts. |
| Visual Continuity | Defines consistency across generated and human-made assets. |
| Case Style Guide | Defines case-specific style requirements without replacing facts. |
| Capability Profile | Describes what a producer or tool can safely produce. |
| Producer Selection | Matches production tasks to capable producers. |

## Artifact types

Artifact Production MAY apply to:

- documents
- records
- photographs
- maps
- diagrams
- logos
- stamps
- letterheads
- screenshots
- package covers
- hint cards
- facilitator material

These are artifact categories, not required case content or solution patterns.

## AI as implementation detail

AI tools MAY be used as producers or assistants.

AI use does not remove the need for specifications, validation, human review, human approval, or locked release artifacts.

Prompts are derived from artifact specifications. Prompts are not the source of truth.

## Case-independence rule

Artifact production examples SHOULD describe production requirements, quality gates, and acceptance criteria only.

They SHOULD NOT embed concrete case plots, actor relationships, motive structures, methods, or clue chains.

## Normative requirements

An artifact SHOULD have a production specification before production begins.

The specification SHOULD define facts, constraints, required evidence, forbidden content, and acceptance criteria.

Human review SHOULD be part of the artifact lifecycle.

A locked artifact SHOULD NOT be modified without explicit approval.

## Related

- ADR-0005
- CER-0406
- CER-1000
- CER-0900
- RULE-0012
- RULE-0013
