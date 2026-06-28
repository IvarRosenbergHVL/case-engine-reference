---
id: CER-0800
title: Failure Modes Index
status: draft
version: 0.2
tags:
  - failure-modes
  - index
  - audit-safe
---

# Failure Modes

Failure Modes define common ways an investigation case can become unfair, unsatisfying, incoherent, or difficult to validate.

## Purpose

A case can pass individual consistency checks and still fail as a player experience.

Failure Modes give designers, reviewers, and validators a shared vocabulary for identifying structural problems and proposing repairs.

## Core idea

A Failure Mode is a recurring design or validation problem with a known player impact and likely repair strategy.

Failure Modes are not merely writing issues. They describe structural weaknesses in truth, evidence, discovery, document distribution, information economy, rendering, or packaging.

## Failure mode record

Each Failure Mode SHOULD define:

| Field | Description |
|---|---|
| failure_mode_id | Stable identifier. |
| name | Short descriptive name. |
| category | Evidence, discovery, document, information economy, timeline, rendering, or packaging. |
| description | What goes wrong. |
| player impact | How it affects play. |
| detection signals | How a validator or reviewer may find it. |
| common causes | Why it happens. |
| repair strategies | How to fix or reduce it. |
| severity | Typical severity if present. |

## Severity levels

| Severity | Description |
|---|---|
| Minor | Noticeable but unlikely to break play. |
| Moderate | Can reduce quality or fairness. |
| Major | Likely to harm solvability or experience. |
| Critical | Breaks core fairness, consistency, or solution validity. |

## V1 failure modes

| ID | Name | Primary concern |
|---|---|---|
| FM-0001 | Obvious Culprit | Solution balance and suspicion design. |
| FM-0002 | Hidden Critical Clue | Missing or underexposed decisive information. |
| FM-0003 | Critical Fact Bottleneck | A required inference depends on one fragile exposure. |
| FM-0004 | Broken Timeline | Event order, duration, or source knowledge conflict. |
| FM-0005 | Impossible Opportunity | Required opportunity contradicts timeline, access, or location constraints. |
| FM-0006 | Missing Context | Required background knowledge is absent from the package. |
| FM-0007 | Information Overload | Too much undifferentiated material prevents reasoning. |
| FM-0008 | Low Value Documents | Documents exist without enough evidence, context, or discovery function. |
| FM-0009 | Spoiler Leakage | Restricted material or answer-only information becomes visible too early. |
| FM-0010 | Circular Reasoning | The intended conclusion depends on assuming itself. |

## Case-independence rule

Failure Mode descriptions SHOULD describe structural problems, not concrete case stories.

Detection signals and repair strategies SHOULD use generic case elements or abstract language unless a specific model object is required.

## Normative requirements

A validator SHOULD report recognized Failure Modes when possible.

A Failure Mode report SHOULD include severity and repair guidance.

Critical Failure Modes SHOULD block release until repaired or explicitly waived.

Failure Mode detection SHOULD cite affected case elements when possible.

## Related

- CER-0300
- CER-0400
- CER-0600
- CER-0700
- RULE-0012
