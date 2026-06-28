---
id: CER-1009
title: Rendering Validation
status: draft
version: 0.1
tags:
  - rendering
  - validation
  - v1
---

# Rendering Validation

Rendering Validation checks whether rendered output preserves the approved artifact and is ready for release packaging.

## Purpose

Rendering can introduce errors even when source content is correct.

Layout, export settings, image placement, metadata, file naming, and page breaks can alter how players interpret material.

## Validation scope

Rendering Validation SHOULD check:

- content completeness
- page order
- template conformance
- evidence-bearing detail preservation
- image placement
- table integrity
- file naming
- metadata safety
- package group assignment
- print readiness
- export format suitability

## Input comparison

Rendered output SHOULD be compared against approved inputs.

The check should answer whether rendering changed, removed, obscured, or disclosed information.

## Output states

| State | Meaning |
|---|---|
| pass | Rendered output is acceptable. |
| warning | Review recommended before export. |
| fail | Output must be corrected before release. |
| waived | Human reviewer accepts a known issue. |

## Common rendering faults

Common faults include:

- clipped text
- broken tables
- missing pages
- unreadable marks
- misplaced images
- inconsistent headers
- wrong file group
- unsafe metadata
- excessive compression
- misleading page order

## Normative requirements

Rendered artifacts SHOULD be validated before release export.

Evidence-bearing visual details SHOULD remain inspectable.

Rendered files SHOULD preserve audience separation.

Rendering validation findings SHOULD be traceable to files and source artifacts.

## Validation questions

- Does the rendered file match the approved artifact?
- Are all required details visible?
- Is the file safe for its audience group?
- Is it printable where required?
- Does rendering introduce or remove meaning?

## Related

- CER-1005
- CER-1006
- CER-1007
- CER-1210
