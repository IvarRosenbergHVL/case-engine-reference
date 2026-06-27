---
id: CER-0502
title: Crime Scene Report
status: draft
version: 0.1
tags:
  - document-types
  - police
  - crime-scene
---

# Crime Scene Report

A Crime Scene Report documents observations, actions, and findings from a scene examination.

## Purpose

The crime scene report gives players structured information about location, object placement, visible traces, environmental conditions, and scene handling.

It is often a high-value document but should not solve the case alone.

## When to use

Use a Crime Scene Report when the case depends on:

- spatial reasoning
- object placement
- access routes
- physical traces
- environmental conditions
- scene integrity
- missing or moved items

## Typical investigative roles

| Role | Suitability |
|---|---|
| Core clue | High |
| Corroborator | High |
| Contradiction source | Medium |
| Red herring | Medium |
| Anchor | Medium |
| Atmosphere | High |

## Typical evidence exposure

A Crime Scene Report may expose:

- location state
- entry or exit points
- object positions
- signs of disturbance
- biological or chemical traces
- weather or lighting conditions
- scene contamination risks
- collected evidence references

## Realism constraints

The report SHOULD describe observations, not final conclusions.

It SHOULD separate observed facts from investigator interpretations.

It SHOULD reference evidence IDs or collected items when relevant.

## Required metadata

A specification SHOULD include:

- scene ID
- case ID
- examining officer or technician
- date and time of examination
- location
- scene status
- weather or environmental conditions if relevant
- evidence items collected
- linked photographs or sketches

## Rendering guidance

Crime scene reports MAY include:

- formal header
- scene overview
- observation sections
- itemized evidence list
- embedded thumbnails or references to photos
- floor plan or sketch reference
- technician signature

## Validation checks

- Are observations separated from conclusions?
- Are evidence item references consistent with the Evidence Graph?
- Does the report leak later forensic conclusions?
- Are object locations and timelines consistent?
- Does it overload the player with decisive information?

## Related

- CER-0204
- CER-0302
- CER-0404
- CER-0500
