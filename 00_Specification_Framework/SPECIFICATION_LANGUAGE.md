---
id: CER-0001
title: Specification Language
status: draft
version: 0.1
tags:
  - specification
  - language
  - normative
---

# Specification Language

CER uses normative language so that concepts can be implemented and tested.

## Normative terms

The following words are used with strict meanings:

| Term | Meaning |
|---|---|
| MUST | Absolute requirement. |
| MUST NOT | Absolute prohibition. |
| SHALL | Formal requirement equivalent to MUST. |
| SHOULD | Strong recommendation. Deviations require justification. |
| SHOULD NOT | Strong discouragement. Deviations require justification. |
| MAY | Optional capability. |
| OPTIONAL | Feature or behavior that is not required. |

## Normative statements

A normative statement is a sentence that defines required behavior.

Example:

> Every critical fact MUST be represented by at least two independent evidence fragments.

## Non-normative discussion

Design discussion, examples, and implementation notes are non-normative unless they contain explicit normative terms.

## Rule IDs

Rules are numbered as:

```text
RULE-0001
RULE-0002
RULE-0003
```

A validator SHOULD be able to reference rule IDs directly.

## Test IDs

Tests are numbered as:

```text
TEST-0001
TEST-0002
TEST-0003
```

Tests SHOULD map to one or more rules.

## Pattern IDs

Patterns are numbered as:

```text
PAT-0001
PAT-0002
PAT-0003
```

Patterns describe reusable design structures.

## Architecture decision IDs

Architecture decisions are numbered as:

```text
ADR-0001
ADR-0002
ADR-0003
```

ADRs explain why key design choices were made.
