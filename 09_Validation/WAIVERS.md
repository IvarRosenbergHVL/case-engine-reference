---
id: CER-0910
title: Waivers
status: draft
version: 0.1
tags:
  - validation
  - waivers
  - release
---

# Waivers

Waivers record explicit decisions to accept a known validation finding.

## Purpose

Some issues may be intentional, acceptable for a specific product, or deferred to playtest.

A waiver makes that decision visible instead of hiding the finding.

## Definition

A Waiver is a documented exception to a validation failure or warning.

A waiver does not mean the issue disappeared. It means the issue was reviewed and accepted under defined conditions.

## Waiver fields

A waiver SHOULD define:

| Field | Description |
|---|---|
| waiver_id | Stable identifier. |
| finding_id | Validation finding being waived. |
| rule_or_section_ref | CER rule or section involved. |
| reason | Why the issue is accepted. |
| scope | What the waiver applies to. |
| risk | Known risk of accepting the issue. |
| expiry | Optional condition or version where waiver must be revisited. |
| approver | Person or process approving waiver. |
| date | Waiver date. |

## Appropriate waiver use

A waiver MAY be appropriate when:

- the issue is intentional design
- the issue affects only optional content
- the issue is acceptable for playtest but not release
- the issue is product-specific and documented
- the issue cannot be repaired without disproportionate cost

## Inappropriate waiver use

A waiver SHOULD NOT be used to hide:

- broken solution logic
- missing critical evidence
- spoiler leakage
- case-specific content leakage
- impossible timeline structure
- release-blocking packaging defects

## Normative requirements

Waivers SHOULD be visible in Validation Reports.

Waivers SHOULD preserve the original finding.

Critical issue waivers SHOULD require explicit approval.

Waivers SHOULD be revisited when affected case elements change.

## Validation questions

- What finding is being waived?
- Why is the waiver acceptable?
- Who or what approved it?
- Does the waiver apply to release or only playtest?
- Should the waiver expire or be revisited?

## Related

- CER-0901
- CER-0904
- CER-0907
- CER-0909
