---
id: CER-0106
title: Homicide Investigation Scope
status: draft
version: 0.1
tags:
  - foundations
  - scope
  - homicide
  - murder-mystery
---

# Homicide Investigation Scope

CER v1.0 is scoped to document-based homicide investigation games.

## Purpose

CER focuses on games where players reconstruct the events surrounding a suspicious death or homicide by examining a case archive.

The specification is not limited to AI generation. A human designer may use CER manually to design, validate, write, render, and package a case.

AI is an implementation tool, not the definition of the product.

## Scope statement

CER v1.0 defines a reference model for:

```text
Document-based collaborative homicide investigation games.
```

In these games, players act as investigators and use documentary evidence to answer questions such as:

- what happened
- who was involved
- how the death occurred
- when key events occurred
- why actors behaved as they did
- which claims are false, incomplete, or misleading
- which explanation best fits the archive

## In scope

CER v1.0 includes:

- suspicious death and homicide cases
- cold case structures
- documentary evidence archives
- suspect, victim, witness, and investigator models
- means, motive, and opportunity reasoning
- timeline reconstruction
- relationship and perception modeling
- forensic, police, medical, digital, financial, personal, media, and contextual documents
- player-facing case files
- facilitator-only solution material
- validation and repair concepts

## Out of scope for v1.0

CER v1.0 does not primarily target:

- general escape rooms
- fantasy quests
- combat games
- pure role-playing campaigns
- live action murder parties without document reasoning
- non-investigative puzzle books
- unrelated mystery genres without a suspicious death

These formats may reuse concepts from CER, but they are not the primary design target.

## Human and machine implementation

CER should be implementable by:

- a human case designer
- a writing team
- a rules-based generator
- an AI-assisted workflow
- a multi-agent case engine

The specification describes the case structure, not the implementation technology.

## Normative position

CER SHALL define what a valid case package is.

CER SHALL NOT require AI.

CER MAY be implemented by AI-assisted systems.

A compliant case SHOULD be understandable and auditable without inspecting model prompts.

## Related

- CER-0101
- CER-0102
- ADR-0004
- RULE-0012
