---
id: CER-1004
title: Visual Clue Preservation
status: draft
version: 0.1
tags:
  - rendering
  - visual-clues
  - evidence
---

# Visual Clue Preservation

Visual Clue Preservation ensures that evidence carried by images, layout, marks, maps, diagrams, screenshots, or formatting remains usable after rendering.

## Purpose

A case can fail if a visual clue exists in the specification but is lost in the rendered artifact.

Rendering must preserve the intended noticeability, legibility, and meaning of visual evidence.

## Definition

A Visual Clue is a player-facing visual information unit that supports observation, interpretation, hypothesis formation, elimination, corroboration, or solution reasoning.

Visual Clue Preservation is the protection of that information through rendering and packaging.

## Visual clue types

Visual clues MAY include:

- visible object details
- timestamps
- handwritten marks
- signatures
- map positions
- room layout
- damage patterns
- labels
- table alignment
- photo background details
- screenshot metadata
- file names
- visual absence or omission

## Preservation risks

Visual clues may be damaged by:

- cropping
- scaling
- compression
- low resolution
- poor contrast
- page breaks
- table wrapping
- template overlays
- decorative aging effects
- export format conversion

## Normative requirements

A visual clue SHOULD be identified before rendering.

A rendered output MUST preserve visual clues at the intended visibility level.

A renderer SHOULD NOT apply aging, blur, compression, or texture effects that make required visual details unreadable unless that is the intended design.

Visual clue preservation SHOULD be checked after final export.

## Validation questions

- What visual detail carries evidence?
- Is the detail visible in the final output?
- Does the detail have the intended visibility level?
- Did template or export processing alter meaning?
- Can players inspect the clue without outside tools?

## Related

- CER-1001
- CER-1003
- CER-0704
- CER-0312
