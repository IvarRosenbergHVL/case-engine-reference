---
id: CER-1202
title: Engine Pipeline
status: draft
version: 0.1
tags:
  - case-engine
  - pipeline
  - workflow
---

# Engine Pipeline

The Engine Pipeline defines the end-to-end flow from case idea to release-ready package.

## Purpose

The pipeline gives implementers a clear production sequence while allowing different tools and workflows.

It prevents premature document generation before truth, evidence, discovery, and artifact requirements are stable.

## Pipeline overview

```text
Case Goal
→ Planning
→ Truth Model
→ Evidence Model
→ Discovery Model
→ Document Specifications
→ Artifact Production Specifications
→ Production
→ Review
→ Validation
→ Repair
→ Rendering
→ Export
```

## Stage 1: Case goal

The workflow begins with a production goal.

The goal may define:

- case type
- target difficulty
- playtime
- number of players
- setting constraints
- tone
- package format
- production constraints

The case goal is not the truth model.

## Stage 2: Planning

The Planner converts the goal into a production plan.

The plan SHOULD define required models, artifact categories, validation checkpoints, and expected outputs.

## Stage 3: Truth model

The Truth Builder defines the hidden reality of the case.

The truth model SHOULD include actors, events, relationships, objects, locations, cause, opportunity, motive structure, and decisive facts.

## Stage 4: Evidence model

The Evidence Planner maps hidden truth into observable fragments.

Evidence SHOULD be traceable, redundant where critical, and distributed across documents without making one document solve the case alone.

## Stage 5: Discovery model

The Discovery Planner models how players may reason from evidence to hypotheses, eliminations, suspicion shifts, and final conclusion.

## Stage 6: Document specifications

The Document Planner decides which documents are needed and what role each document plays.

Documents are specified before they are written or rendered.

## Stage 7: Artifact production specifications

The Artifact Planner turns document and visual needs into work orders that can be fulfilled by humans, AI, renderers, or hybrid workflows.

## Stage 8: Production

Producers create draft artifacts from specifications.

Production may be manual, automated, AI-assisted, or mixed.

## Stage 9: Review

Draft artifacts are checked against specifications and reviewed by humans.

Artifacts may be revised, replaced, approved, or locked.

## Stage 10: Validation

The Validator evaluates consistency, fairness, clue coverage, document distribution, spoiler separation, rendering readiness, and release readiness.

## Stage 11: Repair

The Repair Engine proposes controlled corrections when validation fails.

Repair SHOULD preserve approved artifacts unless changes are explicitly accepted.

## Stage 12: Rendering

The Renderer converts approved artifacts into final package files.

Rendering SHOULD preserve evidence, layout, metadata, and spoiler grouping.

## Stage 13: Export

The Exporter assembles release packages, manifests, facilitator material, and player-facing files.

## Pipeline rule

Later stages may request changes to earlier stages, but such changes SHOULD trigger revalidation of dependent outputs.

## Normative requirements

The pipeline SHOULD avoid generating final player-facing artifacts before critical truth and evidence structures are stable.

The pipeline SHOULD preserve traceability between stages.

Validation SHOULD occur before release export.

Human approval SHOULD be required before final release packaging.

## Related

- CER-1201
- CER-1203
- CER-0903
- CER-1103
