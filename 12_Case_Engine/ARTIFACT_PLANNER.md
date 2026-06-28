---
id: CER-1208
title: Artifact Planner
status: draft
version: 0.1
tags:
  - case-engine
  - artifact-planner
  - component
---

# Artifact Planner

The Artifact Planner converts document, visual, and package needs into Artifact Production Specifications.

## Purpose

Documents are not the only produced materials in a case package.

A playable archive may require images, scans, forms, maps, diagrams, labels, logos, screenshots, envelopes, hint cards, packaging files, and facilitator assets.

The Artifact Planner turns these needs into clear work orders that can be fulfilled by humans, AI tools, renderers, or hybrid workflows.

## Responsibility

The Artifact Planner is responsible for defining what artifacts must be produced and how each artifact will be evaluated.

It SHOULD produce Artifact Production Specifications, capability requirements, producer recommendations, and quality gate requirements.

## Inputs

The Artifact Planner MAY receive:

- document specifications
- evidence exposure requirements
- discovery graph
- case style guide
- visual continuity requirements
- rendering requirements
- package requirements
- spoiler classification
- production constraints

## Outputs

The Artifact Planner SHOULD produce:

- artifact production specifications
- artifact capability profiles
- producer selection recommendations
- required quality gates
- visual continuity requirements
- prompt derivation inputs where AI is used
- review assignments
- lock and approval requirements

## Artifact planning decisions

For each artifact, the planner SHOULD define:

- artifact type
- purpose
- required facts
- required evidence exposures
- forbidden content
- source document or model links
- required capabilities
- style and continuity requirements
- production recommendations
- quality gates
- acceptance criteria

## Artifact sets

Some artifacts SHOULD be planned as sets rather than isolated items.

Examples include:

- documents sharing a letterhead
- photos from the same scene
- related screenshots
- map and legend
- package cover and insert
- logo, stamp, and header assets

Artifact sets SHOULD share continuity rules.

## Must not

The Artifact Planner SHOULD NOT ask producers to invent case facts.

The Artifact Planner SHOULD NOT hide required evidence only in vague production instructions.

The Artifact Planner SHOULD NOT treat prompts as the primary specification.

## Human control

A human reviewer SHOULD be able to inspect production specifications before expensive or high-risk artifacts are created.

High-sensitivity artifacts SHOULD require explicit approval before locking.

## Normative requirements

Evidence-bearing artifacts SHOULD have explicit production specifications.

Artifact Production Specifications SHOULD distinguish requirements from recommendations.

Visual and textual continuity SHOULD be planned before bulk production.

Producer selection SHOULD be based on required capabilities.

## Validation questions

- Does every planned artifact have a clear purpose?
- Are required and forbidden elements explicit?
- Are capability requirements identified?
- Does the artifact follow the case style guide?
- Can a human or AI producer fulfill the specification without inventing facts?

## Implements

- CER-1100
- CER-1101
- CER-1104
- CER-1105
- CER-1107
- CER-1108
- CER-1109
- CER-1110

## Related

- CER-1207
- CER-1209
- CER-1210
