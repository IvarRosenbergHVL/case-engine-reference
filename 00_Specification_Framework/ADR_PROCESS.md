---
id: CER-0007
title: Architecture Decision Record Process
status: draft
version: 0.1
tags:
  - adr
  - governance
---

# Architecture Decision Record Process

CER uses Architecture Decision Records (ADRs) to document why major decisions are made.

## Purpose

An ADR captures a significant design decision, its context, alternatives, and consequences.

## Location

ADRs are stored in:

```text
adr/
```

## Naming

```text
ADR-0001-short-title.md
ADR-0002-short-title.md
```

## ADR structure

```markdown
# ADR-0001 — Title

## Status
Accepted | Proposed | Superseded | Deprecated

## Context
What problem are we solving?

## Decision
What did we decide?

## Consequences
What follows from this decision?

## Alternatives considered
What else was considered?

## Related
Links to CER documents, rules, patterns, and tests.
```

## When to create an ADR

Create an ADR when a decision:

- affects the conceptual model
- changes terminology
- adds a new primary graph
- changes validation requirements
- changes conformance expectations
- introduces a major pattern family

## Initial ADRs to create

- ADR-0001 — Why Truth Graph is separate
- ADR-0002 — Why documents are views
- ADR-0003 — Why Discovery Graph is first-class
- ADR-0004 — Why validation is part of the core system
