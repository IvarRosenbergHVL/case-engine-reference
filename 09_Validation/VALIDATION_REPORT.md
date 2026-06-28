---
id: CER-0904
title: Validation Report
status: draft
version: 0.1
tags:
  - validation
  - reporting
---

# Validation Report

A Validation Report summarizes the results of validation checks across a case package.

## Purpose

Validation findings are only useful if designers can understand them, prioritize them, and act on them.

The Validation Report provides a structured output for human review, automated repair, release decisions, and audit history.

## Definition

A Validation Report is a human-readable and machine-readable summary of validation outcomes, findings, severity, affected elements, quality dimensions, and repair recommendations.

## Recommended sections

A Validation Report SHOULD include:

| Section | Purpose |
|---|---|
| Summary | Overall result and release readiness. |
| Quality scores | Dimension scores if scoring is enabled. |
| Critical findings | Release-blocking issues. |
| Major findings | Issues likely to harm fairness or solvability. |
| Warnings | Review issues that may be acceptable. |
| Failure modes | Detected structural failure patterns. |
| Rule results | Rule-level pass, warn, fail, or waiver outcomes. |
| Repair recommendations | Suggested fixes. |
| Waivers | Explicitly accepted issues. |
| Audit metadata | Version, timestamp, validator, and case ID. |

## Report outcomes

| Outcome | Meaning |
|---|---|
| pass | Case is release-ready under current criteria. |
| pass_with_warnings | Case may be released after review. |
| fail | Case is not release-ready. |
| blocked | Critical issue prevents meaningful release decision. |

## Minimum report fields

A report SHOULD define:

- report_id
- case_id
- CER version
- validation timestamp
- validation pipeline version
- overall outcome
- finding counts by severity
- quality dimension summaries
- release recommendation

## Normative requirements

Validation Reports SHOULD be stable enough to store as release artifacts.

Reports SHOULD cite affected case element IDs.

Reports SHOULD distinguish failures from warnings.

Reports SHOULD preserve waivers and waiver reasons.

## Validation questions

- Can a human understand why the case passed or failed?
- Are the most important findings easy to see?
- Are repair actions clear?
- Is the report useful for comparing case versions?
- Can the report support release approval?

## Related

- CER-0900
- CER-0901
- CER-0902
- CER-0903
