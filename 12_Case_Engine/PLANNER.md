---
id: CER-1203
title: Planner
status: draft
version: 0.1
tags:
  - case-engine
  - planner
  - component
---

# Planner

The Planner converts a production goal into a structured case production plan.

## Purpose

The Planner prevents the engine from jumping directly from idea to documents.

It identifies what must be modeled, planned, produced, validated, reviewed, and exported.

## Responsibility

The Planner is responsible for defining the work to be done.

It SHOULD describe the intended case structure, expected outputs, required engine components, and validation checkpoints.

## Inputs

The Planner MAY receive:

- production goal
- target audience
- target difficulty
- expected playtime
- number of players
- setting constraints
- location research
- style constraints
- package format
- production budget or limitations

## Outputs

The Planner SHOULD produce a Case Production Plan.

The plan MAY include:

- case architecture outline
- required truth model scope
- actor count range
- document type targets
- evidence density target
- discovery complexity target
- artifact categories
- quality gates
- human review checkpoints
- export package targets

## Must not

The Planner SHOULD NOT produce final player-facing documents.

The Planner SHOULD NOT invent unsupported case facts that bypass the Truth Builder.

The Planner SHOULD NOT lock solution facts before the truth model is reviewed.

## Planning constraints

The Planner SHOULD preserve room for validation and repair.

It SHOULD avoid plans that require a single fragile clue, a single document bottleneck, or external knowledge not embedded in the case package.

## Human control

A human reviewer SHOULD be able to approve, revise, or reject the Case Production Plan before expensive production begins.

## Implementation notes

A Planner may be:

- a human producer
- a checklist
- a structured form
- a rules engine
- an AI agent
- a hybrid planning workflow

## Normative requirements

A Case Engine SHOULD create or maintain a production plan.

The plan SHOULD be traceable to later outputs.

The plan SHOULD identify validation checkpoints before production begins.

## Validation questions

- Does the plan define what must be built?
- Are the planned outputs realistic for the target scope?
- Does the plan support fair solvability?
- Are human review checkpoints included?
- Are required CER sections identified?

## Implements

- CER-0100
- CER-0200
- CER-0300
- CER-0400
- CER-0600
- CER-0900
- CER-1100

## Related

- CER-1202
- CER-1204
