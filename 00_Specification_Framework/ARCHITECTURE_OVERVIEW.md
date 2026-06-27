---
id: CER-0003
title: Architecture Overview
status: draft
version: 0.1
tags:
  - architecture
  - overview
---

# Architecture Overview

CER models a case engine as a pipeline from hidden truth to printable case package.

The architecture is implementation-independent.

## Conceptual pipeline

```mermaid
graph TD
    Input[User Input]
    CaseModel[Case Model]
    Truth[Truth Graph]
    Timeline[Timeline Graph]
    Relations[Relationship Graph]
    Evidence[Evidence Graph]
    Perception[Perception Graph]
    Discovery[Discovery Graph]
    Distribution[Document Distribution Matrix]
    Specs[Document and Asset Specs]
    Generation[Document and Asset Generation]
    Validation[Validation]
    Repair[Repair]
    Render[Rendering]
    Package[Printable Case Package]

    Input --> CaseModel
    CaseModel --> Truth
    Truth --> Timeline
    Truth --> Relations
    Truth --> Evidence
    Relations --> Perception
    Evidence --> Discovery
    Perception --> Discovery
    Evidence --> Distribution
    Discovery --> Distribution
    Distribution --> Specs
    Specs --> Generation
    Generation --> Validation
    Truth --> Validation
    Discovery --> Validation
    Validation -->|issues| Repair
    Repair --> Validation
    Validation -->|passed| Render
    Render --> Package
```

## Primary graphs

CER defines six primary graph models:

1. Truth Graph
2. Timeline Graph
3. Relationship Graph
4. Evidence Graph
5. Perception Graph
6. Discovery Graph

## Architectural rule

A generated case SHALL be derived from a hidden truth model.

Documents SHALL be generated from evidence and distribution specifications, not from freeform story prose.

## Implementation relationship

Technologies such as LangGraph, OpenAI, SQLite, DOCX renderers, or Obsidian are implementation choices.

They are not part of the core domain model unless explicitly specified in implementation notes.
