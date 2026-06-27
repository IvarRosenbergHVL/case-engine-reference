---
id: CER-0409
title: Document Validation
status: draft
version: 0.1
tags:
  - document-system
  - validation
---

# Document Validation

Document Validation checks whether generated documents satisfy their specifications, preserve evidence intent, and remain realistic, fair, and safe to include in the player package.

## Purpose

Documents are where many generation failures become visible: accidental spoilers, unsupported facts, implausible source knowledge, excessive clue density, and broken style.

Document Validation catches these issues before rendering and packaging.

## Validation goals

Document Validation SHOULD determine whether:

- the document satisfies its specification
- required evidence exposures are present
- no unsupported critical facts were introduced
- the document respects source knowledge limits
- spoiler boundaries are preserved
- document role matches content
- realism is adequate
- clue density matches intended difficulty
- rendering requirements are complete

## Required checks

| Check | Purpose |
|---|---|
| Specification conformance | Does the draft follow the document specification? |
| Evidence exposure check | Are required exposures included? |
| Unsupported fact check | Did the writer invent critical information? |
| Source knowledge check | Could the source know what it says? |
| Spoiler check | Does it reveal facilitator-only truth? |
| Role check | Does content match declared document role? |
| Density check | Is clue density appropriate? |
| Realism check | Does it feel like the intended artifact type? |
| Render readiness | Can the renderer produce the final artifact? |

## Validation outcomes

| Outcome | Meaning |
|---|---|
| pass | Document is ready for rendering. |
| warn | Document is usable but should be reviewed. |
| fail | Document violates a core rule or specification. |
| repair | Document can likely be fixed without changing the case model. |

## Normative requirements

A Case Engine implementation SHOULD validate document drafts before rendering.

Document Validation SHOULD reference document IDs, evidence exposure IDs, and rule IDs.

Document Validation SHOULD distinguish style issues from case logic issues.

A document that leaks facilitator-only truth into player-facing material MUST fail validation.

## Repair guidance

Document repair MAY:

- remove unsupported facts
- reduce explicitness
- add missing evidence exposure
- move an exposure to another document
- change document role
- change source or author
- add context or noise
- split an overloaded document

## Related

- CER-0406
- CER-0407
- CER-0408
- RULE-0011
