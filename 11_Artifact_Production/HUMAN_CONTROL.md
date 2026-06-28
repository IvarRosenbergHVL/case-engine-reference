---
id: CER-1102
title: Human Control
status: draft
version: 0.1
tags:
  - artifact-production
  - human-control
  - approval
---

# Human Control

Human Control defines how human reviewers approve, reject, revise, or lock produced artifacts.

## Purpose

CER supports AI-assisted production, but production quality and release readiness should not depend on autonomous generation alone.

Human reviewers provide judgment, taste, product alignment, and final approval authority.

## Definition

Human Control is the authority of a human reviewer to accept, reject, revise, replace, regenerate, or lock an artifact based on its production specification and quality requirements.

## Production status

An artifact SHOULD have one of these statuses:

| Status | Description |
|---|---|
| planned | Specification exists, production has not started. |
| draft | Artifact exists but has not passed review. |
| quality_checked | Automated or assisted checks completed. |
| human_review | Awaiting human decision. |
| needs_revision | Must be revised or regenerated. |
| approved | Accepted by human reviewer. |
| locked | Approved and protected from further change. |
| rejected | Not suitable for use. |

## Human reviewer actions

A reviewer MAY:

- approve artifact
- reject artifact
- request revision
- edit artifact manually
- ask for regeneration
- change the production specification
- lock artifact
- unlock artifact with reason
- mark artifact as replaced

## Locked artifacts

A locked artifact SHOULD NOT be modified by later production steps without explicit approval.

If a locked artifact must change, the reason SHOULD be recorded and dependent artifacts SHOULD be revalidated.

## Normative requirements

Human approval SHOULD be required before an artifact becomes release-ready.

A production workflow SHOULD preserve reviewer decisions.

A locked artifact SHOULD remain traceable to its production specification.

Automated tools SHOULD NOT silently alter approved or locked artifacts.

## Validation questions

- Has the artifact been reviewed by a human?
- What decision was made?
- Is the artifact approved or locked?
- Did any later process modify it?
- Are review comments preserved?

## Related

- ADR-0005
- CER-1101
- CER-0904
- CER-0911
