---
id: CER-1109
title: Artifact Capability Profile
status: draft
version: 0.1
tags:
  - artifact-production
  - capabilities
  - producer-selection
---

# Artifact Capability Profile

An Artifact Capability Profile defines the capabilities required to produce a specific artifact or artifact type.

## Purpose

Different artifacts require different skills, tools, controls, and review methods.

A production workflow should select a producer based on required capabilities, not on whether the producer is human or AI.

## Definition

An Artifact Capability Profile is a structured description of the skills, tools, knowledge, and output controls needed to satisfy an Artifact Production Specification.

## Capability categories

| Category | Description |
|---|---|
| Domain knowledge | Subject knowledge required to produce plausible content. |
| Writing capability | Ability to write in the required document form and voice. |
| Visual capability | Ability to produce required visual style or image realism. |
| Layout capability | Ability to structure pages, tables, headers, forms, and metadata. |
| Evidence control | Ability to include required evidence and avoid forbidden content. |
| Continuity control | Ability to follow the Case Style Guide. |
| Rendering control | Ability to produce output in required formats. |
| Revision capability | Ability to respond to review and repair findings. |

## Example capability needs

A forensic report may require:

- formal technical writing
- structured sections and tables
- restrained terminology
- source knowledge constraints
- metadata consistency
- rendering to a formal document template

A visual evidence artifact may require:

- realistic perspective
- controlled object placement
- preservation of required visual details
- avoidance of unintended clues
- consistent lighting, period, and style
- sufficient resolution for inspection

## Producer independence

A producer may be:

- human
- AI model
- renderer
- design tool
- photographer
- illustrator
- hybrid workflow

The producer is acceptable only if it can satisfy the capability profile and pass quality gates.

## Normative requirements

An Artifact Production Specification SHOULD identify required capabilities when production difficulty is non-trivial.

Producer selection SHOULD consider capability fit.

A capability gap SHOULD be treated as a production risk.

Quality Gates SHOULD reflect the capabilities required by the artifact.

## Validation questions

- What capabilities are required to produce this artifact?
- Does the selected producer have those capabilities?
- Which capabilities require human review?
- Are there capability gaps that increase failure risk?
- Do quality gates test the important capabilities?

## Related

- CER-1101
- CER-1104
- CER-1108
- ADR-0005
