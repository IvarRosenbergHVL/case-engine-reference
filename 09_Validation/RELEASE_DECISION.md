---
id: CER-0911
title: Release Decision
status: draft
version: 0.1
tags:
  - validation
  - release
  - certification
---

# Release Decision

The Release Decision determines whether a validated case package may move to playtest, review, publication, or rejection.

## Purpose

Validation produces findings.

A Release Decision interprets those findings against product goals, certification criteria, risk tolerance, and intended use.

## Definition

A Release Decision is the documented outcome of evaluating a case package after validation.

## Decision outcomes

| Outcome | Description |
|---|---|
| reject | Case is not usable in current form. |
| repair_required | Case may proceed only after repair and revalidation. |
| playtest_ready | Case can be tested but not released. |
| review_ready | Case can be reviewed for final editorial or product approval. |
| release_ready | Case can be released under current criteria. |
| release_with_waivers | Case can be released with documented accepted issues. |

## Decision inputs

A Release Decision SHOULD consider:

- Validation Report
- severity counts
- critical failures
- waivers
- Case Score if used
- CER Certification level
- product difficulty target
- playtest status
- editorial review status
- rendering and packaging status

## Release blockers

The following SHOULD normally block release:

- unresolved critical validation findings
- unsolved core timeline impossibility
- missing critical evidence exposure
- spoiler leakage into player-facing package
- invalid or incomplete package manifest
- case-specific reference content in specification or reusable templates

## Normative requirements

A Release Decision SHOULD be recorded.

Release readiness SHOULD be based on validation evidence, not intuition alone.

A case released with waivers SHOULD preserve waiver records.

A repaired case SHOULD be revalidated before release.

## Validation questions

- Is the package release-ready or only playtest-ready?
- Are all critical findings resolved or waived?
- Are waivers acceptable for this product stage?
- Does certification match the findings?
- Is the decision auditable later?

## Related

- CER-0904
- CER-0907
- CER-0910
