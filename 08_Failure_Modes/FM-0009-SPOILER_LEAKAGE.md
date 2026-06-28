---
id: FM-0009
title: Spoiler Leakage
status: draft
version: 0.1
tags:
  - failure-mode
  - spoilers
  - release
  - v1
---

# FM-0009 — Spoiler Leakage

## Description

Spoiler Leakage occurs when answer-only, facilitator-only, hint-only, or production-only information becomes visible to players before it is intended.

This may happen outside the main document content.

## Player impact

Players may learn the solution, a decisive fact, or a hidden relationship without performing the intended investigation.

The case loses fairness and replay value.

## Detection signals

- player package includes facilitator or production files
- filenames reveal answer-only information
- folder names reveal solution structure
- PDF or image metadata includes unsafe notes
- thumbnails show hidden material
- package manifest exposes answer-only terms
- QR codes or links lead to the wrong audience material
- hint files reveal too much too early

## Common causes

- export packaging performed manually without checklist
- source and release files stored together
- metadata not reviewed
- audience classification missing
- internal names reused in player-facing files
- package manifest generated without audience filtering

## Repair strategies

- assign audience classification to every file
- separate player, hint, facilitator, production, and archive groups
- rename files with audience-safe names
- remove unsafe metadata
- regenerate package manifest for the target audience
- review links, QR codes, previews, and thumbnails
- rerun release package validation

## Severity

Critical when it exposes final answer material or decisive hidden facts.

A player package SHOULD NOT be released with unresolved spoiler leakage.

## Related

- CER-0411
- CER-1007
- CER-1008
- CER-1213
