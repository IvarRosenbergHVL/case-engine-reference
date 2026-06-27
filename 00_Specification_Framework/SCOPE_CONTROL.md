---
id: CER-0010
title: Scope Control
status: draft
version: 0.1
tags:
  - scope
  - governance
  - v1
---

# Scope Control

CER must be complete enough to implement, but bounded enough to finish.

## Purpose

This document defines how CER prevents specification creep.

## Core principle

CER v1.0 Core SHALL include only what is required to implement a complete paper-based cold case generation engine.

Ideas that are interesting, advanced, commercial, experimental, or implementation-specific SHOULD be moved to `extensions/`, `reference/rfcs/`, or implementation repositories.

## Core inclusion test

A concept belongs in CER v1.0 Core if the answer is yes to all of the following:

1. Is it needed for a complete paper-based cold case generator?
2. Does it affect solvability, consistency, evidence, discovery, rendering, or validation?
3. Can it be specified in an implementation-independent way?
4. Can it be validated or tested?
5. Would leaving it out make v1.0 incomplete?

If the answer is no to any of these, the concept SHOULD be treated as an extension candidate.

## Extension candidate test

A concept belongs in extensions if it:

- depends on a specific product strategy
- requires live facilitation infrastructure
- requires media beyond printable documents and static assets
- is useful only for some implementations
- would delay v1.0 without improving the core engine
- is speculative or not yet validated through design experience

## Release discipline

The project SHOULD prefer a finished v1.0 with clear extension points over an unfinished specification with endless scope.

## Backlog handling

New ideas SHOULD be captured, but not automatically added to core.

Use:

- `extensions/` for optional modules
- `reference/rfcs/` for unresolved proposals
- `adr/` for accepted architectural decisions
- `ROADMAP.md` for milestone scope

## Normative rule

Core documents MUST NOT introduce new mandatory subsystems unless they are listed in the v1.0 core roadmap or accepted through RFC.

## Related

- ROADMAP.md
- extensions/README.md
- CER-0008
- CER-0007
