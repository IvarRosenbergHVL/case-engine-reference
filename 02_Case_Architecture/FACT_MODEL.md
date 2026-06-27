---
id: CER-0210
title: Fact Model
status: draft
version: 0.1
tags:
  - case-architecture
  - fact-model
---

# Fact Model

The Fact Model defines atomic objective statements that are true within the case universe.

## Purpose

Facts are the smallest truth units used for validation, evidence mapping, and solution reasoning.

Separating facts from prose makes it possible to trace what players must learn and what documents support.

## Definition

A fact is an atomic statement that is objectively true inside the case universe.

A fact is not the same as a claim.

A fact may be unknown to all characters.

A fact may never appear directly in a document.

## Fact categories

| Category | Description |
|---|---|
| Identity fact | A true identity, role, or relationship. |
| Event fact | Something that occurred. |
| Temporal fact | Time, sequence, or duration. |
| Spatial fact | Location or movement. |
| Object fact | State, ownership, custody, or use of an object. |
| Knowledge fact | What an actor knew at a time. |
| Motive fact | Objective or perceived motive. |
| Method fact | How an act was performed. |
| Consequence fact | Result of an event or action. |

## Fact granularity

Facts SHOULD be small enough to validate independently.

Poor fact:

```text
The culprit committed the act because of the inheritance.
```

Better facts:

```text
The culprit believed they would lose inheritance.
The culprit had access to the relevant document.
The culprit acted after learning the document wording.
```

## Critical facts

A critical fact is required to justify the intended solution.

Critical facts require stronger evidence redundancy than background facts.

## Normative requirements

Facts MUST be distinguishable from claims.

Critical facts SHOULD be explicitly marked.

Facts SHOULD be linkable to supporting evidence fragments.

Facts SHOULD be linkable to validation tests.

## Validation questions

- Which facts are required for the solution?
- Which facts are merely background?
- Does every critical fact have evidence support?
- Are any claims incorrectly treated as facts?

## Related

- CER-0201
- CER-0204
- RULE-0003
