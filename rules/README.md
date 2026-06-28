---
id: CER-RULES-README
title: Rules Index
status: draft
version: 0.2
tags:
  - rules
  - index
  - audit-safe
---

# Rules Index

Rules define normative requirements that implementations and validators can check.

Rule IDs use the format:

```text
RULE-0001
```

## V1 rule families

- information modeling
- evidence distribution
- document behavior
- discovery progression
- validation
- rendering and packaging
- release safety
- case-independent examples
- implementation independence

## First normative principle

> RULE-0001 — A case SHALL be modeled as an interconnected information system.
>
> Documents are representations of information.
>
> Documents are never the information itself.

## Audit note

Rules SHOULD describe general requirements and structural constraints.

They SHOULD NOT include concrete plots, actor relationships, motives, methods, or clue chains.

## Related

- `00_Specification_Framework/SPECIFICATION_LANGUAGE.md`
- `00_Specification_Framework/EXAMPLE_POLICY.md`
- `rules/RULE-0012-no-case-specific-reference-content.md`
- `rules/RULE-0013-ai-is-implementation-not-requirement.md`
