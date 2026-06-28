---
id: CER-V1-0
title: CER Version 1.0
status: draft
version: 1.0.0-rc.0
tags:
  - release
  - v1
  - rc
aliases:
  - CER 1.0
  - Case Engine Reference 1.0
---

# CER Version 1.0

CER 1.0 is the first stable version of the Case Engine Reference.

It defines the minimum complete reference specification for designing, producing, validating, rendering, and packaging document-based investigation cases.

## Source of truth

The GitHub repository is the source of truth.

The same Markdown source may be used as:

- a GitHub repository
- an Obsidian vault
- an Obsidian release ZIP
- a static documentation site

## V1 intent

CER 1.0 is intended to be:

- complete enough to implement
- stable enough to reference
- general enough to be case-independent
- practical enough for human, hybrid, or automated workflows
- bounded enough to avoid endless expansion

## V1 includes

CER 1.0 includes:

- specification framework
- foundations
- case architecture
- evidence system
- document system
- representative document types
- discovery system
- information economy
- critical failure modes
- validation system
- rendering and packaging
- artifact production
- case engine reference architecture
- production graphs
- minimal schemas
- compliance model
- V1 hardening guidance
- Obsidian vault support
- static site publishing support

## V1 does not include

CER 1.0 does not attempt to define:

- an exhaustive document type catalog
- a full implementation framework
- a GUI specification
- a model-provider-specific prompt library
- a commercial storefront
- player telemetry
- advanced certification program
- complete sample case package

These belong in V1.1, extensions, companion repositories, or implementation projects.

## Compatibility statement

An implementation may claim CER 1.0 compatibility only by stating:

```text
CER version: 1.0
Compliance level: <level>
Implemented sections: <list>
Known deviations: <list>
```

## Release readiness

CER 1.0 may be tagged after:

- the V1 audit is completed
- known case-specific examples are removed or tracked
- release-blocking inconsistencies are resolved or tracked
- release packaging workflows are verified
- the license decision is recorded

## Related

- [[README]]
- [[ROADMAP]]
- [[CHANGELOG]]
- [[15_V1_Hardening/V1_SCOPE_FREEZE]]
- [[15_V1_Hardening/AUDIT_CHECKLIST]]
- [[15_V1_Hardening/RC_CHECKLIST]]
- [[14_Compliance/README]]
