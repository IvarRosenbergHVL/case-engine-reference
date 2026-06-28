---
id: CER-1301
title: Production Graph Model
status: draft
version: 0.1
tags:
  - production-graphs
  - graph-model
  - dependencies
---

# Production Graph Model

The Production Graph Model defines the common structure for representing case production dependencies.

## Purpose

Case production involves many objects created at different times by different components.

The Production Graph Model provides a shared way to represent those objects as nodes and relationships.

## Definition

A Production Graph is a directed dependency graph that connects production objects across the case lifecycle.

Nodes represent models, specifications, artifacts, decisions, validations, renders, exports, or review states.

Edges represent dependency, derivation, exposure, approval, replacement, or packaging relationships.

## Node model

A production node SHOULD include:

| Field | Description |
|---|---|
| node_id | Stable identifier. |
| node_type | Type of production object. |
| title | Human-readable name. |
| status | Current lifecycle state. |
| owner_component | Engine component responsible for the node. |
| source_refs | Inputs used to create the node. |
| output_refs | Outputs produced by the node. |
| review_state | Human review and approval status. |
| lock_state | Whether the node is protected from change. |
| version | Version or revision identifier. |

## Edge model

A production edge SHOULD include:

| Field | Description |
|---|---|
| edge_id | Stable identifier. |
| edge_type | Relationship type. |
| from_node | Source node. |
| to_node | Target node. |
| meaning | Human-readable explanation. |
| validation_relevance | Whether the edge matters for validation. |
| repair_relevance | Whether the edge matters for repair impact analysis. |

## Common node types

Common node types include:

- case_goal
- production_plan
- truth_model
- fact
- claim
- event
- evidence_fragment
- discovery_node
- document_specification
- artifact_production_specification
- draft_artifact
- approved_artifact
- rendered_file
- package_group
- release_package
- validation_report
- repair_plan
- human_decision

## Common edge types

Common edge types include:

- depends_on
- derives_from
- exposes
- supports
- contradicts
- renders_to
- packaged_in
- validates
- repairs
- replaces
- approved_by
- locked_by

## Graph status

A graph MAY contain draft, approved, locked, failed, replaced, and released nodes at the same time.

Status is part of production state and should not be hidden.

## Normative requirements

Production nodes SHOULD be traceable to their inputs.

Evidence-bearing outputs SHOULD trace to evidence fragments or document specifications.

Rendered files SHOULD trace to approved artifacts.

Release packages SHOULD trace to rendered files and package groups.

## Validation questions

- Can the engine identify what produced this node?
- Can the engine identify what this node affects?
- Is the node approved or locked?
- What must be checked if the node changes?
- Does the graph preserve release traceability?

## Related

- CER-1300
- CER-1302
- CER-1303
- CER-1202
