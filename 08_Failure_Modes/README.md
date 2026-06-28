---
id: CER-0800
title: Failure Modes Index
status: draft
version: 0.1
tags:
  - failure-modes
  - index
---

# Failure Modes

Failure Modes define common ways a homicide investigation case can become unfair, unsatisfying, incoherent, or difficult to validate.

## Purpose

A case can pass individual consistency checks and still fail as a player experience.

Failure Modes give designers, reviewers, and validators a shared vocabulary for identifying structural problems and proposing repairs.

## Core idea

A Failure Mode is a recurring design or validation problem with a known player impact and likely repair strategy.

Failure Modes are not merely writing issues. They describe structural weaknesses in truth, evidence, discovery, document distribution, information economy, or rendering.

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

## Initial failure mode families

| Family | Examples |
|---|---|
| Solution fairness | Obvious culprit, unsupported solution, equal solutions. |
| Evidence coverage | Hidden critical clue, critical fact bottleneck. |
| Discovery | No traction, late dump, false plateau. |
| Information economy | Information overload, excessive noise, document spam. |
| Red herrings | Overpowered red herring, unfair misdirection. |
| Context | Missing context, excessive context cost. |
| Timeline | Broken timeline, impossible opportunity. |
| Rendering | Cropped clue, illegible artifact, spoiler leakage. |

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
