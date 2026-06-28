---
id: FM-0003
title: Critical Fact Bottleneck
status: draft
version: 0.1
tags:
  - failure-modes
  - critical-facts
  - redundancy
---

# FM-0003 — Critical Fact Bottleneck

## Description

A critical fact depends on a single evidence exposure, document, inference chain, or context clue.

## Player impact

The case becomes fragile.

If players miss, misread, distrust, or misinterpret that one point, the intended solution may become unreachable.

## Detection signals

A validator or reviewer may detect this when:

- a critical fact has only one supporting exposure
- all support for a critical fact appears in one document
- an inference chain has no alternative path
- a context-dependent clue has only one context source
- a single artifact carries an entire solution step

## Common causes

- insufficient redundancy planning
- document writing before evidence planning
- over-reliance on one dramatic clue
- missing corroboration
- compressed document package
- lack of critical fact map

## Repair strategies

Possible repairs include:

- add another independent evidence exposure
- add corroboration from a different source type
- distribute support across multiple documents
- add a second inference chain
- add contextual support earlier in the archive
- reduce dependence on the bottleneck fact

## Severity

Usually Major.

Critical if the bottleneck fact is solution-locking.

## Related

- CER-0305
- CER-0306
- CER-0308
- RULE-0003
