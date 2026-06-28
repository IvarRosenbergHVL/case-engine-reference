---
id: CER-1105
title: Production Recommendations
status: draft
version: 0.1
tags:
  - artifact-production
  - recommendations
  - prompts
---

# Production Recommendations

Production Recommendations provide optional guidance for producing stronger artifacts while remaining separate from hard requirements.

## Purpose

A requirement must be satisfied.

A recommendation improves the chance of producing a high-quality artifact.

Separating the two keeps specifications clear and prevents stylistic advice from being confused with factual constraints.

## Definition

A Production Recommendation is optional guidance that may help a human or AI producer satisfy the Artifact Production Specification.

## Requirement vs recommendation

| Type | Meaning |
|---|---|
| Requirement | Must be satisfied for approval. |
| Recommendation | Should be considered, but may be adapted. |
| Example | Illustrates intent but should not introduce case content. |
| Avoidance | Describes patterns likely to reduce quality. |

## Recommendation categories

Recommendations MAY cover:

- writing style
- document tone
- visual style
- lighting
- camera angle
- texture
- typography
- layout
- realism
- artifact aging
- file naming
- prompt wording
- model-specific adapters

## Visual recommendations

Visual recommendations may include:

- use restrained documentary style
- avoid cinematic exaggeration
- preserve natural perspective
- maintain realistic lighting
- avoid adding unplanned objects
- preserve required visual details
- follow the case style guide

## Text recommendations

Text recommendations may include:

- write in the voice of the document source
- avoid exposition-heavy phrasing
- separate observations from conclusions
- use consistent terminology
- preserve uncertainty where specified
- avoid introducing new critical facts

## Normative requirements

Production Recommendations SHOULD NOT override requirements.

Recommendations SHOULD be tool-independent when possible.

Model-specific recommendations MAY exist in implementation guidance or adapters.

Recommendations SHOULD NOT include concrete content from specific cases.

## Validation questions

- Is this a requirement or only a recommendation?
- Could the artifact pass without following this recommendation?
- Does the recommendation support the case style guide?
- Is the recommendation tool-independent?
- Does it avoid case-specific example leakage?

## Related

- CER-1101
- CER-1106
- CER-1108
- ADR-0005
