---
id: CER-1300
title: Production Graphs Index
status: draft
version: 0.2
tags:
  - production-graphs
  - graph-model
  - dependencies
  - audit-safe
---

# Production Graphs

Production Graphs describe how case production work is represented as connected nodes and dependencies.

## Purpose

A case package is not a flat collection of files.

It is a network of goals, models, evidence, documents, artifacts, reviews, renders, repairs, and release outputs.

Production Graphs make those dependencies explicit.

## Core idea

A Case Engine should be able to understand what depends on what.

```text
Case Goal
→ Planning Graph
→ Truth Graph
→ Evidence Graph
→ Discovery Graph
→ Document Graph
→ Artifact Graph
→ Rendering Graph
→ Release Graph
```

## Why this matters

Production Graphs support:

- targeted repair
- dependency-aware validation
- partial regeneration
- human approval of specific branches
- traceability from released files back to case truth
- GUI visualization of production state
- audit of what changed and what must be reviewed again

## Graph types

| Graph | Purpose |
|---|---|
| Planning Graph | Tracks production goals, tasks, constraints, and milestones. |
| Truth Graph | Represents hidden objective case reality. |
| Evidence Graph | Connects facts to observable evidence. |
| Discovery Graph | Models player reasoning and hypothesis movement. |
| Document Graph | Connects document specifications, roles, and evidence exposure. |
| Artifact Graph | Connects production specifications, assets, producers, and approvals. |
| Rendering Graph | Tracks templates, rendered outputs, print files, and visual dependencies. |
| Release Graph | Tracks package groups, manifests, audience separation, and exported files. |

## Relationship to existing CER sections

Production Graphs do not replace earlier models.

They provide the dependency layer across them.

A Truth Graph still defines hidden reality.

An Evidence Graph still defines evidence support.

A Production Graph shows how production objects depend on each other across the full pipeline.

## Case-independence rule

Production Graph examples SHOULD describe dependencies between model objects, artifacts, and release files only.

They SHOULD NOT encode concrete plot structures, actor relationships, motive structures, methods, or clue chains.

## Normative requirements

A Case Engine SHOULD maintain enough dependency information to know what must be revalidated after a change.

A change to an upstream node SHOULD identify affected downstream nodes.

Approved and locked nodes SHOULD be visible in the graph.

Graph state SHOULD support human review and audit.

Release graph state SHOULD preserve audience separation between player, hint, facilitator, production, and archive materials.

## Related

- CER-1200
- CER-1202
- CER-1212
- CER-0900
- CER-1103
- RULE-0012
