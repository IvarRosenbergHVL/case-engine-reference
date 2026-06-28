---
id: CER-1007
title: Spoiler Separation
status: draft
version: 0.1
tags:
  - rendering
  - spoiler-separation
  - release
  - v1
---

# Spoiler Separation

Spoiler Separation defines how rendered files and packages keep player-facing material separate from answer, hint, facilitator, and production material.

## Purpose

A release package can fail even when the documents are good if answer-only information leaks through folder names, filenames, metadata, previews, manifests, or accidental file inclusion.

Spoiler Separation protects the play experience.

## Audience groups

| Group | Description |
|---|---|
| player | Material players may inspect during normal play. |
| hints | Optional hints or staged support material. |
| facilitator | Answer, reveal, moderation, scoring, and solution material. |
| production | Internal material used to build or validate the case. |
| archive | Versioned source and audit material not intended for players. |

## Leakage channels

Spoiler leakage may occur through:

- document content
- file names
- folder names
- PDF metadata
- image metadata
- thumbnails
- manifests
- QR codes
- comments or hidden layers
- unused source files
- package ordering

## Separation rules

Player packages SHOULD contain only player-approved material.

Facilitator and answer material SHOULD be stored in clearly separated package groups.

Production files SHOULD NOT be included in player packages.

Files SHOULD have audience-safe names.

Metadata SHOULD be reviewed before export.

## Hint material

Hint material MAY be included as a separate package group.

Hints SHOULD avoid revealing the final answer unless the hint design explicitly allows staged reveal.

Hint ordering and access model SHOULD be documented.

## Normative requirements

Spoiler classification SHOULD be assigned before export.

Rendered files SHOULD preserve spoiler classification.

Exported player packages SHOULD be checked for unintended answer-only information.

Package manifests SHOULD not disclose answer-only information to the player audience.

## Validation questions

- Is this file safe for the intended audience?
- Do filenames or folders reveal answer-only information?
- Does metadata reveal production or solution information?
- Are facilitator files separated from player files?
- Is the package manifest audience-safe?

## Related

- CER-0411
- CER-1006
- CER-1213
- CER-0900
