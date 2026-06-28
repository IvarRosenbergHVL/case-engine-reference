---
id: FM-0010
title: Circular Reasoning
status: draft
version: 0.1
tags:
  - failure-mode
  - discovery
  - reasoning
  - v1
---

# FM-0010 — Circular Reasoning

## Description

Circular Reasoning occurs when the intended solution path requires players to assume the conclusion in order to interpret the evidence that supposedly proves it.

The reasoning chain appears valid only after the answer is already known.

## Player impact

Players may feel that the solution is arbitrary or that the case only works in retrospect.

They may be unable to distinguish the intended answer from other plausible hypotheses.

## Detection signals

- a clue only becomes meaningful after the final answer is revealed
- the intended inference depends on accepting the intended culprit first
- evidence supports several hypotheses equally but only one is treated as correct
- explanation in the facilitator guide is stronger than evidence in the player package
- playtesters say the answer makes sense only after being told
- key inference chains contain unsupported leaps

## Common causes

- solution written before discovery path
- insufficient corroboration
- weak elimination paths
- red herrings not downgradable
- author overestimates clue visibility
- final explanation relies on hidden author reasoning

## Repair strategies

- strengthen independent evidence support
- add corroboration from separate documents
- improve elimination evidence
- add context clues that make the inference available before reveal
- revise facilitator explanation to match player-facing evidence
- test the inference chain without revealing the answer

## Severity

High when it affects the final solution.

A case SHOULD NOT rely on circular reasoning for its main conclusion.

## Related

- CER-0602
- CER-0603
- CER-0604
- CER-0606
- CER-0305
- CER-0308
