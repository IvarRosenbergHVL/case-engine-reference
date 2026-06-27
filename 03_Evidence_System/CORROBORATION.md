---
id: CER-0308
title: Corroboration
status: draft
version: 0.1
tags:
  - evidence-system
  - corroboration
---

# Corroboration

Corroboration is the independent support of one evidence item, claim, fact, or inference by another.

## Purpose

Corroboration allows players to move from suspicion to confidence.

It also allows validators to measure whether a solution is supported by more than isolated clues.

## Definition

Corroboration occurs when two or more evidence exposures support the same inference through independent paths.

## Corroboration dimensions

| Dimension | Description |
|---|---|
| Source independence | Evidence comes from different sources. |
| Format independence | Evidence appears in different document or asset forms. |
| Method independence | Evidence is produced by different mechanisms. |
| Time independence | Evidence was created at different times. |
| Motive independence | Sources do not share the same incentive to mislead. |

## Corroboration strength

| Level | Description |
|---|---|
| Weak | Same source or same chain repeated. |
| Moderate | Different source but same underlying dependency. |
| Strong | Different source and different method. |
| Very strong | Multiple independent sources, formats, and methods. |

## Example

A suspect's claim about being elsewhere may be challenged by:

- a timestamped access log
- a witness seeing the suspect nearby
- a receipt placing the suspect in transit

Together these can corroborate an opportunity inference even if no single item proves the whole theory.

## Normative requirements

Critical solution inferences SHOULD be corroborated.

Corroboration SHOULD be evaluated separately from simple repetition.

A validator SHOULD identify whether evidence paths are truly independent.

## Validation questions

- Do independent sources support the same inference?
- Are corroborating items too similar to count separately?
- Does corroboration emerge naturally from the archive?
- Is corroboration available before the final solution explanation?

## Related

- CER-0305
- CER-0306
- RULE-0003
