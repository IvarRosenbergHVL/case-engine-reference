---
id: CER-1104
title: Quality Gates
status: draft
version: 0.1
tags:
  - artifact-production
  - quality-gates
  - validation
---

# Quality Gates

Quality Gates define the checks an artifact must pass before approval, locking, or release packaging.

## Purpose

Artifacts may look good while still being wrong.

Quality Gates ensure that produced artifacts satisfy facts, evidence needs, visual continuity, spoiler rules, and product quality requirements.

## Definition

A Quality Gate is a required review checkpoint for an artifact.

A gate may be automated, assisted, or human-reviewed.

## Core gates

| Gate | Purpose |
|---|---|
| Specification conformance | Artifact satisfies its production specification. |
| Fact consistency | Artifact preserves required facts and avoids unsupported facts. |
| Evidence exposure coverage | Required evidence exposures are present. |
| Forbidden content check | Forbidden actors, facts, clues, or spoilers are absent. |
| Style conformance | Artifact follows case style guide and artifact type. |
| Visual continuity | Artifact belongs to the same case world as related artifacts. |
| Realism check | Artifact is plausible for its source, type, period, and purpose. |
| Legibility check | Required details are readable or inspectable. |
| Spoiler safety | Player-facing artifacts do not reveal facilitator-only truth. |
| Packaging readiness | Artifact can be included in the correct release group. |

## Artifact-specific gates

Text documents MAY require:

- terminology check
- source knowledge check
- document role check
- language and tone check
- metadata check

Images MAY require:

- required visual detail check
- unintended clue check
- continuity check
- realism check
- resolution and crop check

Layouts MAY require:

- page break check
- table integrity check
- print readiness check
- template conformance check

## Gate outcomes

| Outcome | Description |
|---|---|
| pass | Gate satisfied. |
| warn | Gate has a concern but may pass with review. |
| fail | Gate not satisfied. |
| waiver | Gate failure accepted by explicit waiver. |
| not_applicable | Gate does not apply to this artifact. |

## Normative requirements

Required Quality Gates SHOULD be listed in the Artifact Production Specification.

An artifact SHOULD NOT be approved before required gates pass or are waived.

Quality Gate results SHOULD be preserved in workflow history.

A failed gate SHOULD produce a repair or revision recommendation.

## Validation questions

- Which gates are required for this artifact?
- Which gates passed or failed?
- Are failed gates waived or awaiting revision?
- Does the artifact preserve all required evidence?
- Is it safe for the intended package group?

## Related

- CER-1101
- CER-1103
- CER-0901
- CER-1004
