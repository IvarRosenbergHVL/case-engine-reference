---
id: CER-0907
title: CER Certification
status: draft
version: 0.1
tags:
  - validation
  - certification
  - release-readiness
---

# CER Certification

CER Certification describes release readiness levels for a validated case package.

## Purpose

Certification gives designers and tools a compact way to communicate whether a case is ready for testing, review, or release.

Certification is not a replacement for the Validation Report.

## Definition

CER Certification is a label assigned to a case package based on validation outcomes, severity counts, quality dimensions, and release criteria.

## Certification levels

| Level | Meaning |
|---|---|
| Uncertified | Validation has not completed or failed critically. |
| Bronze | Structurally valid but needs review or playtest. |
| Silver | Playable and mostly compliant with moderate issues. |
| Gold | Strong release candidate with no major unresolved issues. |
| Platinum | High-quality release candidate with strong scores and only minor issues. |

## Suggested criteria

| Level | Suggested minimum |
|---|---|
| Bronze | No critical failures; major issues allowed for review. |
| Silver | No critical failures; limited major issues. |
| Gold | No critical or major failures; strong dimension scores. |
| Platinum | No critical or major failures; very strong dimension scores; only minor warnings. |

## Certification record

A certification record SHOULD include:

- case ID
- CER version
- certification level
- validation report ID
- quality score if used
- severity counts
- waivers
- certification timestamp
- reviewer or validator identity if applicable

## Waivers

Waivers MAY allow release with known issues.

Waivers SHOULD be explicit, documented, and visible in the certification record.

A waived issue SHOULD NOT disappear from the validation history.

## Normative requirements

Certification SHOULD be based on a completed Validation Report.

Certification SHOULD NOT hide critical findings.

Uncertified cases SHOULD NOT be treated as release-ready.

Certification criteria MAY be product-specific, but the certification record SHOULD remain auditable.

## Validation questions

- What validation report supports this certification?
- Are there unresolved critical or major issues?
- Are waivers documented?
- Is the certification level appropriate to the findings?
- Is the case ready for playtest, review, or release?

## Related

- CER-0904
- CER-0906
- CER-0905
