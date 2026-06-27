---
id: RULE-0006
title: Events need temporal and spatial context
status: accepted
version: 0.1
tags:
  - rule
  - events
  - timeline
  - location
---

# RULE-0006 — Events need temporal and spatial context

## Rule

An event that affects solution, alibi, opportunity, evidence creation, or discovery SHALL have temporal and spatial context.

## Rationale

Players solve cold cases by testing what could have happened, where, and when.

If important events lack time or location context, opportunity reasoning collapses.

## Requirements

A critical event SHOULD define:

- time or time window
- location or location uncertainty
- involved actors
- involved objects, when relevant
- resulting facts
- related claims
- evidence created or affected

## Uncertainty

Approximate timing is acceptable.

Unmodeled timing is not acceptable for critical events.

## Validation

A validator SHOULD warn when important events lack time or location context.

A validator SHOULD fail when a solution depends on an event whose time or location is unavailable to the reasoning model.

## Related

- CER-0202
- CER-0212
- CER-0214
