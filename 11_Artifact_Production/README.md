---
id: CER-1100
title: Artifact Production Index
status: draft
version: 0.1
tags:
  - artifact-production
  - index
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
| Production Recommendations | Defines optional guidance for humans or AI tools. |
| Prompt Derivation | Defines prompts as derived implementation artifacts. |
| Visual Continuity | Defines consistency across generated and human-made assets. |

## Artifact types

Artifact Production MAY apply to:

- police documents
- forensic reports
- personal documents
- digital records
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
