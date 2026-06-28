---
id: CER-EXT-0000
title: Extensions
status: draft
version: 0.2
tags:
  - extensions
  - scope-control
  - v1
  - audit-safe
---

# Extensions

Extensions are valuable capabilities that are not required for CER v1.0 Core.

The purpose of this folder is to prevent uncontrolled expansion of the core specification.

## Extension rule

A feature SHALL be treated as an extension when it is useful but not necessary to implement a complete paper-based case package generator.

## Examples of extensions

Potential extensions include:

- live hosted event orchestration
- non-player character interaction
- audio evidence packages
- video evidence packages
- augmented reality scenes
- campaign mode
- scoring and leaderboards
- storefront and product management
- admin GUI workflows
- advanced graphic design automation
- location-specific event operations

## Extension naming

Extensions use the format:

```text
EXT-0001-short-name.md
EXT-0002-short-name.md
```

## Extension document structure

An extension SHOULD include:

1. Summary
2. Motivation
3. Core dependency
4. New concepts
5. New rules
6. New schemas
7. Validation impact
8. Rendering impact
9. Agent impact
10. Backward compatibility

## Audit note

Extensions SHOULD describe capabilities, integration points, and validation impact.

Extensions SHOULD NOT introduce concrete case plots, actor relationships, motive structures, methods, or clue chains.

## Promotion to core

An extension MAY be promoted to core in a future major version if:

- it becomes required for most implementations
- it is stable
- it has validation rules
- it has implementation experience
- it does not make the core specification unbounded

## Scope discipline

When in doubt, prefer placing a speculative idea in `extensions/` rather than expanding v1.0 Core.

CER v1.0 should be complete, not endless.

## Related

- `15_V1_Hardening/V1_SCOPE_FREEZE.md`
- `rules/RULE-0012-no-case-specific-reference-content.md`
- `rules/RULE-0013-ai-is-implementation-not-requirement.md`
