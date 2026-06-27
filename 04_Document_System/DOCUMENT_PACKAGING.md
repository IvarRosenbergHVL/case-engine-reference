---
id: CER-0410
title: Document Packaging
status: draft
version: 0.1
tags:
  - document-system
  - packaging
  - export
---

# Document Packaging

Document Packaging defines how rendered documents and assets are assembled into a playable case package.

## Purpose

A case is not complete when individual documents are generated.

The package must be organized so that players can use it, print it, and separate player-facing material from facilitator-only material.

## Definition

Document Packaging is the process of organizing rendered documents, assets, metadata, solution material, optional hints, and exports into a coherent case delivery structure.

## Package groups

A package SHOULD distinguish:

| Group | Description |
|---|---|
| Player case file | Materials players may inspect from the start. |
| Optional hints | Materials held back or clearly marked as hints. |
| Facilitator pack | Spoiler material, solution, and explanation. |
| Print guide | Instructions for printing and assembly. |
| Asset folder | Images, maps, logos, textures, and supporting files. |
| Metadata | Machine-readable package manifest. |

## Package manifest

A package SHOULD include a manifest that lists:

- case ID
- version
- language
- generated documents
- visibility of each document
- recommended print settings
- spoiler classification
- required assets
- optional hints
- facilitator-only files

## Spoiler boundaries

Facilitator-only content MUST be separated from player-facing content.

Spoiler files SHOULD use clear naming and warnings.

Optional hints SHOULD be clearly distinguishable from normal documents.

## Normative requirements

A case package SHOULD include a machine-readable manifest.

Player-facing files SHOULD be separated from facilitator-only files.

Files SHOULD use stable, readable names.

The package SHOULD preserve document order only when order is intentional.

## Validation questions

- Are all required documents included?
- Are facilitator-only materials separated?
- Are spoiler warnings clear?
- Are all referenced assets present?
- Is the package printable and usable?

## Related

- CER-0401
- CER-0409
- CER-0411
