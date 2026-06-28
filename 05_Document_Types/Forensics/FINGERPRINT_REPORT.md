---
id: CER-0510
title: Fingerprint Report
status: draft
version: 0.1
tags:
  - document-types
  - forensics
  - fingerprints
---

# Fingerprint Report

A Fingerprint Report documents the recovery, comparison, match, exclusion, or inconclusive analysis of latent or visible fingerprints.

## Purpose

Fingerprint evidence supports reasoning about contact, presence, access, object handling, exclusion, contamination, and staging.

Like DNA, fingerprints can identify contact but do not automatically prove when or why contact occurred.

## When to use

Use a Fingerprint Report when the case depends on:

- object handling
- access to a location
- presence at a scene
- exclusion of a suspect
- staged evidence
- old evidence reanalysis
- contamination or innocent contact

## Typical investigative roles

| Role | Suitability |
|---|---|
| Corroborator | High |
| Core clue | Medium |
| Eliminator | High |
| Red herring | Medium |
| Contradiction source | Medium |
| Late confirmation | Medium |

## Typical evidence exposure

A Fingerprint Report may expose:

- match
- exclusion
- partial print
- smudged or degraded print
- print location
- substrate or object
- collection method
- inconclusive comparison
- contamination risk
- absence of expected prints

## Realism constraints

The report SHOULD distinguish between contact evidence and action evidence.

It SHOULD NOT imply exact timing unless supported by other evidence.

Partial or low-quality prints SHOULD be represented as limited rather than definitive.

## Required metadata

A specification SHOULD include:

- report ID
- evidence item IDs
- print location
- collection method
- comparison subjects
- analyst
- analysis date
- result category
- limitation statement

## Rendering guidance

Fingerprint reports MAY include:

- lab header
- evidence item table
- comparison result table
- image references
- limitation notes
- analyst signature

## Validation checks

- Are evidence IDs consistent with the Evidence Log?
- Does the report overstate what fingerprints prove?
- Are partial and inconclusive results clearly represented?
- Is absence of prints used carefully?
- Does the report support reasoning rather than replacing it?

## Related

- CER-0308
- CER-0404
- CER-0504
- CER-0509
