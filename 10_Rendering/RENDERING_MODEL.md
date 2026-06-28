---
id: CER-1001
title: Rendering Model
status: draft
version: 0.1
tags:
  - rendering
  - rendering-model
---

# Rendering Model

The Rendering Model defines the structured transformation from validated document content to final artifacts.

## Purpose

A rendered document is part of the investigation experience.

Its visual form should support realism and usability without changing the evidence plan.

## Definition

Rendering is the process of applying templates, layout, typography, assets, metadata, and export settings to validated document content.

## Rendering inputs

A renderer SHOULD receive:

| Input | Purpose |
|---|---|
| Document Specification | Source of truth for document intent. |
| Validated Draft | Text or structured content approved for rendering. |
| Render Template | Layout and visual structure. |
| Asset References | Logos, photos, maps, scans, marks, and other visual elements. |
| Visibility Targets | Intended clue visibility levels. |
| Export Settings | Output type, page size, print settings, filenames. |
| Package Group | Player, hint, facilitator, or internal output. |

## Rendering outputs

Rendering MAY produce:

- PDF
- DOCX
- PNG or JPG
- HTML preview
- Markdown preview
- print manifest
- package manifest entries

## Rendering constraints

A renderer SHOULD NOT:

- add new critical facts
- remove required evidence
- change timestamps or names
- alter claim meaning
- merge player and facilitator content
- crop or obscure visual clues
- make low-visibility clues accidentally prominent
- make high-visibility clues accidentally hidden

## Normative requirements

Rendering SHOULD preserve evidence meaning.

Rendering SHOULD preserve intended visibility and explicitness.

Rendering SHOULD preserve spoiler classification.

Rendering SHOULD produce outputs traceable to source document IDs.

## Validation questions

- Does the rendered artifact match the specification?
- Are all required clues present and legible?
- Is visual style appropriate to document type?
- Are spoiler boundaries preserved?
- Is the artifact suitable for print or digital use?

## Related

- CER-1000
- CER-0411
- CER-0704
- CER-0903
