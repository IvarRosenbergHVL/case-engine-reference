---
id: CER-0908
title: Rule Engine
status: draft
version: 0.1
tags:
  - validation
  - rules
  - conformance
---

# Rule Engine

The Rule Engine evaluates CER rules against a case model, evidence plan, documents, rendered outputs, and package metadata.

## Purpose

Rules make validation repeatable.

A Rule Engine allows CER requirements to be checked consistently by humans, scripts, or case-engine implementations.

## Definition

A Rule Engine is a validation component or review process that evaluates explicit CER rules and returns structured findings.

## Rule evaluation

A rule evaluation SHOULD identify:

| Field | Description |
|---|---|
| rule_id | Rule being evaluated. |
| target_scope | Case elements inspected. |
| outcome | pass, warn, fail, waiver, or not_applicable. |
| severity | Severity if the rule fails. |
| affected_ids | Affected elements. |
| message | Human-readable explanation. |
| repair_hint | Suggested repair. |

## Rule categories

CER rules MAY apply to:

- case architecture
- evidence traceability
- critical fact coverage
- document planning
- document generation
- discovery reasoning
- information economy
- rendering
- packaging
- scope and publication safety

## Evaluation modes

| Mode | Description |
|---|---|
| Manual review | A human reviewer applies the rule. |
| Assisted review | A tool surfaces likely issues for a human. |
| Automated check | A deterministic check evaluates the rule. |
| Model-assisted check | A language model helps inspect qualitative issues. |

## Normative requirements

A Rule Engine SHOULD preserve rule IDs in validation findings.

A Rule Engine SHOULD distinguish deterministic failures from qualitative warnings.

A Rule Engine SHOULD NOT require access to hidden model prompts.

A Rule Engine SHOULD support waivers with recorded reasons.

## Validation questions

- Which CER rules are evaluated?
- Which rules are manual or automated?
- Are findings traceable to rule IDs?
- Are waivers explicit?
- Can the same case be revalidated after repair?

## Related

- CER-0901
- CER-0903
- CER-0904
- rules/README.md
