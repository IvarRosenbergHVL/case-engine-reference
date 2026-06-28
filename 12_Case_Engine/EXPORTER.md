---
id: CER-1213
title: Exporter
status: draft
version: 0.1
tags:
  - case-engine
  - exporter
  - component
---

# Exporter

The Exporter assembles approved and rendered materials into release packages.

## Purpose

A case is not ready until the correct files are grouped, named, documented, separated, and packaged for the intended audience.

The Exporter ensures that player material, facilitator material, hint material, manifests, and internal files are handled correctly.

## Responsibility

The Exporter produces complete release packages from approved inputs.

It SHOULD preserve package structure, file integrity, audience grouping, and release metadata.

## Inputs

The Exporter MAY receive:

- approved rendered artifacts
- package plan
- audience classification
- release decision
- package manifest data
- print instructions
- facilitator material
- hint material
- player material
- license or attribution notes

## Outputs

The Exporter SHOULD produce:

- player package
- facilitator package
- hint package where relevant
- package manifest
- print guide
- release metadata
- checksum or integrity data where useful
- export log

## Package groups

A release MAY contain:

| Package group | Purpose |
|---|---|
| player | Material players may inspect during play. |
| facilitator | Moderation and answer material. |
| hints | Optional hint structure or hint cards. |
| production | Internal files not meant for release. |
| archive | Versioned source or audit material. |

## Export responsibilities

The Exporter SHOULD check:

- required files are present
- files are in correct package groups
- filenames are audience-safe
- metadata is safe
- print instructions are included
- package manifest matches contents
- facilitator files are separated from player files
- release version is recorded

## Boundaries

The Exporter SHOULD NOT include internal planning files in the player package.

The Exporter SHOULD NOT disclose answer-only information through filenames, folders, metadata, thumbnails, or manifests.

The Exporter SHOULD NOT export unapproved artifacts as release-ready material.

## Human control

A human reviewer SHOULD be able to inspect the final export before publication.

The release decision SHOULD be recorded.

## Normative requirements

Release packages SHOULD contain only approved material.

Audience separation SHOULD be preserved during export.

A package manifest SHOULD describe package contents.

Export output SHOULD be reproducible from approved inputs where possible.

## Validation questions

- Are all required files included?
- Are player and facilitator files separated?
- Are filenames and metadata safe?
- Does the manifest match the package?
- Is this the approved release version?

## Implements

- CER-0411
- CER-1000
- CER-1005
- CER-1103
- CER-1202

## Related

- CER-1210
- CER-1211
- CER-1212
