---
id: CER-0902
title: Quality Dimensions
status: draft
version: 0.1
tags:
  - validation
  - quality
  - scoring
---

# Quality Dimensions

Quality Dimensions define the major areas a case may be evaluated against.

## Purpose

A case may be strong in one area and weak in another.

Quality Dimensions make validation more useful by separating logic, evidence, discovery, documents, player fairness, rendering, and packaging.

## Core dimensions

| Dimension | Description |
|---|---|
| Truth consistency | Objective case model is internally coherent. |
| Timeline consistency | Events, durations, opportunity, and sequence are possible. |
| Evidence integrity | Evidence is traceable, reliable, and linked to facts or claims. |
| Critical fact coverage | Required facts are exposed and supported. |
| Discovery quality | Players can move from evidence to justified solution. |
| Hypothesis balance | Wrong and intended hypotheses are fairly supported and rejected. |
| Document quality | Documents satisfy specifications and feel realistic. |
| Information economy | Density, noise, visibility, and cognitive load are appropriate. |
| Player fairness | The case is solvable without hidden or outside knowledge. |
| Rendering quality | Final artifacts preserve evidence and remain legible. |
| Packaging integrity | Materials are complete and spoiler boundaries are preserved. |

## Dimension scoring

If scoring is enabled, each dimension MAY receive a score from 0 to 100.

Scores SHOULD be supported by validation findings.

A high overall score SHOULD NOT hide a critical failure in one dimension.

## Recommended score interpretation

| Score | Meaning |
|---|---|
| 90-100 | Strong. Suitable for release with minor review. |
| 75-89 | Good but with issues to review. |
| 60-74 | Playable risk; repair recommended. |
| 40-59 | Major quality problems. |
| 0-39 | Not release-ready. |

## Normative requirements

Quality Dimensions SHOULD be reported separately when scoring is used.

Critical failures SHOULD be visible even if the overall score is high.

Quality scoring SHOULD be explainable through findings, not opaque judgment.

## Validation questions

- Which dimension is weak?
- Is weakness caused by one issue or many small issues?
- Does a critical issue override an otherwise good score?
- Which repairs would improve the dimension most?

## Related

- CER-0901
- CER-0903
- CER-0800
