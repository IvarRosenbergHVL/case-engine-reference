---
id: CER-0601
title: Discovery Model
status: draft
version: 0.1
tags:
  - discovery-system
  - discovery-model
---

# Discovery Model

The Discovery Model defines the intended reasoning experience for players.

## Purpose

A case is fair only if players can move from evidence to solution through understandable reasoning.

The Discovery Model helps designers describe what players are expected to notice, infer, question, reject, and conclude.

## Definition

A Discovery Model is a structured representation of the major insights and reasoning transitions a player group may experience while investigating the archive.

It does not require a fixed reading order.

## Discovery units

A Discovery Model MAY include:

| Unit | Description |
|---|---|
| Observation | Something players can notice directly. |
| Interpretation | A possible meaning of an observation. |
| Question | A new uncertainty created by evidence. |
| Hypothesis | A possible explanation. |
| Contradiction | A conflict requiring resolution. |
| Elimination | Rejection or weakening of a suspect or theory. |
| Confirmation | Stronger support for a theory. |
| Solution insight | A discovery required for final explanation. |

## Discovery flow

A typical discovery flow looks like:

```text
Observation
→ Interpretation
→ Hypothesis
→ Test against evidence
→ Confirm, revise, or reject
→ Build stronger explanation
```

The exact order may vary between player groups.

## Discovery node

A Discovery Node is a modeled insight players may reach.

A node SHOULD define:

- discovery_id
- title
- discovery type
- supporting evidence exposures
- required context
- likely wrong interpretations
- effect on hypotheses
- criticality

## Normative requirements

Critical solution insights SHOULD be represented as Discovery Nodes.

A Discovery Node SHOULD be supported by player-facing evidence.

A Discovery Node SHOULD NOT depend on facilitator-only information.

A Discovery Model SHOULD include plausible wrong paths when they are intentionally supported.

## Validation questions

- What must players understand to solve the case?
- Which documents support that understanding?
- Are there plausible wrong interpretations?
- Can players revise those wrong interpretations from the archive?
- Does the discovery experience match intended difficulty?

## Related

- CER-0600
- CER-0306
- CER-0312
- CER-0408
