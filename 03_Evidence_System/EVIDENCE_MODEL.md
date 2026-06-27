---
id: CER-0301
title: Evidence Model
status: draft
version: 0.1
tags:
  - evidence-system
  - evidence-model
---

# Evidence Model

The Evidence Model defines the structured information that supports, challenges, contextualizes, or misleads player reasoning.

## Purpose

The Evidence Model allows a case engine to plan evidence before writing documents.

It ensures that solution logic is supported by traceable information rather than hidden author intent.

## Definition

Evidence is information that affects the interpretation of facts, claims, actors, events, objects, locations, or hypotheses.

Evidence may be direct, indirect, contextual, corroborating, contradictory, misleading, or eliminative.

## Evidence is not the same as document content

A document may contain evidence, but evidence is not identical to the document.

Example:

```text
Document: Interview transcript
Evidence fragment: Witness claims they saw a suspect leave at 21:10
Related fact: Suspect left at 21:14
Truth alignment: Partial
Discovery role: Creates timing doubt
```

## Evidence dimensions

An evidence item SHOULD be evaluated across these dimensions:

| Dimension | Question |
|---|---|
| Truth relation | What fact or claim does it relate to? |
| Source | Where does it come from? |
| Reliability | How trustworthy is the source and interpretation? |
| Strength | How strongly does it support an inference? |
| Visibility | Is it player-facing or facilitator-only? |
| Redundancy | Is it independently supported elsewhere? |
| Timing | When can players encounter or understand it? |
| Discovery role | What hypothesis does it create, weaken, or confirm? |

## Evidence functions

| Function | Description |
|---|---|
| Establish | Introduces a fact, actor, object, or event. |
| Support | Strengthens a theory or inference. |
| Corroborate | Independently supports another evidence item. |
| Contradict | Conflicts with a claim or interpretation. |
| Contextualize | Makes another clue meaningful. |
| Mislead | Supports a plausible but wrong theory. |
| Eliminate | Weakens a suspect, timeline, or hypothesis. |
| Confirm | Provides late-stage confidence in the solution. |

## Normative requirements

Evidence SHOULD be represented before final document prose is generated.

Critical evidence SHOULD be traceable to one or more facts or claims.

Evidence SHOULD have a discovery role.

Evidence SHOULD distinguish source reliability from inference strength.

## Validation questions

- What does this evidence support?
- What does it contradict?
- Where is it exposed to players?
- Is it required for the solution?
- Is it redundant enough?
- Is it fair or misleading in an explainable way?

## Related

- CER-0300
- CER-0204
- CER-0207
