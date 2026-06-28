---
id: CER-1402
title: Self Assessment
status: draft
version: 0.1
tags:
  - compliance
  - self-assessment
  - v1
---

# Self Assessment

Self Assessment is a structured checklist for evaluating how well an implementation supports CER.

## Purpose

A compliance claim should be reviewable.

The self assessment provides a lightweight way to record support, gaps, and limitations before any external certification process exists.

## Assessment states

| State | Meaning |
|---|---|
| supported | Area is implemented and used. |
| partial | Area is partly implemented or handled manually. |
| planned | Area is planned but not available. |
| unsupported | Area is not implemented. |
| not_applicable | Area does not apply to this implementation. |

## Core checklist

An implementation SHOULD assess these areas:

- Foundations
- Case Architecture
- Evidence System
- Document System
- Document Types
- Discovery System
- Information Economy
- Failure Modes
- Validation
- Rendering
- Artifact Production
- Case Engine
- Production Graphs
- Schemas
- Export and Packaging

## Evidence for support

For each area, the self assessment SHOULD record:

- support state
- implementation notes
- manual process notes
- known limitations
- evidence or examples
- related files, modules, workflows, or documents

## Human process dependencies

Manual processes are allowed in V1.

However, they SHOULD be documented.

If an area depends on human review, the assessment SHOULD describe how the review is performed and recorded.

## Gap handling

Unsupported or partial areas SHOULD include a gap note.

A gap note SHOULD state whether the limitation affects release readiness, automation, validation, or only convenience.

## Normative requirements

A CER compliance claim SHOULD be accompanied by a self assessment.

The assessment SHOULD be honest about manual work and missing features.

The assessment SHOULD identify the CER version used.

The assessment SHOULD be updated when implementation behavior changes.

## Minimal template

```text
CER Version:
Implementation Name:
Assessment Date:
Assessor:

Area:
State:
Compliance Level:
Evidence:
Manual Process:
Known Limitations:
Planned Work:
```

## Related

- CER-1400
- CER-1401
- CER-1403
