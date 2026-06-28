---
id: CER-0505
title: Chain of Custody
status: draft
version: 0.1
tags:
  - document-types
  - police
  - chain-of-custody
  - evidence
---

# Chain of Custody

A Chain of Custody record documents who handled an evidence item, when they handled it, where it was stored, and how it moved through the investigation.

## Purpose

Chain of Custody records support reasoning about access, contamination, substitution, missing evidence, procedural gaps, and hidden opportunity.

They are especially useful when the mystery depends on an object changing hands.

## When to use

Use a Chain of Custody record when the case depends on:

- who could access an object
- whether an item was substituted
- missing or delayed evidence transfer
- procedural negligence
- contamination risk
- evidence tampering
- institutional cover-up or incompetence

## Typical investigative roles

| Role | Suitability |
|---|---|
| Corroborator | Very high |
| Contradiction source | High |
| Core clue | Medium |
| Red herring | Medium |
| Eliminator | Medium |
| Procedure | Very high |

## Typical evidence exposure

A Chain of Custody record may expose:

- handler identity
- transfer time
- storage location
- temporary custody
- unexplained custody gap
- unexpected signature
- delayed registration
- item condition change
- storage mismatch

## Realism constraints

The record SHOULD be structured and terse.

It SHOULD NOT explain why a custody gap matters.

It SHOULD use evidence item IDs that match the Evidence Log and Object Model.

## Required metadata

A specification SHOULD include:

- evidence item ID
- transfer events
- handlers
- timestamps
- storage locations
- signatures or initials
- seal status
- linked object ID

## Rendering guidance

Chain of custody records are usually rendered as forms or tables.

They MAY include:

- item header
- transfer rows
- signatures
- seal numbers
- barcode labels
- storage codes
- handwritten initials

## Validation checks

- Are transfers consistent with the Timeline Graph?
- Are handlers valid actors?
- Are custody gaps intentional?
- Does the record align with the Evidence Log?
- Does it imply access without stating the solution?

## Related

- CER-0205
- CER-0309
- CER-0504
- RULE-0007
