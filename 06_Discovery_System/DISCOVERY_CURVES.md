---
id: CER-0608
title: Discovery Curves
status: draft
version: 0.1
tags:
  - discovery-system
  - pacing
  - player-experience
---

# Discovery Curves

Discovery Curves describe how player understanding changes across the play experience.

## Purpose

A case can be logically solvable but still feel flat, confusing, or obvious.

Discovery Curves help designers shape pacing, uncertainty, suspicion, confidence, and revelation.

## Definition

A Discovery Curve is the intended progression of player understanding over time or across archive engagement.

It describes expected movement from uncertainty toward justified explanation.

## Common curve dimensions

| Dimension | Description |
|---|---|
| Uncertainty | How much remains unknown. |
| Suspicion spread | How many suspects or theories feel plausible. |
| Confidence | How strongly players can justify a theory. |
| Contradiction load | How many unresolved conflicts exist. |
| Context readiness | Whether players have enough context to interpret clues. |
| Cognitive load | How much information players must hold at once. |

## Typical murder investigation curve

A common curve may look like:

```text
Initial frame
→ First plausible theory
→ Competing hypotheses
→ Contradiction or reframing
→ Elimination of weak theories
→ Convergence on strongest explanation
→ Confirmation
```

This is a design pattern, not a required sequence.

## Curve problems

| Problem | Description |
|---|---|
| Early certainty | One solution becomes obvious too soon. |
| Flat uncertainty | Players never gain meaningful traction. |
| Late dump | Key information arrives only at the end. |
| False plateau | Players believe they solved it but lack later challenge. |
| Endless ambiguity | Multiple theories remain equally supported. |
| Overload | Too many unresolved threads block reasoning. |

## Normative requirements

A case SHOULD define an intended discovery curve for its declared difficulty.

Critical insight SHOULD NOT be delayed so long that earlier play becomes unguided noise.

A solution SHOULD feel earned through cumulative evidence.

Hard cases MAY include major hypothesis shifts, but those shifts SHOULD be fair.

## Validation questions

- Does suspicion move in an interesting way?
- Does confidence grow through evidence?
- Are contradictions introduced and resolved at useful points?
- Is there enough traction early?
- Is the solution obvious too early?
- Does the end state support justified confidence?

## Related

- CER-0605
- CER-0606
- CER-0607
- CER-0408
