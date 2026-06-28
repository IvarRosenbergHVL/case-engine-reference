---
id: CER-1304
title: Partial Regeneration
status: draft
version: 0.1
tags:
  - production-graphs
  - regeneration
  - repair
---

# Partial Regeneration

Partial Regeneration defines how a Case Engine can recreate only the affected parts of a case package.

## Purpose

Regenerating an entire case after every change is inefficient and risky.

Partial Regeneration allows the engine to update a controlled subset of nodes while preserving approved work elsewhere.

## Definition

Partial Regeneration is the controlled recreation of selected downstream nodes based on change impact analysis.

## Regeneration candidates

Nodes that may be regenerated include:

- document specifications
- artifact production specifications
- draft artifacts
- rendered files
- package manifests
- export packages

Nodes that should usually not be regenerated automatically include:

- approved truth models
- locked artifacts
- human review decisions
- release decisions
- manually produced assets

## Regeneration boundary

A regeneration boundary defines where automatic or assisted regeneration may stop.

The boundary SHOULD protect approved and locked work unless a human reviewer explicitly chooses to include it.

## Regeneration plan

A regeneration plan SHOULD define:

- changed upstream node
- affected downstream nodes
- nodes to regenerate
- nodes to preserve
- required human review
- required revalidation
- expected outputs

## AI-assisted regeneration

If AI is used, regeneration SHOULD be driven by current specifications and approved context.

The engine SHOULD avoid asking AI to infer hidden or missing facts from outdated artifacts.

## Normative requirements

Partial Regeneration SHOULD be based on dependency tracking and impact analysis.

Regenerated outputs SHOULD be validated before approval.

Locked nodes SHOULD not be regenerated without explicit approval.

Regeneration history SHOULD be recorded.

## Validation questions

- Why is regeneration needed?
- Which nodes are included?
- Which nodes are protected?
- Are any human decisions affected?
- What must be revalidated after regeneration?

## Related

- CER-1302
- CER-1303
- CER-1212
- CER-1103
