---
id: CER-1200
title: Case Engine Index
status: draft
version: 0.2
tags:
  - case-engine
  - implementation-reference
  - index
  - audit-safe
---

# Case Engine

Case Engine describes how a system, team, or workflow can implement CER.

It is a reference architecture, not a required software implementation.

## Purpose

CER defines what a valid document-based investigation case is.

The Case Engine section explains how a producer may build, validate, repair, render, and export a CER-compatible case package.

## Scope

This section defines responsibilities, inputs, outputs, and boundaries for engine components.

It does not require a specific framework, programming language, model provider, agent runtime, database, or orchestration tool.

## Core principle

A Case Engine implements CER by transforming structured truth into playable artifacts without losing traceability, fairness, or human control.

```text
Truth
→ Evidence
→ Discovery
→ Documents
→ Artifact Production
→ Rendering
→ Validation
→ Repair
→ Export
```

## Implementation independence

A CER-compatible engine may be implemented with:

- manual human workflows
- scripted generation
- database-driven tools
- language model tools
- image generation tools
- renderers
- validators
- hybrid human and tool-assisted pipelines

The implementation method is secondary.

The output must satisfy CER.

## AI as implementation detail

CER does not require AI.

If AI tools are used, they are producers, reviewers, assistants, or implementation mechanisms. They do not replace CER requirements, traceability, validation, or human approval.

Prompts and agent roles are implementation artifacts derived from specifications, not the specification itself.

## Engine components

| Component | Responsibility |
|---|---|
| Engine Overview | Defines the system boundary and responsibilities. |
| Pipeline | Defines the end-to-end production flow. |
| Planner | Converts goals into a case production plan. |
| Truth Builder | Produces or curates the hidden truth model. |
| Evidence Planner | Designs evidence exposure and corroboration. |
| Discovery Planner | Designs player reasoning and hypothesis movement. |
| Document Planner | Converts evidence needs into document specifications. |
| Artifact Planner | Converts document and visual needs into production specifications. |
| Writer | Produces draft textual artifacts from specifications. |
| Renderer | Converts approved content into package-ready files. |
| Validator | Evaluates consistency, fairness, quality, and release readiness. |
| Repair Engine | Proposes or performs controlled corrections. |
| Exporter | Assembles release packages and manifests. |

## Compatibility

An implementation may claim partial CER compatibility if it clearly states which sections it implements and which are missing.

Compatibility should be based on verifiable behavior, not on intent.

## Case-independence rule

Engine examples SHOULD describe component responsibilities and data flow only.

They SHOULD NOT embed concrete case plots, actor relationships, motive structures, or evidence chains.

## Related

- CER-0003
- CER-0200
- CER-0300
- CER-0400
- CER-0600
- CER-0900
- CER-1000
- CER-1100
- RULE-0013
