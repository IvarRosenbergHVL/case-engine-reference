---
id: CER-0509
title: DNA Report
status: draft
version: 0.1
tags:
  - document-types
  - forensics
  - dna
---

# DNA Report

A DNA Report documents genetic analysis of biological material and possible matches, exclusions, mixtures, or inconclusive findings.

## Purpose

DNA reports support identity, contact, presence, contamination, relationship, and exclusion reasoning.

They are authoritative but easy to misuse because presence of DNA does not automatically prove action, timing, or guilt.

## When to use

Use a DNA Report when the case depends on:

- biological traces
- identity linkage
- exclusion of a suspect
- hidden relationship
- contamination or transfer
- staged evidence
- object contact
- old evidence reanalysis

## Typical investigative roles

| Role | Suitability |
|---|---|
| Corroborator | High |
| Core clue | Medium |
| Eliminator | High |
| Contradiction source | Medium |
| Red herring | Medium |
| Late confirmation | High |

## Typical evidence exposure

A DNA Report may expose:

- match or exclusion
- mixed profile
- low-template sample
- degraded sample
- kinship indication
- contamination risk
- sample location
- collection date
- confidence or limitation statement

## Realism constraints

The report SHOULD distinguish identity match from event interpretation.

It SHOULD NOT imply when or why DNA was deposited unless supported by other evidence.

Limitations such as mixtures, degradation, and contamination SHOULD be represented when relevant.

## Required metadata

A specification SHOULD include:

- lab report ID
- sample IDs
- comparison profiles
- analyst or lab
- analysis date
- sample source
- result category
- limitation statement
- linked evidence item ID

## Rendering guidance

DNA reports are usually formal lab reports.

They MAY include:

- sample table
- result table
- comparison notes
- limitation statement
- analyst signature
- lab header

## Validation checks

- Are sample IDs consistent with the Evidence Log?
- Does the report overstate what DNA proves?
- Are match, exclusion, and inconclusive results clearly distinguished?
- Are contamination issues intentional if present?
- Does DNA evidence support but not replace reasoning?

## Related

- CER-0308
- CER-0404
- CER-0504
- CER-0505
