---
id: CER-1502
title: V1 Audit Checklist
status: draft
version: 0.1
tags:
  - v1
  - audit
  - checklist
---

# V1 Audit Checklist

The V1 Audit Checklist defines the review work required before CER 1.0 release candidate.

## Purpose

CER V1 should read like one coherent specification, not a set of disconnected notes.

The audit ensures consistency, safety, and implementability.

## Audit areas

| Area | Goal |
|---|---|
| Scope | Confirm the document belongs in V1. |
| Terminology | Ensure terms are used consistently. |
| Normative language | Ensure MUST, SHOULD, and MAY are used correctly. |
| Cross-references | Check Related and Implements references. |
| Example safety | Remove case-specific or source-inspired examples. |
| Duplication | Remove or merge overlapping content. |
| Implementability | Confirm a human or engine can act on the text. |
| Release safety | Confirm no player-facing or answer-only concepts are mixed. |

## Terminology audit

Check that preferred V1 terms are used consistently:

- artifact
- artifact production specification
- document specification
- case style guide
- human review
- human approval
- locked artifact
- production graph
- validation report
- package manifest
- audience group

Avoid uncontrolled alternates unless clearly defined.

## Normative language audit

Review every use of:

- MUST
- MUST NOT
- SHOULD
- SHOULD NOT
- MAY

MUST should be reserved for release-critical or definition-critical requirements.

SHOULD should be the default normative term for V1 guidance.

MAY should describe optional capability.

## Example safety audit

All examples SHOULD be generic, abstract, and case-independent.

Preferred placeholders:

- Actor A
- Actor B
- Witness C
- Location X
- Object Y
- Evidence Fragment EF-001
- Claim CL-001
- Document DOC-001

Examples SHOULD NOT resemble a specific analyzed, user-provided, commercial, or real case.

## Cross-reference audit

For each document, check:

- frontmatter id exists
- title matches content
- Related references are plausible
- Implements references point to existing CER ids
- no references point to deleted or renamed documents
- V1 numbering is stable enough for release candidate

## Duplication audit

Where two documents overlap, decide whether to:

- keep both with clear boundaries
- merge content
- add cross-reference
- move detail to V1.1
- remove repeated text

## Implementability audit

Each normative document SHOULD answer:

- What is the concept?
- Why does it exist?
- What must an implementation or workflow do?
- How can it be validated or reviewed?
- What related documents matter?

## Release decision

A document passes audit when:

- scope is V1-appropriate
- terminology is consistent
- normative language is clear
- examples are safe
- references are reviewed
- implementation expectations are understandable

## Related

- CER-1500
- CER-1501
- CER-1503
- CER-1504
