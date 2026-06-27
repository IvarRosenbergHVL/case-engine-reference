---
id: RULE-0005
title: Facts and claims must be separated
status: accepted
version: 0.1
tags:
  - rule
  - facts
  - claims
---

# RULE-0005 — Facts and claims must be separated

## Rule

A Case Engine implementation SHALL distinguish objective facts from attributed claims.

## Rationale

Documents, interviews, records, and messages often contain assertions that may be wrong, partial, biased, or misleading.

If claims are treated as facts, the hidden truth model becomes unreliable and validation becomes impossible.

## Requirements

A fact SHOULD represent objective case reality.

A claim SHOULD include a source.

A claim SHOULD identify the fact or facts it relates to.

A claim SHOULD define its truth alignment when known to the generator.

## Validation

A validator SHOULD warn when a document contains important assertions that are not represented as claims.

A validator SHOULD fail when a critical false claim is treated as an objective fact.

## Related

- CER-0210
- CER-0211
- ADR-0002
