---
id: CER-1103
title: Production Workflow
status: draft
version: 0.1
tags:
  - artifact-production
  - workflow
  - human-control
---

# Production Workflow

The Production Workflow defines the lifecycle of an artifact from planned requirement to approved release asset.

## Purpose

A case package contains many artifacts created through different methods.

The workflow ensures that every artifact is specified, produced, checked, reviewed, approved, and locked before release use.

## Core principle

Production method is flexible.

Production requirements are not.

A human, AI tool, renderer, designer, photographer, or writer may create the artifact, but the artifact must satisfy its production specification.

## Workflow stages

```text
Planned
→ Artifact Production Specification
→ Production
→ Quality Check
→ Human Review
→ Revision or Approval
→ Locked Artifact
→ Release Package
```

## Status model

| Status | Description |
|---|---|
| planned | Need identified; no production specification yet. |
| specified | Artifact Production Specification exists. |
| in_production | Artifact is being created. |
| draft | Artifact exists but has not passed quality gates. |
| quality_checked | Required quality gates have been evaluated. |
| human_review | Artifact awaits human decision. |
| needs_revision | Artifact must be revised, regenerated, or replaced. |
| approved | Artifact satisfies requirements and may be used. |
| locked | Approved artifact is protected from accidental change. |
| replaced | Artifact has been superseded by another artifact. |
| rejected | Artifact is not suitable for use. |

## Workflow responsibilities

The workflow SHOULD track:

- who or what produced the artifact
- which specification was used
- which version was reviewed
- which quality gates passed or failed
- human reviewer decision
- revision history
- lock status
- dependent artifacts or documents

## Revision loop

Artifacts MAY go through multiple revision cycles.

A revision SHOULD preserve the original production specification unless the specification itself is intentionally changed.

If the specification changes, downstream validation SHOULD be repeated.

## Locked artifacts

A locked artifact SHOULD NOT be modified by later production or rendering steps without explicit approval.

If a locked artifact changes, the change reason SHOULD be recorded and dependent outputs SHOULD be revalidated.

## Normative requirements

Every release artifact SHOULD have a traceable workflow state.

An artifact SHOULD NOT become release-ready without human approval.

An artifact SHOULD NOT be locked unless required quality gates have passed or been waived.

Workflow history SHOULD be preserved for audit.

## Validation questions

- Does this artifact have a production specification?
- Has it passed required quality gates?
- Who approved it?
- Is the approved version the one included in the release package?
- Did any locked artifact change after approval?

## Related

- CER-1101
- CER-1102
- CER-1104
- CER-0911
