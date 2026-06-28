---
id: CER-0603
title: Inference Chain
status: draft
version: 0.1
tags:
  - discovery-system
  - inference
  - reasoning
---

# Inference Chain

An Inference Chain defines how players can move from evidence to conclusion.

## Purpose

A solution should not be a guess.

Players should be able to explain why the archive supports one account better than competing accounts.

Inference Chains make that reasoning explicit for design and validation.

## Definition

An Inference Chain is a sequence of evidence-supported reasoning steps connecting observations to an interpretation, hypothesis, elimination, or solution insight.

## Chain structure

An Inference Chain MAY include:

```text
Evidence Exposure
→ Observation
→ Interpretation
→ Intermediate Inference
→ Hypothesis Impact
→ Conclusion
```

## Chain fields

An Inference Chain SHOULD define:

| Field | Description |
|---|---|
| chain_id | Stable identifier. |
| target_discovery | Discovery node or hypothesis affected. |
| evidence_inputs | Supporting evidence exposures. |
| context_inputs | Required context clues. |
| reasoning_steps | Ordered reasoning statements. |
| confidence_effect | How strongly the chain supports or weakens a hypothesis. |
| failure_points | Where players may misread or miss the chain. |

## Chain strength

| Strength | Description |
|---|---|
| Weak | Suggests a possibility. |
| Moderate | Supports a hypothesis but needs corroboration. |
| Strong | Clearly supports or weakens a hypothesis. |
| Decisive | Strong enough to support a major solution step with corroboration. |

## Normative requirements

Critical solution insights SHOULD have at least one explicit Inference Chain.

Important eliminations SHOULD have an Inference Chain.

An Inference Chain SHOULD cite player-facing evidence, not hidden truth.

A chain SHOULD distinguish observation from interpretation.

## Validation questions

- Can players explain this conclusion from the archive?
- Which evidence supports each reasoning step?
- Does the chain depend on missing context?
- Is the chain too fragile?
- Is the conclusion stronger than the evidence supports?

## Related

- CER-0601
- CER-0602
- CER-0308
- RULE-0004
