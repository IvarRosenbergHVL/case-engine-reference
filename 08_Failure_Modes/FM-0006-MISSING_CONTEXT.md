---
id: FM-0006
title: Missing Context
status: draft
version: 0.1
tags:
  - failure-mode
  - context
  - fairness
  - v1
---

# FM-0006 — Missing Context

## Description

Missing Context occurs when players need domain, procedural, cultural, technical, or local knowledge that is not provided by the case package.

The case may be logically sound for the author but unfair for players.

## Player impact

Players may overlook a valid clue, misread a document, or fail to make a necessary inference because the required background knowledge is absent.

This creates difficulty through missing information rather than investigation reasoning.

## Detection signals

- solution reasoning depends on specialist terminology not explained in case material
- document interpretation requires knowledge outside normal player expectations
- local geography or travel assumptions are not represented
- a technical clue has no embedded explanation or corroborating support
- playtesters ask for the same missing background repeatedly
- players solve only if they already know the domain

## Common causes

- author assumes player knowledge
- realistic documents are included without enough surrounding context
- important terminology appears only once
- evidence is technically correct but narratively unsupported
- location or procedural information is external to the package

## Repair strategies

- add context clues in natural documents
- include explanatory material from an in-world source
- provide redundant support through simpler evidence
- reduce dependency on specialist knowledge
- add glossary-style context only if it fits the product design
- validate core solvability without outside research

## Severity

Medium to high.

Missing context is high severity when it blocks a critical inference.

## Related

- RULE-0004
- CER-0307
- CER-0707
- CER-0603
- CER-0901
