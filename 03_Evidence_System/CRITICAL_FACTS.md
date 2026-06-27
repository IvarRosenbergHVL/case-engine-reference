---
id: CER-0306
title: Critical Facts
status: draft
version: 0.1
tags:
  - evidence-system
  - critical-facts
  - solvability
---

# Critical Facts

Critical Facts are facts required to justify the intended solution.

## Purpose

Critical Facts allow the engine to distinguish between background detail and information that players must be able to infer.

This distinction is necessary for solvability validation.

## Definition

A Critical Fact is a fact without which the intended solution cannot be justified from the player-facing archive.

A fact may be true without being critical.

## Critical fact categories

| Category | Description |
|---|---|
| Culprit identity | Fact identifying the responsible actor. |
| Method | Fact explaining how the central event happened. |
| Means | Fact showing practical ability or access. |
| Motive | Fact showing objective or perceived reason. |
| Opportunity | Fact showing time, access, and situation. |
| Exclusion | Fact eliminating another suspect or theory. |
| Context | Fact required to interpret another clue. |
| Hidden relationship | Fact changing interpretation of motive or access. |
| Timeline pivot | Fact changing the understanding of sequence. |

## Criticality levels

| Level | Description |
|---|---|
| Core | Required to solve the central question. |
| Supporting | Required to make the solution convincing. |
| Eliminative | Required to reject a major wrong theory. |
| Contextual | Required to understand another critical clue. |

## Normative requirements

A case SHOULD explicitly mark critical facts.

Every critical fact SHOULD link to supporting evidence fragments.

Every critical fact SHOULD link to at least one discovery node.

Critical facts SHOULD be included in facilitator material.

## Validation questions

- Is this fact required for the solution?
- Is it exposed to players?
- Is it redundantly supported?
- Is it introduced too late or too directly?
- Does it depend on outside knowledge?

## Related

- CER-0210
- CER-0305
- RULE-0003
- RULE-0004
