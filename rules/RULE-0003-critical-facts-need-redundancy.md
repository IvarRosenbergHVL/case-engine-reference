---
id: RULE-0003
title: Critical facts need redundancy
status: accepted
version: 0.1
tags:
  - rule
  - evidence
  - solvability
---

# RULE-0003 — Critical facts need redundancy

## Rule

Every critical fact required to solve a case SHALL be supported by at least two independent evidence exposures.

## Definition

A **critical fact** is a fact without which the intended solution cannot be justified.

An **evidence exposure** is a player-facing appearance of information that can support an inference.

Independent exposures SHOULD come from different sources, document types, or reasoning paths.

## Rationale

Players miss things. Documents are noisy. Groups split attention. A single clue can be overlooked, misread, or dismissed.

Redundancy makes the case fair without making it obvious.

## Acceptable redundancy

Examples of independent exposures:

- a timeline clue in a witness statement and a timestamp in a log
- a motive clue in a letter and a financial record
- a medical clue in an autopsy note and a contextual newspaper article
- a relationship clue in a photo and a message thread

## Invalid redundancy

The following SHOULD NOT count as independent exposures:

- repeating the same sentence in two documents
- giving the same clue in two documents from the same source
- restating a facilitator explanation in player-facing material

## Validation

A validator SHOULD identify all critical facts and count independent evidence exposures for each.

A case SHOULD fail solvability validation if any critical fact has fewer than two independent exposures.

## Related

- [[adr/ADR-0003-discovery-graph-is-first-class|ADR-0003]]
- [[rules/RULE-0001-case-is-information-system|RULE-0001]]
