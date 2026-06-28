---
id: CER-1504
title: Normative Language
status: draft
version: 0.1
tags:
  - v1
  - normative-language
  - hardening
---

# Normative Language

Normative Language defines how CER V1 uses requirement terms.

## Purpose

CER should distinguish mandatory requirements, recommended practices, and optional capabilities.

Clear normative language makes the specification easier to implement, validate, and audit.

## Requirement terms

CER V1 uses these terms:

| Term | Meaning |
|---|---|
| MUST | Required for the relevant compliance claim. |
| MUST NOT | Prohibited for the relevant compliance claim. |
| SHOULD | Strong recommendation; expected unless a justified reason exists. |
| SHOULD NOT | Strong discouragement; allowed only with justification. |
| MAY | Optional capability or allowed variation. |

## V1 default

SHOULD is the default normative term in CER V1.

MUST should be used sparingly.

CER V1 supports manual, hybrid, and automated implementations, so many requirements are intentionally expressed as SHOULD.

## When to use MUST

Use MUST when violating the statement would break a core definition or release safety.

Examples:

- facts and claims must be distinguishable
- player packages must not include answer-only material
- a schema-required field must exist

## When to use SHOULD

Use SHOULD when the behavior is expected for a CER-compatible implementation but may be satisfied differently depending on workflow maturity.

Examples:

- human review should occur before release
- critical facts should have redundant support
- rendered output should preserve evidence-bearing details

## When to use MAY

Use MAY for optional features, alternative workflows, or implementation choices.

Examples:

- an implementation may use AI to produce drafts
- a package may include hint material
- a workflow may support partial regeneration

## Waivers

A waiver is not the same as a pass.

If a SHOULD or MUST-level issue is waived, the waiver SHOULD record the reason and release impact.

## Audit guidance

During V1 audit, check whether:

- MUST is overused
- SHOULD is used for implementation-dependent guidance
- MAY is used for genuinely optional features
- waiver behavior is clear where exceptions are allowed
- normative claims are testable or reviewable

## Related

- CER-1502
- CER-1503
- CER-0908
- CER-0910
