---
id: CER-PATTERNS-README
title: Patterns Index
status: draft
version: 0.2
tags:
  - patterns
  - index
  - audit-safe
---

# Patterns Index

Patterns describe reusable design structures.

Pattern IDs use the format:

```text
PAT-0001
```

## V1 pattern guidance

Patterns are reusable structures, not stories.

A pattern SHOULD explain:

- the structural purpose
- when it is useful
- how it should be exposed through evidence
- how it can fail
- how it should be validated

## Example safety

Pattern examples SHOULD use placeholders such as Actor A, Role R-001, Relationship REL-001, Location X, Object Y, Claim CL-001, and Evidence Fragment EF-001.

Patterns SHOULD NOT preserve concrete role combinations, relationship configurations, motive chains, methods, or clue chains from any specific case.

## Current patterns

- [[PAT-0001-hidden-identity]]

## Related

- `00_Specification_Framework/EXAMPLE_POLICY.md`
- `rules/RULE-0012-no-case-specific-reference-content.md`
- `15_V1_Hardening/CASE_INDEPENDENCE_AUDIT.md`
