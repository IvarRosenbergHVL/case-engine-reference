---
id: CER-0311
title: Means, Motive, and Opportunity Evidence
status: draft
version: 0.1
tags:
  - evidence-system
  - suspects
  - mmo
---

# Means, Motive, and Opportunity Evidence

Means, Motive, and Opportunity Evidence supports structured suspect analysis.

## Purpose

A cold case becomes more playable when multiple suspects have plausible but incomplete profiles.

The engine should track which evidence supports each suspect's means, motive, and opportunity.

## Definitions

| Dimension | Definition |
|---|---|
| Means | Practical ability, knowledge, tool, access, or method. |
| Motive | Objective or perceived reason to act. |
| Opportunity | Time, place, access, privacy, and situational possibility. |

## Objective and perceived motive

A motive may be objective or perceived.

An actor can act on a belief that is objectively wrong.

This distinction is important because perceived motive can drive action even when objective motive later collapses.

## Evidence mapping

A suspect profile SHOULD map evidence across all three dimensions:

| Suspect | Means evidence | Motive evidence | Opportunity evidence | Status |
|---|---|---|---|---|
| A | Strong | Moderate | Weak | Plausible early |
| B | Weak | Strong | Strong | Major suspect |
| C | Moderate | Weak | Moderate | Context suspect |

## Balance requirement

A strong case SHOULD avoid giving only the culprit meaningful evidence across all dimensions too early.

At least one non-culprit suspect SHOULD appear strong in at least two dimensions during early or mid discovery in a medium or hard case.

## Normative requirements

Suspect evidence SHOULD be tracked by means, motive, and opportunity.

The intended culprit SHOULD not be uniquely complete too early unless the case design intentionally focuses on proving why rather than who.

Perceived motive SHOULD be distinguished from objective motive.

## Validation questions

- Which suspects have means evidence?
- Which suspects have motive evidence?
- Which suspects have opportunity evidence?
- Does the culprit become obvious too early?
- Are non-culprit suspects plausible but eliminable?

## Related

- CER-0209
- CER-0206
- CER-0303
