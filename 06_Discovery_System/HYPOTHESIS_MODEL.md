---
id: CER-0602
title: Hypothesis Model
status: draft
version: 0.1
tags:
  - discovery-system
  - hypothesis
---

# Hypothesis Model

The Hypothesis Model defines possible explanations players may form while investigating the archive.

## Purpose

Players do not move directly from evidence to solution.

They form working explanations, test them, discuss them, revise them, and reject them.

The Hypothesis Model allows a case to represent both the intended solution and plausible wrong theories.

## Definition

A hypothesis is a possible explanation for one or more unknowns in the case.

A hypothesis may be correct, partially correct, wrong but reasonable, or intentionally misleading.

## Hypothesis targets

A hypothesis MAY address:

- responsible actor
- method
- motive
- opportunity
- timeline
- relationship
- object use
- witness reliability
- scene interpretation
- evidence tampering

## Hypothesis fields

A hypothesis SHOULD define:

| Field | Description |
|---|---|
| hypothesis_id | Stable identifier. |
| target | What the hypothesis explains. |
| statement | Neutral description of the possible explanation. |
| supporting_evidence | Evidence exposures that support it. |
| contradicting_evidence | Evidence exposures that weaken it. |
| required_context | Context needed to evaluate it. |
| status | intended, plausible_wrong, partial, rejected, decoy. |
| discovery_stage | Early, middle, late, or solution. |

## Hypothesis status

| Status | Description |
|---|---|
| intended | Part of the intended solution. |
| partial | Correct in part but incomplete or misframed. |
| plausible_wrong | Reasonable but ultimately incorrect. |
| decoy | Intentionally misleading but fair. |
| rejected | Should be eliminated by available evidence. |

## Normative requirements

Major wrong theories SHOULD be modeled if the archive intentionally supports them.

A plausible wrong hypothesis SHOULD have a fair rejection path.

The intended solution hypothesis SHOULD be supported by multiple evidence paths.

A hypothesis SHOULD NOT require outside knowledge unless that knowledge is embedded in the archive.

## Validation questions

- What hypotheses are players likely to form?
- Which hypotheses are intended?
- Which wrong hypotheses are fair?
- How can players reject wrong hypotheses?
- Does one hypothesis become too obvious too early?

## Related

- CER-0601
- CER-0308
- CER-0310
- CER-0311
