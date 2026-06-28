---
id: CER-1002
title: Template Model
status: draft
version: 0.1
tags:
  - rendering
  - templates
---

# Template Model

The Template Model defines reusable visual and structural patterns for rendered artifacts.

## Purpose

Templates make rendering consistent, controllable, and auditable.

A template is not only a visual style. It also constrains layout, metadata placement, evidence visibility, document realism, and spoiler classification.

## Definition

A Render Template is a reusable layout and styling specification for one or more document types.

## Template fields

A Render Template SHOULD define:

| Field | Description |
|---|---|
| template_id | Stable identifier. |
| name | Human-readable template name. |
| supported_document_types | Document types the template may render. |
| page_size | Target page format. |
| orientation | Portrait, landscape, or flexible. |
| sections | Required and optional layout regions. |
| typography | Font roles, sizes, hierarchy, and constraints. |
| asset_slots | Image, logo, stamp, map, or attachment regions. |
| metadata_slots | Where document metadata appears. |
| clue_visibility_constraints | How visibility targets are preserved. |
| accessibility_constraints | Legibility and contrast requirements. |
| export_formats | Supported output formats. |

## Template categories

Templates MAY support categories such as:

- official report
- lab report
- transcript
- personal note
- email export
- message screenshot
- financial statement
- media article
- map or diagram
- photo evidence sheet
- facilitator solution

## Template constraints

A template SHOULD constrain:

- what content regions exist
- which regions may contain critical clues
- how tables wrap
- how images are cropped
- where dates and source metadata appear
- how player-facing and facilitator-only artifacts are visually distinguished

## Normative requirements

A document specification SHOULD reference a render template or template family.

A template SHOULD preserve document realism for its supported document types.

A template MUST NOT merge player-facing and facilitator-only content.

A template SHOULD be validated against representative documents before release use.

## Validation questions

- Does the template support the document type?
- Does it preserve required metadata?
- Can visual clues be placed without cropping or distortion?
- Does the template match the document's in-world source?
- Does it preserve spoiler classification?

## Related

- CER-1001
- CER-0411
- CER-0406
- CER-0704
