---
id: CER-0906
title: Case Score
status: draft
version: 0.1
tags:
  - validation
  - scoring
---

# Case Score

Case Score is an optional summary score representing release quality across validation dimensions.

## Purpose

A score can help compare versions, prioritize repairs, and communicate readiness.

A score must not replace detailed findings.

## Definition

A Case Score is an aggregate quality indicator derived from validation results, quality dimensions, severity, and release criteria.

## Score principles

A Case Score SHOULD be:

- explainable
- supported by findings
- dimension-aware
- severity-aware
- stable across repeated validation
- secondary to critical failure status

## Recommended scale

CER uses a 0 to 100 scale when scoring is enabled.

| Score | Interpretation |
|---|---|
| 90-100 | Strong release candidate. |
| 75-89 | Good but review recommended. |
| 60-74 | Playable risk; repair recommended. |
| 40-59 | Major problems. |
| 0-39 | Not release-ready. |

## Critical failure override

A high score MUST NOT override a critical release-blocking failure.

Example:

```text
Overall score: 94
Critical failures: 1
Release status: fail
```

## Dimension scores

A Case Score MAY include dimension scores such as:

- truth consistency
- timeline consistency
- evidence integrity
- critical fact coverage
- discovery quality
- document quality
- information economy
- player fairness
- rendering quality
- packaging integrity

## Normative requirements

Case Score is optional.

If used, Case Score SHOULD cite the underlying Quality Dimensions.

A Case Score SHOULD NOT hide severity counts.

Critical failures SHOULD block release regardless of score.

## Validation questions

- What dimensions drive this score?
- Are low-scoring dimensions visible?
- Do critical failures override the score?
- Is the score useful for comparing versions?
- Is the score explainable to a human reviewer?

## Related

- CER-0902
- CER-0904
- CER-0907
