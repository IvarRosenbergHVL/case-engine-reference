---
id: CER-1505
title: RC Checklist
status: draft
version: 0.2
tags:
  - v1
  - rc
  - checklist
---

# RC Checklist

The RC Checklist defines what should be true before CER 1.0 is marked as a release candidate.

## Purpose

A release candidate should be stable enough for implementation review.

It does not need to be perfect, but it should be coherent, scoped, and auditable.

## Required checks

| Check | Required state |
|---|---|
| Scope freeze | V1 scope is documented and followed. |
| Core sections | All V1 core sections exist. |
| Rendering | V1 rendering requirements are complete. |
| Artifact production | Human-governed production model is complete. |
| Case engine | Reference architecture covers planning to export. |
| Production graphs | Dependency and impact concepts are defined. |
| Compliance | Minimal compliance model exists. |
| Schemas | Minimal V1 schemas exist. |
| Failure modes | Critical V1 failure modes exist. |
| Audit checklist | Editorial audit process is documented. |
| Example policy | Case-independent example policy is followed. |
| Obsidian vault | Repository can be opened as a vault. |
| Static site | Documentation site scaffold exists and builds. |
| Release definition | CER_VERSION_1_0.md exists. |

## Editorial checks

Before release candidate:

- terminology audit completed
- normative language audit completed
- cross-reference audit completed
- example safety audit completed
- duplicate content reviewed
- obvious numbering conflicts resolved
- outdated roadmap items updated or moved

## Release files

Before release candidate, the repository SHOULD include:

- current README
- roadmap aligned to V1
- changelog entry for V1 RC
- V1 scope freeze
- compliance documents
- schema index
- hardening checklist
- CER version definition
- Obsidian guide
- static site configuration

## Blocking issues

The following SHOULD block release candidate:

- known case-specific example leakage
- missing core V1 section
- contradictory definitions of central terms
- unresolved release safety rules
- no compliance model
- no audit checklist
- no license decision
- failing documentation build

## Deferred work

The following MAY be deferred to V1.1:

- more document types
- more schemas
- more failure modes
- implementation examples
- GUI specifications
- advanced certification
- model-specific guidance
- complete reference case package

## RC decision

CER 1.0 may enter release candidate when:

```text
V1 scope is frozen.
Core sections are complete.
Minimal schemas exist.
Compliance model exists.
Audit checklist exists.
Release definition exists.
Known blockers are resolved or tracked.
```

## Related

- CER-1500
- CER-1501
- CER-1502
- CER-1508
- CER-1400
