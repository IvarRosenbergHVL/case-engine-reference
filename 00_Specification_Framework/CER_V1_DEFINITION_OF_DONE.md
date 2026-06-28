---
id: CER-0010
title: CER v1.0 Definition of Done
status: draft
version: 0.1
tags:
  - specification-framework
  - v1
  - definition-of-done
---

# CER v1.0 Definition of Done

CER v1.0 is complete when the reference specification is sufficiently clear, bounded, auditable, and implementable for document-based homicide investigation games.

## Purpose

The Definition of Done prevents endless expansion.

CER v1.0 should be complete enough to guide human designers and machine implementations, while leaving non-essential ideas for later extensions.

## Completion criteria

CER v1.0 SHOULD include:

- foundations and scope
- case architecture
- evidence system
- document system
- document type library
- discovery system
- information economy
- failure modes
- validation framework
- rendering and packaging guidance
- normative rules
- ADRs for major design decisions
- schema placeholders or schemas for key models
- case-independent example policy
- audit of examples and case-specific leakage

## Required review passes

Before v1.0 release, the repository SHOULD pass these review passes:

| Review | Purpose |
|---|---|
| Scope review | Ensure v1.0 remains focused on document-based homicide investigation. |
| Terminology review | Ensure consistent use of CER terms. |
| Rule review | Ensure rules are numbered, referenced, and non-duplicative. |
| Cross-reference review | Ensure related sections point to each other. |
| Example audit | Remove or generalize case-specific examples. |
| Implementation review | Ensure a case-engine implementation can follow the spec. |
| Human design review | Ensure a human designer can use the spec manually. |

## Non-goals for v1.0

CER v1.0 does not need to include:

- a full case engine implementation
- production renderer code
- complete visual design templates
- every possible document type
- non-homicide investigation genres
- live event orchestration
- online clue systems
- product pricing or marketing logic

These may become extensions or separate repositories.

## Release readiness checklist

CER v1.0 SHOULD NOT be considered ready until:

- all core sections exist
- the scope is stable
- known case-specific examples have been audited
- all rules have stable IDs
- validation concepts are coherent
- rendering and packaging concepts are described
- at least one implementation path is clear
- open v1-blocking issues are resolved or explicitly deferred

## Extension boundary

Ideas that are useful but not required for v1.0 SHOULD be moved to `extensions/`, issues, or future RFCs.

The core specification SHOULD remain finite.

## Related

- CER-0001
- CER-0009
- CER-0106
- ADR-0004
- RULE-0012
