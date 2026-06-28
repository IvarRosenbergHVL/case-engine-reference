---
id: CER-1110
title: Producer Selection
status: draft
version: 0.1
tags:
  - artifact-production
  - producer-selection
  - capabilities
---

# Producer Selection

Producer Selection defines how a workflow chooses who or what should produce an artifact.

## Purpose

CER does not assume that AI should produce every artifact.

Some artifacts may be better produced by a human writer, designer, photographer, renderer, AI model, or hybrid workflow.

Producer Selection uses artifact requirements and capability profiles to choose an appropriate production path.

## Definition

Producer Selection is the process of matching an Artifact Production Specification and Artifact Capability Profile to a producer or production workflow.

## Producer types

| Producer | Description |
|---|---|
| Human writer | Produces or edits text manually. |
| Human designer | Produces layout, graphics, branding, or visual polish. |
| Photographer | Produces photographic assets. |
| Illustrator | Produces diagrams, sketches, maps, or visual reconstructions. |
| Renderer | Produces output from structured templates and content. |
| AI text model | Produces or revises textual draft content. |
| AI image model | Produces or revises visual material. |
| Hybrid workflow | Combines human and machine production. |

## Selection factors

Producer Selection SHOULD consider:

- required capabilities
- artifact complexity
- clue sensitivity
- risk of unintended details
- need for visual continuity
- required domain knowledge
- need for human taste or judgment
- production cost and time
- revision support
- validation confidence

## Sensitive artifacts

Some artifacts need stronger human review.

An artifact may be sensitive if it:

- exposes critical evidence
- contains subtle visual clues
- affects final solution reasoning
- can introduce unintended details
- requires specialist terminology
- must match existing visual identity precisely
- is difficult to validate automatically

## Producer recommendation

A workflow MAY recommend a producer but SHOULD NOT treat the recommendation as approval.

The produced artifact still must pass quality gates and human review.

## Normative requirements

Producer Selection SHOULD be based on requirements and capabilities, not tool preference alone.

AI production SHOULD be optional unless a product explicitly requires it.

Human production SHOULD be valid when it satisfies the same specification.

Sensitive artifacts SHOULD not be approved without human review.

## Validation questions

- Why was this producer selected?
- Which capability requirements does the producer satisfy?
- Which risks remain after producer selection?
- Does the producer need additional human review?
- Could another producer satisfy the same specification?

## Related

- CER-1101
- CER-1102
- CER-1104
- CER-1109
