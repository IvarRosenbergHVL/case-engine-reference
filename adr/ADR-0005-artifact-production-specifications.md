---
id: ADR-0005
title: Artifact production is governed by specifications, not prompts
status: accepted
date: 2026-06-28
tags:
  - adr
  - artifact-production
  - human-control
  - ai
---

# ADR-0005 — Artifact production is governed by specifications, not prompts

## Status

Accepted.

## Context

CER case packages may contain many artifacts: documents, photos, maps, logos, scans, screenshots, diagrams, evidence sheets, packaging files, and facilitator material.

Many of these artifacts may be produced with AI tools, but they may also be produced by humans using writing, photography, design, illustration, layout, or editing tools.

CER must therefore define the requirements for the artifact, not the tool used to create it.

## Decision

CER SHALL treat artifact production as specification-driven.

The primary output of planning is an Artifact Production Specification: a requirements document or work order that defines what must be produced, why it is needed, what facts it must preserve, what evidence it must expose, what it must not include, and how it will be accepted.

A prompt may be generated from an Artifact Production Specification, but the prompt is an implementation detail.

## Principle

```text
Facts
→ Artifact Production Specification
→ Human or AI production
→ Quality review
→ Human approval
→ Locked artifact
```

## Consequences

A human designer, writer, photographer, or graphic artist MAY fulfill an Artifact Production Specification manually.

An AI system MAY fulfill an Artifact Production Specification through generated text, image, layout, or asset production.

Both are valid if the resulting artifact satisfies the specification and passes validation.

## Requirements

An Artifact Production Specification SHOULD define:

- artifact type
- purpose
- required facts
- required evidence exposures
- forbidden facts or exposures
- style and realism requirements
- visual or textual continuity requirements
- quality gates
- acceptance criteria
- human review status

## Human control

Human approval is a first-class part of the production pipeline.

An artifact SHOULD NOT become release-ready only because a model generated it.

Human reviewers MAY approve, reject, edit, replace, regenerate, or lock artifacts.

## Related

- RULE-0013
- CER-1000
- CER-0900
- CER-1100
