---
id: FM-0002
title: Hidden Critical Clue
status: draft
version: 0.1
tags:
  - failure-modes
  - evidence
  - visibility
---

# FM-0002 — Hidden Critical Clue

## Description

A clue required for the intended solution is too difficult to notice for the declared difficulty and has insufficient redundant support.

## Player impact

Players may fail to solve the case even if they reason well.

The solution may feel unfair because it depends on a detail many groups are likely to miss.

## Detection signals

A validator or reviewer may detect this when:

- a critical evidence exposure has low visibility
- a solution-locking discovery node depends on one subtle detail
- no redundant exposure supports the same critical fact
- the clue is buried in high noise or excessive density
- rendering makes the clue hard to read or inspect

## Common causes

- low visibility assigned to critical clue
- overuse of noise as hiding mechanism
- lack of redundancy
- poor rendering or image quality
- excessive clue density
- critical fact appears only once

## Repair strategies

Possible repairs include:

- add an independent redundant exposure
- increase visibility of the clue
- reduce surrounding noise
- move the clue to a more suitable document
- add context or corroboration
- improve rendering legibility

## Severity

Usually Major.

Critical if the hidden clue is required for final solution and has no alternative path.

## Related

- CER-0305
- CER-0306
- CER-0704
- CER-0706
