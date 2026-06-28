---
id: CER-1008
title: Package Manifest
status: draft
version: 0.1
tags:
  - rendering
  - package-manifest
  - export
  - v1
---

# Package Manifest

The Package Manifest describes the contents, audience grouping, version, and release metadata for a case package.

## Purpose

A package manifest makes release output reviewable and reproducible.

It helps confirm that required files are present, approved, correctly grouped, and safe for the intended audience.

## Definition

A Package Manifest is a structured record of files included in a release package.

It may be machine-readable, human-readable, or both.

## Recommended fields

A Package Manifest SHOULD include:

| Field | Description |
|---|---|
| package_id | Stable package identifier. |
| case_id | Case identifier. |
| version | Release version. |
| created_at | Export timestamp or release date. |
| package_group | Player, hints, facilitator, production, or archive. |
| files | Files included in the package. |
| approval_state | Whether files are approved for release. |
| format | File format information. |
| checksums | Optional integrity data. |
| notes | Human-readable release notes. |

## File entries

Each file entry SHOULD include:

- file path
- audience group
- artifact reference
- render reference
- approval status
- format
- optional checksum
- optional print note

## Audience safety

A player-facing manifest SHOULD NOT reveal answer-only information.

Internal manifests MAY contain more detail but SHOULD remain outside player packages.

## Release review

The manifest SHOULD be reviewed before publication.

The reviewer SHOULD be able to confirm that the package contains only intended files.

## Normative requirements

Release packages SHOULD have a package manifest.

The manifest SHOULD match the actual package contents.

The manifest SHOULD identify audience grouping.

The manifest SHOULD not disclose answer-only information to the wrong audience.

## Validation questions

- Does the manifest match the package contents?
- Are all required files listed?
- Are audience groups correct?
- Are unapproved files excluded?
- Is the player-facing manifest safe?

## Related

- CER-1006
- CER-1007
- CER-1213
