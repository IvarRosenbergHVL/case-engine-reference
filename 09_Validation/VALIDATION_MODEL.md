---
id: CER-0901
title: Validation Model
status: draft
version: 0.1
tags:
  - validation
  - validation-model
---

# Validation Model

The Validation Model defines the structure of validation findings, outcomes, severity, and release decisions.

## Purpose

Validation must be more precise than a general quality opinion.

A validation finding should identify what failed, where it failed, why it matters, and how it may be repaired.

## Definition

A Validation Model is the structured representation of validation checks, findings, outcomes, severity, and recommendations across a case package.

## Validation check

A validation check is a specific test or review action.

A check SHOULD define:

| Field | Description |
|---|---|
| check_id | Stable identifier. |
| target | Case element or system being checked. |
| rule_ref | Rule, CER section, or failure mode reference. |
| input_scope | Data or artifacts inspected. |
| outcome | pass, warn, fail, waiver, not_applicable. |
| severity | minor, moderate, major, critical. |
| message | Human-readable explanation. |
| affected_ids | Case elements affected. |
| repair_hint | Suggested repair if applicable. |

## Validation outcome

| Outcome | Description |
|---|---|
| pass | Check succeeded. |
| warn | Issue exists but may be acceptable. |
| fail | Issue violates rule or quality requirement. |
| waiver | Issue accepted by explicit decision. |
| not_applicable | Check does not apply to this case. |

## Severity

Severity describes player or system impact.

| Severity | Description |
|---|---|
| Minor | Low impact, review recommended. |
| Moderate | Quality concern, may affect experience. |
| Major | Likely harms fairness, solvability, or coherence. |
| Critical | Blocks release unless waived. |

## Normative requirements

Validation findings SHOULD be machine-readable and human-readable.

Findings SHOULD reference affected case elements.

Findings SHOULD distinguish rule violations from quality warnings.

Critical failures SHOULD block release unless explicitly waived.

## Validation questions

- What exactly failed?
- Which case elements are affected?
- Which rule, section, or failure mode applies?
- How severe is the issue?
- Can the issue be repaired without changing core truth?

## Related

- CER-0900
- CER-0800
- RULE-0013
