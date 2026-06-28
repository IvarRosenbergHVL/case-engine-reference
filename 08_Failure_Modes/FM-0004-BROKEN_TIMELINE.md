---
id: FM-0004
title: Broken Timeline
status: draft
version: 0.1
tags:
  - failure-mode
  - timeline
  - v1
---

# FM-0004 — Broken Timeline

## Description

A Broken Timeline occurs when events, durations, locations, claims, or evidence cannot coexist in the same chronological structure.

The case may still appear solvable on the surface, but the underlying sequence of events is inconsistent.

## Player impact

Players may reach different conclusions depending on which timestamp or sequence they trust.

The intended solution may become impossible, arbitrary, or dependent on ignoring contradictions.

## Detection signals

- an event appears before its required cause
- an object is used before it is introduced or available
- a document references information not yet known to its source
- travel or transition time is missing or impossible
- a claim depends on a later event
- two required events overlap without explanation
- evidence custody or document creation order is inconsistent

## Common causes

- documents written before timeline validation
- timestamps added late in production
- repair changes applied to one document but not related documents
- hidden truth changed without revalidating claims and artifacts
- author knowledge treated as source knowledge

## Repair strategies

- normalize all event timestamps against the Timeline Graph
- separate objective event time from claim time and document creation time
- adjust document metadata or source knowledge
- add a bridging event where fair and necessary
- remove unnecessary precision from non-critical timestamps
- revalidate affected evidence and discovery paths

## Severity

Usually high.

A timeline error affecting opportunity, causality, or final reasoning SHOULD block release until repaired or explicitly waived.

## Related

- CER-0202
- CER-0211
- CER-0301
- CER-0603
- CER-0903
- CER-1303
