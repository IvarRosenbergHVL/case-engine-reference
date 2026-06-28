---
id: CER-HOME
title: Case Engine Reference Home
status: draft
version: 1.0-rc
tags:
  - navigation
  - cer
  - obsidian
  - v1
aliases:
  - CER Home
  - Case Engine Reference
---

# Case Engine Reference

Welcome to **Case Engine Reference (CER)**.

CER is the authoritative specification for designing, producing, validating, rendering, and packaging document-based investigation cases.

This repository can be opened directly as an Obsidian vault.

## Start here

- [[README|GitHub README]]
- [[MASTER_OUTLINE|Master Outline]]
- [[ROADMAP|Roadmap]]
- [[CHANGELOG|Changelog]]
- [[15_V1_Hardening/V1_SCOPE_FREEZE|V1 Scope Freeze]]
- [[15_V1_Hardening/AUDIT_CHECKLIST|V1 Audit Checklist]]
- [[15_V1_Hardening/RC_CHECKLIST|Release Candidate Checklist]]

## Core specification

- [[00_Specification_Framework/README|00 — Specification Framework]]
- [[01_Foundations/README|01 — Foundations]]
- [[02_Case_Architecture/README|02 — Case Architecture]]
- [[03_Evidence_System/README|03 — Evidence System]]
- [[04_Document_System/README|04 — Document System]]
- [[05_Document_Types/README|05 — Document Types]]
- [[06_Discovery_System/README|06 — Discovery System]]
- [[07_Information_Economy/README|07 — Information Economy]]
- [[08_Failure_Modes/README|08 — Failure Modes]]
- [[09_Validation/README|09 — Validation]]
- [[10_Rendering/README|10 — Rendering]]
- [[11_Artifact_Production/README|11 — Artifact Production]]
- [[12_Case_Engine/README|12 — Case Engine]]
- [[13_Production_Graphs/README|13 — Production Graphs]]
- [[14_Compliance/README|14 — Compliance]]
- [[15_V1_Hardening/README|15 — V1 Hardening]]

## Supporting material

- [[adr/README|Architecture Decision Records]]
- [[rules/README|Rules]]
- [[patterns/README|Patterns]]
- [[schemas/README|Schemas]]
- [[tests/README|Tests]]
- [[extensions/README|Extensions]]

## Core idea

A playable investigation case is not a linear story. It is an information system.

```mermaid
graph TD
    Goal[Case Goal]
    Truth[Hidden Truth]
    Evidence[Evidence Graph]
    Discovery[Discovery Graph]
    Documents[Document Specifications]
    Artifacts[Artifact Production]
    Rendering[Rendering]
    Validation[Validation]
    Export[Release Package]

    Goal --> Truth
    Truth --> Evidence
    Evidence --> Discovery
    Evidence --> Documents
    Documents --> Artifacts
    Artifacts --> Rendering
    Truth --> Validation
    Evidence --> Validation
    Discovery --> Validation
    Documents --> Validation
    Rendering --> Validation
    Validation --> Export
```

## V1 status

CER is currently in **V1 hardening**.

The specification content is largely complete. The remaining work is audit, consistency review, and release candidate preparation.

## Navigation tips

Use Obsidian backlinks and graph view to explore how the specification connects across truth, evidence, documents, discovery, rendering, artifact production, validation, compliance, and release readiness.
