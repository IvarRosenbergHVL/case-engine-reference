---
id: CER-0411
title: Document Rendering
status: draft
version: 0.1
tags:
  - document-system
  - rendering
  - export
---

# Document Rendering

Document Rendering defines how document specifications and drafts become final printable or digital artifacts.

## Purpose

Rendering affects player perception.

A document's layout, typography, logo, page structure, image handling, and visual age can make an artifact feel official, personal, technical, old, damaged, formal, or informal.

Rendering must preserve evidence meaning.

## Definition

Document Rendering is the transformation of validated document content and rendering metadata into final output files.

Outputs may include:

- DOCX
- PDF
- PNG or JPG evidence images
- Markdown previews
- HTML previews
- print manifests

## Rendering inputs

A renderer SHOULD receive:

- document content
- document metadata
- render template
- style profile
- evidence asset references
- visibility classification
- output filename
- page constraints
- localization settings

## Rendering responsibilities

A renderer SHOULD:

- apply the correct template
- preserve text content and evidence details
- insert required images or assets
- apply document-specific layout
- generate stable output filenames
- preserve metadata where appropriate
- avoid changing case logic

## Rendering risks

Rendering can accidentally break the case by:

- cropping a visual clue
- hiding a timestamp
- changing table alignment
- altering document order
- making a clue too visually prominent
- omitting an attachment
- mixing player and facilitator files

## Normative requirements

Rendering SHOULD NOT change evidence meaning.

Visual evidence MUST remain legible enough for its intended role.

Rendered documents SHOULD preserve spoiler boundaries.

A rendered output SHOULD be traceable to its document specification.

## Validation questions

- Is every visual clue visible?
- Did the renderer omit any required attachment?
- Does the final layout match document type?
- Does rendering make a clue too obvious or too hidden?
- Does the output file belong in the correct package group?

## Related

- CER-0406
- CER-0409
- CER-0410
