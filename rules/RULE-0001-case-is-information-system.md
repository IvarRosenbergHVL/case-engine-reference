---
id: RULE-0001
title: Case is an information system
status: accepted
version: 0.1
tags:
  - rule
  - information-system
  - foundation
---

# RULE-0001 — Case is an information system

## Rule

A case SHALL be modeled as an interconnected information system.

Documents are representations of information.

Documents are never the information itself.

## Rationale

This rule prevents the generator from treating a case as a loose collection of authored documents.

A playable cold case requires structured relationships between:

- facts
- claims
- people
- places
- times
- evidence
- documents
- player inferences
- validation results

## Implications

Implementations MUST maintain a hidden model of case information.

Implementations SHOULD be able to trace player-facing material back to underlying facts or evidence fragments.

Implementations SHOULD avoid generating final documents before core facts, evidence, and discovery structures exist.

## Validation

A validator SHOULD fail a case if critical player-facing documents cannot be traced to structured evidence or facts.

## Related

- [[adr/ADR-0001-truth-graph-is-authoritative|ADR-0001]]
- [[adr/ADR-0002-documents-are-views|ADR-0002]]
