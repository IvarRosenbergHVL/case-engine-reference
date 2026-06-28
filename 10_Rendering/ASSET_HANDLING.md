---
id: CER-1003
title: Asset Handling
status: draft
version: 0.1
tags:
  - rendering
  - assets
---

# Asset Handling

Asset Handling defines how images, logos, maps, scans, stamps, signatures, textures, and other visual assets are referenced, rendered, and validated.

## Purpose

Assets often carry evidence.

A photo, map, scan mark, timestamp, signature, label, or visual detail may be part of the investigation. Asset handling must therefore be traceable and validation-aware.

## Definition

An asset is a non-prose resource used in a rendered artifact.

Assets MAY include:

- photographs
- evidence photos
- maps
- floor plans
- diagrams
- logos
- letterheads
- stamps
- signatures
- handwritten notes
- screenshots
- textures
- icons
- QR codes

## Asset fields

An asset SHOULD define:

| Field | Description |
|---|---|
| asset_id | Stable identifier. |
| asset_type | Photo, map, logo, stamp, screenshot, etc. |
| source | Generated, uploaded, scanned, template, or referenced. |
| visibility | Player, optional hint, facilitator, internal. |
| evidence_role | Whether the asset carries evidence. |
| related_exposures | Evidence exposures represented in the asset. |
| required_detail | Visual details that must remain legible. |
| allowed_transformations | Crop, scale, rotate, age, blur, compress. |
| forbidden_transformations | Changes that would break evidence meaning. |
| file_requirements | Resolution, format, color mode, aspect ratio. |

## Evidence-bearing assets

An evidence-bearing asset is any asset that exposes information required for observation, interpretation, hypothesis formation, elimination, corroboration, or solution reasoning.

Evidence-bearing assets SHOULD have stricter validation than decorative assets.

## Normative requirements

Evidence-bearing assets SHOULD be traceable to evidence exposures.

A renderer MUST NOT crop, obscure, or transform required visual details beyond their intended visibility.

Decorative assets SHOULD NOT introduce unintended clues.

Asset filenames SHOULD be stable and package-safe.

## Validation questions

- Does this asset carry evidence?
- Which visual details must remain visible?
- Are transformations allowed?
- Does the rendered output preserve required details?
- Could a decorative asset accidentally imply false evidence?

## Related

- CER-1001
- CER-1002
- CER-0704
- RULE-0008
