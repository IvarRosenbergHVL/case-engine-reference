---
id: RULE-0002
title: Documents are views
status: accepted
version: 0.1
tags:
  - rule
  - documents
  - evidence
---

# RULE-0002 — Documents are views

## Rule

A document SHALL be modeled as a view over one or more evidence fragments.

A document SHALL NOT be treated as objective truth.

## Rationale

Documents in cold case games are authored by fictional sources. Those sources have limited perspective, incomplete knowledge, biases, procedures, and possible incentives to mislead.

Treating documents as views makes it possible to model:

- source reliability
- contradictory claims
- partial knowledge
- institutional framing
- errors and omissions
- hidden implications

## Required metadata

A document SHOULD define:

- document ID
- title
- document type
- source or author
- creation time
- in-world origin
- reliability profile
- evidence fragments represented
- player-facing status
- facilitator-only status

## Validation

A validator SHOULD warn if a document has no source, no represented evidence, or no clear role in player discovery.

## Related

- [[adr/ADR-0002-documents-are-views|ADR-0002]]
- [[rules/RULE-0001-case-is-information-system|RULE-0001]]
