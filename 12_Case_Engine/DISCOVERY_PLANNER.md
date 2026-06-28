---
id: CER-1206
title: Discovery Planner
status: draft
version: 0.1
tags:
  - case-engine
  - discovery-planner
  - component
---

# Discovery Planner

The Discovery Planner models how players may move from evidence to understanding.

## Purpose

A case is not solved merely because evidence exists.

Players must be able to notice, connect, weigh, compare, eliminate, and infer.

The Discovery Planner designs this reasoning path.

## Responsibility

The Discovery Planner is responsible for producing or maintaining the Discovery Graph.

It SHOULD describe how evidence fragments create hypotheses, suspicion shifts, eliminations, confidence changes, and final solution reasoning.

## Inputs

The Discovery Planner MAY receive:

- evidence graph
- critical fact coverage map
- document distribution plan
- target difficulty
- intended playtime
- player assumptions
- red herring plan
- context clue requirements

## Outputs

The Discovery Planner SHOULD produce:

- discovery graph
- hypothesis model
- inference chains
- elimination paths
- suspicion model
- confidence model
- discovery curve
- aha moments
- bottleneck warnings

## Discovery design

The Discovery Planner SHOULD identify:

- what players can know early
- what players may suspect incorrectly
- what evidence shifts suspicion
- what evidence eliminates a possibility
- what evidence confirms or weakens a hypothesis
- what reasoning chain supports the final conclusion

## Must not

The Discovery Planner SHOULD NOT assume players will read documents in a fixed order unless the product explicitly uses ordering.

The Discovery Planner SHOULD NOT rely on one hidden clue as the only path to solution.

The Discovery Planner SHOULD NOT treat author knowledge as player knowledge.

## Human control

A human reviewer SHOULD be able to inspect the intended solution path and alternative plausible paths.

Discovery design SHOULD be playtestable.

## Normative requirements

A CER-compatible case SHOULD have an intended discovery structure.

Critical inference chains SHOULD be traceable to evidence fragments.

Important eliminations SHOULD be supported by evidence.

Discovery bottlenecks SHOULD be identified and repaired.

## Validation questions

- Can players move from evidence to conclusion?
- Are there multiple supports for key inferences?
- Are red herrings eventually downgradable?
- Is the intended solution too obvious or too hidden?
- Does the discovery curve fit target difficulty?

## Implements

- CER-0600
- CER-0601
- CER-0602
- CER-0603
- CER-0604
- CER-0605
- CER-0606
- CER-0607

## Related

- CER-1205
- CER-1207
- CER-0900
