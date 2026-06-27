---
id: RULE-0010
title: Evidence exposure must be planned
status: accepted
version: 0.1
tags:
  - rule
  - evidence
  - exposure
  - documents
---

# RULE-0010 — Evidence exposure must be planned

## Rule

Evidence required for solution, elimination, contradiction, or major discovery SHALL have a planned exposure in one or more artifacts.

## Rationale

An evidence fragment that exists only in the internal model cannot help players unless it is exposed through the archive.

Planning exposures before writing documents prevents accidental clue placement and makes validation possible.

## Requirements

A planned exposure SHOULD define:

- artifact or document target
- exposure form
- explicitness level
- discovery role
- intended inference
- redundancy role

## Validation

A validator SHOULD fail a case when a critical evidence fragment has no player-facing exposure.

A validator SHOULD warn when a critical exposure is too subtle for the intended difficulty.

## Related

- CER-0312
- CER-0313
- RULE-0008
