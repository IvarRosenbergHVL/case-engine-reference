---
id: RULE-0011
title: Document generation must follow specification
status: accepted
version: 0.1
tags:
  - rule
  - documents
  - generation
---

# RULE-0011 — Document generation must follow specification

## Rule

A final player-facing document SHALL be generated from a Document Specification or equivalent structured plan.

## Rationale

Direct freeform document generation risks introducing unsupported facts, accidental spoilers, inconsistent timelines, and unplanned clue density.

A structured specification keeps writers aligned with the evidence plan.

## Requirements

A Document Specification SHOULD define:

- source
- document type
- evidence exposures
- claims
- document roles
- style profile
- rendering profile
- spoiler limits

## Writer constraint

A document writer SHOULD NOT invent new critical facts.

A document writer MAY add non-critical atmospheric detail if it does not conflict with the case model.

## Validation

A validator SHOULD compare document draft content with the Document Specification.

A validator SHOULD warn when a draft introduces unsupported critical information.

## Related

- CER-0406
- CER-0407
- RULE-0008
