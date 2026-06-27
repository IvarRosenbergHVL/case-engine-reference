---
id: CER-0401
title: Document Model
status: draft
version: 0.1
tags:
  - document-system
  - document-model
---

# Document Model

The Document Model defines player-facing and facilitator-only artifacts that represent evidence, claims, context, and noise.

## Purpose

Documents are the main interface between the case information system and the players.

The Document Model ensures that each artifact has a reason to exist, a source, a role, and a traceable relationship to the evidence plan.

## Definition

A document is an in-world artifact that exposes evidence, claims, context, atmosphere, or procedural structure.

A document may be textual, visual, tabular, photographic, digital, administrative, official, personal, or hybrid.

## Document as view

A document is a view over evidence and claims.

It is not objective truth.

The same evidence fragment may appear in multiple documents through different exposures.

## Document categories

| Category | Description |
|---|---|
| Official | Police, medical, legal, municipal, institutional, or procedural. |
| Personal | Letters, diaries, notes, cards, lists, journals. |
| Digital | Emails, chats, logs, metadata, screenshots, exports. |
| Financial | Bank, invoice, receipt, insurance, tax, payroll. |
| Media | Newspaper, blog, broadcast transcript, press release. |
| Context | Manual, safety sheet, brochure, timetable, local history. |
| Visual | Photo, map, diagram, sketch, evidence image. |
| Facilitator | Solution, hints, validation summary, spoiler material. |

## Required properties

A document SHOULD define:

- document_id
- title
- document_type
- source or author
- creation date or in-world date
- artifact status
- player-facing or facilitator-only visibility
- document role
- represented evidence exposures
- reliability profile
- rendering requirements

## Normative requirements

A document SHALL have a modeled source, author, institution, or origin unless its unknown origin is intentional.

A document SHOULD map to one or more evidence exposures.

A document MUST NOT expose facilitator-only truth unless it is marked facilitator-only.

A document SHOULD have a discovery role.

## Validation questions

- Why does this document exist?
- Who created it?
- What evidence does it expose?
- What player inference does it support?
- Is it too strong, too weak, or redundant?
- Does it preserve spoiler boundaries?

## Related

- CER-0400
- CER-0312
- ADR-0002
- RULE-0009
