---
id: CER-1204
title: Truth Builder
status: draft
version: 0.1
tags:
  - case-engine
  - truth-builder
  - component
---

# Truth Builder

The Truth Builder produces or curates the hidden objective case model.

## Purpose

The Truth Builder establishes what really happened before evidence, documents, and player-facing artifacts are created.

Without a stable truth model, later documents risk becoming inconsistent, unfair, or self-contradictory.

## Responsibility

The Truth Builder is responsible for defining the authoritative hidden reality of the case.

It SHOULD create or maintain actors, events, relationships, objects, locations, cause structures, timelines, and decisive facts.

## Inputs

The Truth Builder MAY receive:

- approved case production plan
- setting constraints
- actor constraints
- location model
- genre constraints
- difficulty target
- fairness requirements
- forbidden content or style constraints

## Outputs

The Truth Builder SHOULD produce a Truth Model.

The Truth Model MAY include:

- actor model
- event model
- relationship graph
- timeline graph
- object model
- location model
- cause and effect structure
- motive structure
- opportunity structure
- means structure
- decisive facts
- hidden facts
- known unknowns

## Authoritative status

The Truth Model is authoritative for hidden reality.

Documents, claims, perceptions, and artifacts derive from it.

If a document contradicts the Truth Model, the contradiction must be intentional, explainable, and represented as a claim or perception rather than objective truth.

## Must not

The Truth Builder SHOULD NOT produce final documents.

The Truth Builder SHOULD NOT rely on later generated artifacts as its source of truth.

The Truth Builder SHOULD NOT hide critical solution facts outside the model.

## Human control

A human reviewer SHOULD be able to inspect and approve the Truth Model before document production begins.

Changes to approved truth SHOULD trigger revalidation of dependent evidence, documents, discovery paths, and artifacts.

## Implementation notes

A Truth Builder may be manual, assisted, AI-driven, rules-based, or hybrid.

The important requirement is traceability and consistency, not implementation method.

## Normative requirements

A Case Engine SHOULD maintain an explicit Truth Model.

The Truth Model SHOULD be distinguishable from claims and perceptions.

Critical facts SHOULD be identifiable and traceable to evidence exposures.

Truth changes SHOULD be versioned or otherwise auditable.

## Validation questions

- Is the hidden truth explicit?
- Are facts separated from claims?
- Are all decisive facts represented?
- Can every later clue trace back to the truth model or a claim model?
- Does the truth model support fair discovery?

## Implements

- ADR-0001
- CER-0201
- CER-0209
- CER-0210
- CER-0211
- CER-0212
- CER-0213

## Related

- CER-1202
- CER-1205
