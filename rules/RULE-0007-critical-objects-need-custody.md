---
id: RULE-0007
title: Critical objects need custody
status: accepted
version: 0.1
tags:
  - rule
  - objects
  - custody
  - evidence
---

# RULE-0007 — Critical objects need custody

## Rule

An object that is required for the solution SHALL have a custody model.

## Rationale

Objects often establish means, access, concealment, or contradiction.

If a critical object appears only in the solution explanation, players cannot reason about it fairly.

## Custody model

A custody model SHOULD describe:

- who owned the object
- who controlled it
- who accessed it
- when it moved
- where it was stored
- when it was observed
- when it was altered, lost, hidden, or found

## Validation

A validator SHOULD check that critical objects have a plausible custody path.

A validator SHOULD warn if a critical object is introduced too late or appears without prior seeding.

## Related

- CER-0213
- CER-0204
- RULE-0004
