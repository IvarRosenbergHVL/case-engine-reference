---
id: CER-0512
title: Laboratory Analysis Report
status: draft
version: 0.1
tags:
  - document-types
  - forensics
  - laboratory-analysis
---

# Laboratory Analysis Report

A Laboratory Analysis Report documents technical examination of a sample, material, device, residue, fluid, or object.

## Purpose

Laboratory analysis provides controlled, technical evidence that can support method, means, object identity, contamination, or source linkage.

It is a flexible document type for cases where a specialized test matters but does not fit toxicology, DNA, or fingerprints.

## When to use

Use a Laboratory Analysis Report when the case depends on:

- chemical residue
- unknown substance identification
- tool or material comparison
- environmental samples
- product or batch identification
- device or mechanism testing
- confirmatory analysis

## Typical investigative roles

| Role | Suitability |
|---|---|
| Core clue | Medium |
| Corroborator | High |
| Context-dependent clue | High |
| Contradiction source | Medium |
| Eliminator | Medium |
| Late confirmation | Medium |

## Typical evidence exposure

A Laboratory Analysis Report may expose:

- sample identity
- detected compound
- material match
- exclusion
- method used
- detection limits
- abnormal result
- batch or source indicator
- uncertainty
- recommended follow-up

## Realism constraints

The report SHOULD be technical but not omniscient.

It SHOULD explain test result boundaries.

If interpretation requires specialist knowledge, that knowledge SHOULD be embedded elsewhere in the archive.

## Required metadata

A specification SHOULD include:

- lab report ID
- sample IDs
- requested analysis
- analyst or lab
- analysis date
- method
- result
- limitation statement
- linked evidence item ID

## Rendering guidance

Laboratory reports MAY include:

- lab header
- requested analysis section
- sample table
- result table
- method notes
- conclusion section
- analyst signature

## Validation checks

- Are sample IDs consistent across documents?
- Does the report overstate certainty?
- Are technical terms supported by context if required?
- Are results consistent with the method and timeline?
- Does it preserve source realism?

## Related

- CER-0307
- CER-0404
- CER-0508
- CER-0511
