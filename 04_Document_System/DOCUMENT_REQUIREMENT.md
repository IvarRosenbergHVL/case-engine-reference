---
id: CER-0405
title: Document Requirement
status: draft
version: 0.1
tags:
  - document-system
  - document-requirement
  - planning
---

# Document Requirement

A Document Requirement describes why a document is needed before the document is specified or written.

## Purpose

Document Requirements prevent the generator from creating documents because a genre expects them.

A requirement states the function a document must serve in the case information system.

## Definition

A Document Requirement is a planning object that connects case needs, evidence exposures, discovery roles, document roles, and output constraints.

It exists before the final document specification and before prose generation.

## Requirement vs specification

A Document Requirement answers:

```text
Why do we need a document here?
```

A Document Specification answers:

```text
What exactly should this document contain and look like?
```

## Required fields

A Document Requirement SHOULD define:

| Field | Description |
|---|---|
| requirement_id | Stable identifier. |
| purpose | Why the document is needed. |
| primary_role | Main investigative role. |
| evidence_targets | Evidence fragments or exposures it must carry. |
| discovery_target | Player inference or hypothesis shift it should support. |
| document_family | Preferred family such as police, personal, media, digital, financial. |
| strength_budget | How explicit or strong the document may be. |
| noise_budget | Amount of non-critical realism or atmosphere. |
| spoiler_risk | Whether it risks revealing too much. |
| constraints | Length, format, language, date, source, or render constraints. |

## Example

```text
Requirement: DR-014
Purpose: Provide contextual knowledge needed to interpret a technical clue.
Primary role: Context provider
Document family: Media or workplace safety
Evidence target: EF-033
Strength budget: 2
Noise budget: Medium
Spoiler risk: Low
```

## Normative requirements

A complex case SHOULD create Document Requirements before final document specifications.

A Document Requirement SHOULD trace to evidence or discovery need.

A Document Requirement SHOULD NOT prescribe prose details prematurely.

## Validation questions

- Why is this document needed?
- What evidence or discovery function does it serve?
- Could another existing document serve the same role better?
- Does this requirement create unnecessary document count growth?

## Related

- CER-0401
- CER-0406
- CER-0312
- CER-0207
