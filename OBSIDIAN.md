---
id: CER-OBSIDIAN
title: Obsidian Vault Guide
status: draft
version: 0.1
tags:
  - obsidian
  - vault
  - release
---

# Obsidian Vault Guide

CER can be opened directly as an Obsidian vault.

## Recommended use

Clone or download the repository and open the repository root folder in Obsidian.

The vault entry point is:

- [[HOME]]

## Source of truth

The GitHub repository remains the source of truth.

The Obsidian vault is a navigation and reading format over the same files.

## Included settings

The repository includes a minimal `.obsidian/` folder with portable settings:

- app settings
- appearance defaults
- core plugin list
- graph defaults
- workspace opening `HOME.md`

These settings SHOULD remain minimal and non-personal.

## Keep out of commits

Do not commit personal Obsidian state such as:

- local plugin state
- cache files
- personal themes
- personal snippets
- device-specific configuration

## Release ZIP

For tagged releases, the repository SHOULD provide an Obsidian ZIP artifact.

The ZIP SHOULD contain the same Markdown source and minimal vault settings, excluding Git internals and build-only files.

## Navigation

Use:

- [[HOME]] for vault navigation
- [[MASTER_OUTLINE]] for structure
- [[ROADMAP]] for V1 status
- [[15_V1_Hardening/RC_CHECKLIST]] for release candidate readiness

## Related

- [[HOME]]
- [[README]]
- [[15_V1_Hardening/RELEASE_CHECKLIST]]
