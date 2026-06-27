---
id: CER-0303
title: Evidence Strength
status: draft
version: 0.1
tags:
  - evidence-system
  - evidence-strength
---

# Evidence Strength

Evidence Strength describes how strongly an evidence fragment supports or challenges an inference.

## Purpose

Strength allows the engine to balance suspicion, avoid premature solution, and validate whether the intended conclusion is sufficiently supported.

## Definition

Evidence Strength is the degree to which an evidence fragment supports, weakens, confirms, or eliminates a fact, claim, suspect, or hypothesis.

Strength is not the same as reliability.

A reliable source may provide weak evidence.

An unreliable source may accidentally reveal strong evidence.

## Strength levels

| Level | Name | Description |
|---|---|---|
| 0 | None | Does not affect inference. |
| 1 | Contextual | Helps interpret other evidence. |
| 2 | Suggestive | Points toward an interpretation but is weak alone. |
| 3 | Supporting | Meaningfully supports an inference. |
| 4 | Strong | Hard to ignore without explanation. |
| 5 | Decisive | Can confirm or eliminate when combined with required context. |

## Use in discovery

Early-stage evidence SHOULD often be contextual, suggestive, or supporting.

Late-stage evidence MAY be strong or decisive.

A case SHOULD avoid exposing decisive evidence too early unless the true meaning is hidden by context.

## Strength vs reliability

Example:

```text
A security timestamp may be reliable but weak if it only proves someone was nearby.
A nervous false statement may be unreliable as testimony but strong as evidence of concealment.
```

## Normative requirements

Critical facts SHOULD be supported by enough combined evidence strength to justify the solution.

A single decisive exposure SHOULD NOT solve the full case alone.

Evidence strength SHOULD be evaluated in relation to discovery stage.

## Validation questions

- Is the evidence too strong too early?
- Is the final solution supported strongly enough?
- Are misleading clues stronger than confirming clues?
- Does evidence strength match the intended difficulty?

## Related

- CER-0301
- CER-0302
- CER-0206
