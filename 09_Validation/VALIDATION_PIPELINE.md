---
id: CER-0903
title: Validation Pipeline
status: draft
version: 0.1
tags:
  - validation
  - pipeline
---

# Validation Pipeline

The Validation Pipeline defines the recommended order of validation passes across a case package.

## Purpose

Validation should happen in layers.

Some problems must be detected early because later validation depends on them. For example, discovery validation is not meaningful if critical evidence has no player-facing exposure.

## Pipeline overview

A recommended validation pipeline is:

```text
Case Model
→ Truth Validation
→ Timeline Validation
→ Evidence Validation
→ Document Planning Validation
→ Document Draft Validation
→ Discovery Validation
→ Information Economy Validation
→ Failure Mode Detection
→ Rendering Validation
→ Packaging Validation
→ Release Decision
```

## Pipeline stages

| Stage | Purpose |
|---|---|
| Truth Validation | Checks core facts, actors, relationships, objects, and events. |
| Timeline Validation | Checks event order, duration, movement, opportunity, and impossibilities. |
| Evidence Validation | Checks critical fact support, traceability, redundancy, and context. |
| Document Planning Validation | Checks document requirements and specifications before writing. |
| Document Draft Validation | Checks generated document content against specifications. |
| Discovery Validation | Checks player reasoning paths, hypotheses, eliminations, and confidence. |
| Information Economy Validation | Checks density, visibility, noise, context cost, and cognitive load. |
| Failure Mode Detection | Checks known structural quality problems. |
| Rendering Validation | Checks final output, visual clues, legibility, and evidence preservation. |
| Packaging Validation | Checks completeness, order, manifest, and spoiler separation. |

## Early stop behavior

A pipeline MAY stop early when a critical issue makes later checks unreliable.

Example: if core timeline is impossible, discovery and document checks may still run, but their results should be marked as dependent on timeline repair.

## Normative requirements

A Case Engine implementation SHOULD validate before rendering.

A Case Engine implementation SHOULD validate rendered outputs before packaging.

A validation pipeline SHOULD preserve stage-level results.

Critical failures SHOULD block release unless explicitly waived.

## Validation questions

- Which validation stages have passed?
- Which stages are blocked by earlier failures?
- Are rendered documents still consistent with validated drafts?
- Is the final package release-ready?

## Related

- CER-0900
- CER-0901
- CER-0902
- CER-0313
- CER-0409
