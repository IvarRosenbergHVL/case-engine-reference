---
id: RULE-0012
title: No case-specific reference content
status: accepted
version: 0.1
tags:
  - rule
  - scope
  - case-independence
---

# RULE-0012 — No case-specific reference content

## Rule

CER reference documentation SHALL NOT contain concrete details from any specific mystery case, whether commercial, private, unpublished, playtested, or user-provided.

## Rationale

CER is a general reference specification.

It must remain reusable, publishable, and independent of any single case.

Specific cases may inspire general design principles, but their content must not enter the reference specification.

## Prohibited examples

CER documents MUST NOT include:

- specific character names from analyzed cases
- specific victim, suspect, or witness identities
- specific clue chains
- specific murder methods
- specific motives
- specific case timelines
- specific document excerpts
- specific solution explanations
- identifiable references to analyzed case products

## Allowed examples

CER MAY include synthetic examples using neutral placeholders:

- Actor A
- Suspect B
- Witness C
- Location X
- Object Y
- Substance Z
- Document D

## Validation

A repository review SHOULD flag examples or descriptions that appear to encode a concrete analyzed case.

A validator MAY include a content audit mode for detecting named entities, overly specific scenario structures, or accidental leakage from source cases.

## Related

- ADR-0004
- CER-0101
- CER-0401
