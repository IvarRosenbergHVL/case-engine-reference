---
id: CER-0313
title: Evidence Validation
status: draft
version: 0.1
tags:
  - evidence-system
  - validation
---

# Evidence Validation

Evidence Validation checks whether the evidence plan supports a fair, solvable, and well-balanced investigation.

## Purpose

A case may have many interesting documents and still fail if the evidence does not support the intended solution.

Evidence Validation checks the structure beneath the documents.

## Validation goals

Evidence Validation SHOULD determine whether:

- critical facts are supported
- evidence is traceable
- evidence exposures are sufficient
- context clues exist where needed
- red herrings are fair
- contradictions are intentional or repairable
- suspect profiles are balanced
- no single document solves the case alone

## Required checks

| Check | Purpose |
|---|---|
| Critical fact support | Ensure solution facts are exposed. |
| Redundancy check | Ensure important clues have independent support. |
| Traceability check | Ensure evidence links to facts, claims, sources, and documents. |
| Exposure check | Ensure evidence appears in player-facing artifacts. |
| Context check | Ensure required domain knowledge is embedded. |
| Red herring check | Ensure misleading clues are fair and explainable. |
| Contradiction check | Distinguish designed conflicts from defects. |
| Single-document check | Prevent one document from carrying the whole solution. |

## Validation outcomes

| Outcome | Meaning |
|---|---|
| pass | Evidence is sufficient for the declared difficulty. |
| warn | Evidence is playable but should be reviewed. |
| fail | Evidence structure breaks fairness, consistency, or solvability. |
| repair | A targeted repair can likely fix the issue. |

## Example validation findings

```text
FAIL RULE-0003
Critical fact CF-004 has only one exposure.

WARN RULE-0009
Document DOC-012 contains method, motive, and opportunity evidence.

REPAIR CER-0307
Domain knowledge required for clue EF-033 is not embedded in archive.
```

## Normative requirements

A Case Engine implementation SHOULD run Evidence Validation before document rendering.

Evidence Validation SHOULD produce machine-readable findings.

Evidence Validation SHOULD reference CER IDs, rule IDs, and affected case elements.

## Repair guidance

Evidence repair MAY:

- add a new exposure
- move evidence to a different document
- lower explicitness
- add context clues
- weaken a red herring
- strengthen corroboration
- split an overpowered document

## Related

- CER-0300
- CER-0312
- RULE-0008
- RULE-0009
