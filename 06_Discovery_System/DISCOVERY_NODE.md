---
id: CER-0605
title: Discovery Node
status: draft
version: 0.1
tags:
  - discovery-system
  - discovery-node
---

# Discovery Node

A Discovery Node represents a meaningful player insight.

## Purpose

Discovery Nodes make the player reasoning path explicit without requiring a fixed order of document reading.

They help designers validate whether players can reach the intended solution from the archive.

## Definition

A Discovery Node is a modeled realization, question, inference, contradiction, elimination, or confirmation that players may reach while investigating the case.

## Node types

| Type | Description |
|---|---|
| Observation | Players notice a specific detail. |
| Interpretation | Players assign meaning to a detail. |
| Question | Players identify an unresolved uncertainty. |
| Hypothesis formation | Players form a possible explanation. |
| Hypothesis shift | Players revise or replace a theory. |
| Contradiction | Players identify a conflict. |
| Elimination | Players weaken or reject a theory. |
| Confirmation | Players strengthen a theory. |
| Solution insight | Players reach a necessary solution step. |

## Recommended fields

A Discovery Node SHOULD define:

| Field | Description |
|---|---|
| discovery_id | Stable identifier. |
| title | Short neutral label. |
| type | Node type. |
| statement | What players may realize. |
| supporting_exposures | Evidence exposures that support the node. |
| required_context | Context clues needed for interpretation. |
| affected_hypotheses | Hypotheses strengthened or weakened. |
| criticality | Background, useful, important, critical, solution-locking. |
| expected_stage | Early, middle, late, or solution. |
| failure_risk | How likely players are to miss or misread it. |

## Criticality

| Level | Description |
|---|---|
| Background | Adds world understanding. |
| Useful | Helps discussion but is not required. |
| Important | Needed for a strong solution. |
| Critical | Needed to justify the solution. |
| Solution-locking | Connects several critical insights into final explanation. |

## Normative requirements

Critical solution insights SHOULD be represented as Discovery Nodes.

A Discovery Node SHOULD cite player-facing evidence exposures.

A Discovery Node SHOULD NOT depend on hidden truth or facilitator-only material.

A major wrong hypothesis SHOULD have at least one Discovery Node that supports and one that weakens it.

## Validation questions

- Is this insight reachable from player-facing materials?
- Which evidence exposures support it?
- Does it require context?
- What happens if players miss it?
- Does it arrive at the intended difficulty level?

## Related

- CER-0601
- CER-0602
- CER-0603
- CER-0312
