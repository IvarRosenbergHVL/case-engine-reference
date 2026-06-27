---
id: ADR-0002
title: Documents are views, not truth
status: accepted
date: 2026-06-27
tags:
  - adr
  - documents
  - evidence
---

# ADR-0002 — Documents are views, not truth

## Status

Accepted.

## Context

Cold case games are experienced through documents: reports, interviews, logs, letters, photos, records, notes, and contextual artifacts.

It is tempting to treat these documents as the case itself. CER rejects that model.

Documents are authored by fictional sources. Those sources can be mistaken, biased, incomplete, deceptive, constrained by procedure, or simply unaware of the complete truth.

## Decision

A document in CER is a **view** over one or more evidence fragments.

A document SHALL have an author, source, origin, purpose, and reliability model.

A document SHALL NOT be considered objective truth merely because it appears official.

A document MAY contain:

- true claims
- false claims
- partial claims
- missing context
- contradictions
- accidental clues
- intentional misdirection

## Consequences

This decision allows the engine to generate documents with realistic uncertainty.

It also enables validators to ask:

- Which facts does this document expose?
- Which claims are unsupported?
- Which clues are embedded?
- Which false leads are introduced?
- Which player inferences become possible?

## Alternatives considered

### Documents as canonical state

Rejected. This would make contradictions hard to detect and would force the validator to interpret prose as truth.

### Documents as decorative output

Rejected. Documents are not just flavor; they are the player's only investigative interface.

## Related

- [[adr/ADR-0001-truth-graph-is-authoritative|ADR-0001]]
- [[rules/RULE-0002-documents-are-views|RULE-0002]]
