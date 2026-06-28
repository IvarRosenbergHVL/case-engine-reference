---
id: CER-0508
title: Toxicology Report
status: draft
version: 0.1
tags:
  - document-types
  - forensics
  - toxicology
---

# Toxicology Report

A Toxicology Report documents analysis of biological samples for drugs, alcohol, poisons, chemicals, metabolites, or other substances.

## Purpose

Toxicology reports support method reasoning, timing, exposure, contamination questions, and interpretation of symptoms or death.

They often require context clues because players may not know what a substance implies.

## When to use

Use a Toxicology Report when the case depends on:

- poisoning
- intoxication
- medication effects
- chemical exposure
- workplace substances
- delayed symptoms
- misleading cause of death
- trace findings requiring interpretation

## Typical investigative roles

| Role | Suitability |
|---|---|
| Core clue | High |
| Context-dependent clue | Very high |
| Corroborator | High |
| Red herring | Medium |
| Contradiction source | Medium |
| Late confirmation | Medium |

## Typical evidence exposure

A Toxicology Report may expose:

- detected substance
- concentration
- negative finding
- trace finding
- sample type
- collection date
- analytical method
- uncertainty or detection limit
- metabolite pattern
- need for confirmatory interpretation

## Realism constraints

The report SHOULD distinguish detection from interpretation.

A detected substance SHOULD NOT automatically imply cause of death unless supported.

Specialized knowledge required to interpret the result SHOULD be embedded elsewhere in the archive.

## Required metadata

A specification SHOULD include:

- lab report ID
- sample IDs
- decedent or subject actor ID
- collection date and time
- analysis date
- lab or analyst
- detected substances
- units
- reference or detection thresholds where relevant
- linked autopsy or medical report

## Rendering guidance

Toxicology reports are usually structured lab reports.

They MAY include:

- sample table
- analyte table
- units and detection limits
- remarks section
- analyst signature
- lab logo
- appendix reference

## Validation checks

- Are results consistent with samples and timeline?
- Is interpretation supported by context clues?
- Does the report overstate what toxicology proves?
- Are units and terminology consistent?
- Does the clue require outside knowledge not provided in the archive?

## Related

- CER-0307
- CER-0404
- CER-0507
- RULE-0004
