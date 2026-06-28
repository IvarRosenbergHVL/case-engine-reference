---
id: CER-0909
title: Severity Model
status: draft
version: 0.1
tags:
  - validation
  - severity
---

# Severity Model

The Severity Model defines how validation findings are ranked by impact.

## Purpose

Not all findings require the same response.

Severity helps reviewers prioritize repairs, decide release readiness, and distinguish minor quality issues from release-blocking defects.

## Definition

Severity is the expected impact of a validation finding on fairness, solvability, coherence, player experience, rendering, or release safety.

## Severity levels

| Severity | Description | Typical action |
|---|---|---|
| Minor | Low impact issue. | Review when convenient. |
| Moderate | Quality issue that may affect play. | Repair or accept with review. |
| Major | Likely to harm fairness, solvability, or experience. | Repair before release. |
| Critical | Breaks core validity or safety. | Block release unless waived. |

## Severity factors

Severity SHOULD consider:

- whether the affected fact is critical
- whether a player-facing solution path remains available
- whether the issue affects one document or the whole case
- whether redundancy mitigates the problem
- whether the issue can be detected during playtest
- whether the issue leaks spoilers
- whether the issue violates scope or publication safety rules

## Critical findings

A finding SHOULD usually be Critical when it:

- makes the intended solution unreachable
- creates impossible timeline or opportunity logic
- leaks facilitator-only solution into player material
- violates case-independence policy
- breaks package spoiler separation
- makes release status misleading

## Major findings

A finding SHOULD usually be Major when it:

- weakens solvability
- creates unfair misdirection
- overloads or underfeeds player reasoning
- makes one wrong solution equally supported
- creates a critical fact bottleneck

## Normative requirements

Severity SHOULD be assigned consistently.

Severity SHOULD be visible in Validation Reports.

Critical findings SHOULD block release unless explicitly waived.

Severity SHOULD be reassessed after repair.

## Validation questions

- What player or release impact does this finding have?
- Is the affected element critical or optional?
- Does redundancy reduce the severity?
- Should this finding block release?
- Is a waiver appropriate?

## Related

- CER-0901
- CER-0904
- CER-0800
