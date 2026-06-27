---
id: RULE-0009
title: No single document solves the case
status: accepted
version: 0.1
tags:
  - rule
  - documents
  - solvability
  - discovery
---

# RULE-0009 — No single document solves the case

## Rule

No single player-facing document SHOULD contain enough information to fully justify the intended solution by itself.

## Rationale

Cold case play depends on cross-document reasoning.

If one document solves the case alone, the archive becomes a hidden answer sheet rather than an investigation.

## Exceptions

A single decisive document MAY exist if:

- it appears as an optional late hint
- the case is intentionally designed as very easy
- the document still requires context from other materials
- the facilitator mode controls when it is released

## Validation

A validator SHOULD inspect each player-facing document for excessive solution density.

A validator SHOULD warn if one document exposes culprit identity, method, means, motive, and opportunity without requiring outside context from the archive.

## Related

- CER-0207
- CER-0305
- CER-0311
