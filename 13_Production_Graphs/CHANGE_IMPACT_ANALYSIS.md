---
id: CER-1303
title: Change Impact Analysis
status: draft
version: 0.1
tags:
  - production-graphs
  - impact-analysis
  - repair
---

# Change Impact Analysis

Change Impact Analysis defines how the Case Engine determines what must be reviewed after a change.

## Purpose

Case production is iterative.

Facts change, documents are revised, artifacts are replaced, and rendering issues are fixed.

The engine must identify affected downstream work before release.

## Definition

Change Impact Analysis is the process of traversing the Production Graph from a changed node to affected dependent nodes.

## Change sources

A change may originate from:

- human review
- validation findings
- repair actions
- artifact replacement
- style guide update
- rendering update
- package restructuring
- truth model revision
- evidence plan revision

## Impact categories

| Impact | Description |
|---|---|
| no_impact | Downstream node remains valid. |
| review_required | Human or assisted review is needed. |
| revalidation_required | Validator must recheck the node. |
| regeneration_required | Node should be recreated from updated inputs. |
| approval_required | Human approval is required before proceeding. |
| blocked | Release cannot proceed until resolved. |

## Traversal rule

When a node changes, the engine SHOULD traverse downstream dependency edges.

For each downstream node, it SHOULD determine whether the change affects facts, evidence, document content, artifact requirements, visual continuity, rendering, packaging, or approval state.

## Locked nodes

If a changed upstream node affects a locked downstream node, the engine SHOULD not silently update that locked node.

It SHOULD create a review or unlock decision point.

## Repair integration

The Repair Engine SHOULD use Change Impact Analysis to estimate repair scope.

A repair recommendation SHOULD state which nodes must be rechecked after the repair.

## Normative requirements

A Case Engine SHOULD perform impact analysis after changes to approved or dependency-heavy nodes.

Impact analysis SHOULD distinguish review from regeneration.

Impact analysis SHOULD preserve human control over locked nodes.

Impact findings SHOULD be recorded in workflow history.

## Validation questions

- What changed?
- Which downstream nodes are affected?
- What kind of impact applies?
- Are any approved or locked nodes affected?
- What must be reviewed before release?

## Related

- CER-1301
- CER-1302
- CER-1212
- CER-1102
