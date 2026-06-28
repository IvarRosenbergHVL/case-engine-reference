---
id: CER-1212
title: Repair Engine
status: draft
version: 0.1
tags:
  - case-engine
  - repair
  - component
---

# Repair Engine

The Repair Engine proposes controlled changes when validation finds problems.

## Purpose

Repair keeps case production from becoming an uncontrolled rewrite loop.

When a finding appears, the engine should identify the smallest safe change that fixes the issue while preserving approved work whenever possible.

## Responsibility

The Repair Engine is responsible for turning findings into repair plans.

It MAY perform repairs automatically only when the workflow allows it and the change is low risk.

## Inputs

The Repair Engine MAY receive:

- validation report
- affected models
- affected document specifications
- affected artifact specifications
- affected artifacts
- approval and lock status
- waiver decisions
- production workflow history

## Outputs

The Repair Engine SHOULD produce:

- repair recommendation
- affected dependency list
- proposed change set
- revalidation requirements
- human approval request
- repair history entry

## Repair types

| Repair type | Description |
|---|---|
| specification repair | Changes a requirement or work order. |
| content repair | Changes an artifact draft or approved artifact. |
| distribution repair | Moves or duplicates information across documents. |
| continuity repair | Aligns style, visual identity, or repeated assets. |
| rendering repair | Fixes layout, print, format, or packaging problems. |
| model repair | Changes case model structures and requires broad revalidation. |

## Repair scope

Repairs SHOULD be as narrow as possible.

A repair SHOULD identify dependent materials that must be rechecked.

Changing hidden case truth SHOULD be treated as a major repair.

## Locked material

Locked artifacts SHOULD NOT be changed without explicit approval.

If locked material must change, the reason SHOULD be recorded and dependent outputs SHOULD be revalidated.

## Human control

Human reviewers SHOULD approve meaningful repairs before they are applied to release material.

The reviewer SHOULD be able to choose between repair, waiver, replacement, or redesign.

## Normative requirements

Repair suggestions SHOULD trace back to validation findings.

Repair actions SHOULD preserve audit history.

Major repairs SHOULD trigger revalidation of dependent structures.

Automated repair SHOULD be limited to changes that are safe, reversible, and reviewable.

## Validation questions

- Which finding does this repair address?
- What will change?
- What dependencies must be rechecked?
- Does the repair affect approved or locked material?
- Is human approval required?

## Implements

- CER-0905
- CER-0908
- CER-0910
- CER-0911
- CER-1102
- CER-1103

## Related

- CER-1211
- CER-1213
