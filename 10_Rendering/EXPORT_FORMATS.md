---
id: CER-1006
title: Export Formats
status: draft
version: 0.1
tags:
  - rendering
  - export
  - v1
---

# Export Formats

Export Formats define the file types a CER package may produce for play, review, printing, and release.

## Purpose

A case package may be rendered into several formats, but format choice must not change evidence meaning, audience grouping, or package safety.

## Primary formats

| Format | Use |
|---|---|
| PDF | Primary print-and-play document format. |
| PNG | Image artifacts, previews, scans, and fixed-layout visuals. |
| JPG | Photographic artifacts where compression is acceptable. |
| Markdown | Internal review, specification drafts, and source notes. |
| JSON | Structured manifests, schemas, graph data, and validation output. |
| ZIP | Release package container. |

## PDF requirements

PDF is the preferred release format for printable player and facilitator material.

PDF output SHOULD preserve:

- page order
- margins
- typography
- image placement
- tables
- evidence-bearing visual details
- audience grouping
- print instructions where relevant

## Image requirements

Image exports SHOULD preserve required visual details.

Evidence-bearing images SHOULD have sufficient resolution for the intended inspection method.

Compression SHOULD NOT remove clues, marks, timestamps, labels, or relevant texture.

## Structured data requirements

JSON exports MAY be used for:

- package manifests
- validation reports
- graph data
- production status
- release metadata

Structured data SHOULD NOT be included in player-facing packages unless explicitly intended.

## Source vs release files

Source files and release files SHOULD be separated.

A source file may contain production information that is not safe for players.

A release file is audience-safe and approved for its package group.

## Normative requirements

Export format choice SHOULD be specified before release packaging.

Exported files SHOULD preserve the approved artifact content.

Format conversion SHOULD NOT introduce new clues, remove required clues, or disclose answer-only information.

Release packages SHOULD identify their exported formats in the package manifest.

## Validation questions

- Is the chosen format appropriate for the artifact?
- Does the export preserve required evidence?
- Does compression affect interpretation?
- Are source files separated from release files?
- Are exported files listed in the manifest?

## Related

- CER-1000
- CER-1005
- CER-1210
- CER-1213
