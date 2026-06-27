---
id: CER-0504
title: Evidence Log
status: draft
version: 0.1
tags:
  - document-types
  - police
  - evidence-log
---

# Evidence Log

An Evidence Log records collected items, identifiers, collection times, locations, handlers, and storage status.

## Purpose

Evidence logs create structure around physical objects and help players reason about custody, access, missing items, contamination, and procedural gaps.

## When to use

Use an Evidence Log when the case depends on:

- object custody
- missing or substituted items
- collection timing
- evidence handling
- chain of custody
- procedural irregularities
- links between scene, object, and actor

## Typical investigative roles

| Role | Suitability |
|---|---|
| Corroborator | High |
| Core clue | Medium |
| Contradiction source | High |
| Eliminator | Medium |
| Red herring | Medium |
| Procedure | Very high |

## Typical evidence exposure

An Evidence Log may expose:

- item ID
- item description
- collection location
- collector
- collection time
- storage location
- missing entry
- duplicate or inconsistent item reference
- unexpected handler
- object state

## Realism constraints

The log SHOULD be terse and structured.

It SHOULD NOT explain the narrative significance of the item.

It SHOULD use stable evidence IDs that match other case references.

## Required metadata

A specification SHOULD include:

- case ID
- evidence item IDs
- collection dates and times
- collector identities
- collection locations
- storage status
- linked object IDs
- chain of custody references

## Rendering guidance

Evidence logs are usually tables or forms.

They MAY include:

- case header
- item rows
- initials
- barcodes or labels
- storage cabinet numbers
- transfer notes

## Validation checks

- Do evidence IDs match the Evidence Graph?
- Are collection times consistent with the Timeline Graph?
- Are object descriptions stable across documents?
- Are custody gaps intentional?
- Does the log avoid explaining the solution directly?

## Related

- CER-0205
- CER-0301
- CER-0309
- CER-0404
