---
id: CER-TESTS-README
title: Tests Index
status: draft
version: 0.2
tags:
  - tests
  - validation
  - index
  - audit-safe
---

# Tests Index

Tests define how a CER-compatible implementation can validate generated or manually produced cases against CER.

Test IDs use the format:

```text
TEST-0001
```

## V1 test families

- truth completeness
- timeline consistency
- evidence redundancy
- cross-document reasoning
- hypothesis balance
- discovery progression
- document realism
- audience separation
- export completeness
- failure mode detection

Tests SHOULD reference one or more rules.

## Audit note

Tests SHOULD use structural fixtures and placeholders.

Tests SHOULD NOT encode concrete case plots, actor relationships, motive structures, methods, or clue chains.

## Related

- `rules/README.md`
- `09_Validation/README.md`
- `15_V1_Hardening/AUDIT_CHECKLIST.md`
