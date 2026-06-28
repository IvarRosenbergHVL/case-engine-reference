---
id: CER-0905
title: Repair Recommendations
status: draft
version: 0.1
tags:
  - validation
  - repair
---

# Repair Recommendations

Repair Recommendations describe possible changes that may resolve validation findings or reduce quality risks.

## Purpose

Validation should not only identify problems. It should also help designers understand how to improve the case.

Repair Recommendations provide structured, reviewable suggestions without automatically changing the case truth.

## Definition

A Repair Recommendation is a proposed action linked to a validation finding, failure mode, rule violation, or quality dimension weakness.

## Recommendation fields

A Repair Recommendation SHOULD define:

| Field | Description |
|---|---|
| recommendation_id | Stable identifier. |
| source_finding | Validation finding that triggered it. |
| affected_ids | Case elements affected. |
| repair_type | Type of repair. |
| description | Human-readable suggestion. |
| expected_effect | What the repair should improve. |
| risk | Possible side effects. |
| requires_truth_change | Whether core truth must change. |
| priority | Low, medium, high, urgent. |

## Repair types

| Type | Description |
|---|---|
| Add exposure | Add another player-facing evidence exposure. |
| Move exposure | Place an exposure in a better document. |
| Reduce explicitness | Make a clue less direct. |
| Increase visibility | Make a clue easier to notice. |
| Add context | Add context required for interpretation. |
| Add corroboration | Add independent support. |
| Split document | Reduce single-document solution risk. |
| Adjust suspicion | Strengthen or weaken suspect support. |
| Repair timeline | Fix temporal inconsistency. |
| Repair rendering | Improve final artifact legibility or clue preservation. |
| Repair packaging | Fix missing files, manifest, or spoiler separation. |

## Truth-preserving repair

A repair is truth-preserving when it changes exposure, distribution, wording, rendering, or packaging without changing the objective case truth.

Truth-preserving repairs SHOULD be preferred when possible.

## Truth-changing repair

A repair is truth-changing when it modifies events, actors, relationships, method, motive, opportunity, or objective facts.

Truth-changing repairs require broader revalidation.

## Normative requirements

Repair Recommendations SHOULD reference validation findings.

Repair Recommendations SHOULD state whether they require truth changes.

A repair SHOULD be followed by revalidation.

Automated repair SHOULD NOT silently alter core truth without explicit permission or design intent.

## Validation questions

- What finding does this repair address?
- Is the repair truth-preserving?
- What other systems may be affected?
- Does the repair reduce one issue while creating another?
- Should the repair be automatic or human-reviewed?

## Related

- CER-0901
- CER-0904
- CER-0800
- RULE-0013
