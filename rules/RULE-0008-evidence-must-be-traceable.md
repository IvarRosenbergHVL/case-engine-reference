---
id: RULE-0008
title: Evidence must be traceable
status: accepted
version: 0.1
tags:
  - rule
  - evidence
  - traceability
---

# RULE-0008 — Evidence must be traceable

## Rule

Evidence used for solution, elimination, contradiction, or major discovery SHALL be traceable to a fact, claim, source, document exposure, and discovery role.

## Rationale

Traceability makes it possible to validate whether the case is fair and coherent.

Without traceability, evidence becomes decorative prose and cannot be reliably repaired.

## Requirements

Important evidence SHOULD define:

- related fact or claim
- source
- reliability
- strength
- document exposure
- discovery role
- criticality

## Validation

A validator SHOULD warn when important evidence lacks traceability.

A validator SHOULD fail when critical solution evidence has no related fact or document exposure.

## Related

- CER-0301
- CER-0302
- CER-0207
