---
id: PAT-0001
title: Hidden Identity
status: draft
version: 0.2
tags:
  - pattern
  - identity
  - character
  - audit-safe
---

# PAT-0001 — Hidden Identity

## Summary

A Hidden Identity pattern occurs when an actor's public-facing identity differs from their true relevance to the case.

## Purpose

Hidden identity creates layered discovery. It allows Actor A to appear to have one case role while later evidence shows that Actor A has a different relevance to motive, access, opportunity, knowledge, or history.

## Common forms

| Form | Description |
|---|---|
| Hidden relationship | The relationship between Actor A and Actor B is not initially understood. |
| Hidden role | Actor A appears to occupy Role R-001 but later evidence shows Role R-002 is relevant. |
| Hidden history | Actor A has a prior connection to Event E-001 that is not initially visible. |
| Alias or alternate identifier | Actor A is connected to Identifier ID-001 and Identifier ID-002. |
| Hidden interest | Actor A has an undisclosed stake in Object Y, Location X, or Outcome O-001. |
| Hidden knowledge | Actor A has access to information that their public-facing role does not explain. |

## Design requirements

A hidden identity SHOULD be discoverable through multiple indirect sources.

A hidden identity SHOULD NOT be revealed by a single explicit document unless that document is intentionally controlled by the product structure or is not player-facing.

## Document support

Useful document categories may include:

- identity records
- historical records
- correspondence
- photographs
- administrative records
- property or ownership records
- source statements with ambiguous phrasing
- relationship charts with missing or uncertain links

These categories are examples of document functions, not required case content.

## Failure modes

The pattern becomes weak when:

- the hidden identity is obvious too early
- the reveal has no effect on motive, access, opportunity, knowledge, or interpretation
- the identity is only stated directly, not inferred
- the identity pattern replaces evidence reasoning

## Validation

A validator SHOULD check:

- whether the hidden identity affects the case logic
- whether it is supported by at least two independent sources
- whether the reveal happens at the intended discovery stage
- whether it creates or changes a meaningful hypothesis
- whether the example uses generic placeholders rather than case-specific content

## Related

- CER-0103
- CER-0104
- RULE-0003
- RULE-0012
