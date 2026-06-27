---
id: CER-0006
title: Versioning
status: draft
version: 0.1
tags:
  - versioning
  - release
---

# Versioning

CER uses semantic milestone versioning until v1.0.

## Milestone versions

- `v0.1` — Specification Framework
- `v0.2` — Foundations
- `v0.3` — Case Architecture
- `v0.4` — Evidence System
- `v0.5` — Document System
- `v0.6` — Player Experience
- `v0.7` — AI Engine
- `v0.8` — Validation
- `v0.9` — Rendering and Facilitator Mode
- `v1.0` — Complete Case Engine Reference

## Stability

Before v1.0, breaking changes are expected.

After v1.0:

- patch versions fix wording, typos, and non-normative examples
- minor versions add backward-compatible concepts, rules, or tests
- major versions may change core terminology or conformance requirements

## Document status

Each document SHALL include a status:

- draft
- proposed
- accepted
- deprecated
- superseded

## Conformance statements

Implementations SHOULD state which CER version they conform to.

Example:

```text
Conforms to: CER v0.3
Conformance profile: generator-core
```
