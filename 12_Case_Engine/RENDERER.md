---
id: CER-1210
title: Renderer
status: draft
version: 0.1
tags:
  - case-engine
  - renderer
  - component
---

# Renderer

The Renderer converts approved content and assets into package-ready files.

## Purpose

Rendering is where specifications, drafts, templates, and assets become files players can read, print, inspect, or use.

The Renderer must preserve evidence, layout meaning, visual continuity, and spoiler separation.

## Responsibility

The Renderer is responsible for applying templates, assembling assets, producing output formats, and preserving artifact intent.

It SHOULD render approved artifacts without changing case facts or evidence meaning.

## Inputs

The Renderer MAY receive:

- approved textual artifacts
- approved visual assets
- document specifications
- artifact production specifications
- templates
- case style guide
- rendering requirements
- package grouping rules
- spoiler classification
- export format requirements

## Outputs

The Renderer SHOULD produce:

- printable documents
- image assets
- package files
- rendered previews
- render logs
- missing asset warnings
- visual clue preservation checks
- print readiness findings

## Rendering responsibilities

The Renderer SHOULD handle:

- templates
- page layout
- typography
- headers and footers
- metadata presentation
- image placement
- table layout
- file naming
- export formats
- package grouping

## Must not

The Renderer SHOULD NOT rewrite facts.

The Renderer SHOULD NOT introduce new clues through layout, file naming, metadata, thumbnails, or hidden content.

The Renderer SHOULD NOT alter locked artifacts without explicit approval.

The Renderer SHOULD NOT reduce evidence legibility below required thresholds.

## Human control

Rendered output SHOULD be reviewable before export.

A human reviewer SHOULD be able to compare rendered output with approved content and production specifications.

## Normative requirements

Rendering SHOULD preserve required evidence exposures.

Rendering SHOULD preserve spoiler separation.

Rendered artifacts SHOULD pass print readiness checks where relevant.

Rendering output SHOULD be traceable to approved inputs.

## Validation questions

- Does rendered output match approved content?
- Are visual clues still visible?
- Are file names and metadata spoiler-safe?
- Are pages printable?
- Are assets included and correctly placed?
- Did rendering change meaning?

## Implements

- CER-1000
- CER-1001
- CER-1002
- CER-1003
- CER-1004
- CER-1005

## Related

- CER-1208
- CER-1209
- CER-1211
- CER-1213
