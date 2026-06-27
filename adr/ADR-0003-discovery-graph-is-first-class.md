---
id: ADR-0003
title: Discovery Graph is a first-class model
status: accepted
date: 2026-06-27
tags:
  - adr
  - discovery-graph
  - player-experience
---

# ADR-0003 — Discovery Graph is a first-class model

## Status

Accepted.

## Context

A case can be objectively consistent but still fail as a game if players discover information in the wrong order, identify the culprit too early, or never receive enough support for a required inference.

Truth and evidence describe the case. Discovery describes the player's path through the case.

## Decision

CER defines the **Discovery Graph** as a first-class model.

The Discovery Graph SHALL model how player understanding can change through interaction with the provided materials.

The Discovery Graph SHALL be separate from the Truth Graph and Evidence Graph.

## Consequences

This enables the engine to reason about:

- early hypotheses
- misleading but fair interpretations
- midpoint reframing
- late confirmation
- optional hints
- aha moments
- culprit visibility
- difficulty level

A case validator SHOULD inspect whether the Discovery Graph supports a satisfying path from confusion to justified solution.

## Alternatives considered

### Relying on document order

Rejected. Static case files often provide all materials upfront. Discovery is not the same as reading order.

### Relying only on clue count

Rejected. The number of clues does not describe how those clues alter player understanding.

### Relying on facilitator explanation

Rejected. The player pack itself must support discovery.

## Related

- [[adr/ADR-0001-truth-graph-is-authoritative|ADR-0001]]
- [[adr/ADR-0002-documents-are-views|ADR-0002]]
- [[rules/RULE-0003-critical-facts-need-redundancy|RULE-0003]]
