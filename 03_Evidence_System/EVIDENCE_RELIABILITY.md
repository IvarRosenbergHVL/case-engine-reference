---
id: CER-0304
title: Evidence Reliability
status: draft
version: 0.1
tags:
  - evidence-system
  - reliability
---

# Evidence Reliability

Evidence Reliability describes how much trust should be placed in a source, record, interpretation, or evidence handling chain.

## Purpose

Reliability allows cases to contain realistic uncertainty without collapsing into randomness.

Players should be able to evaluate why a source may be trusted, doubted, or reinterpreted.

## Definition

Evidence Reliability is the modeled trustworthiness of evidence based on source, method, preservation, perspective, bias, and interpretation.

Reliability is not identical to truth.

## Reliability dimensions

| Dimension | Question |
|---|---|
| Source reliability | Is the source generally trustworthy? |
| Access reliability | Could the source know or record this? |
| Memory reliability | Could the person remember accurately? |
| Technical reliability | Is the system, test, or device dependable? |
| Chain reliability | Was the item preserved and handled properly? |
| Interpretation reliability | Is the conclusion drawn from the evidence justified? |
| Bias risk | Does the source have reason to distort? |

## Reliability levels

| Level | Name | Description |
|---|---|---|
| 0 | Unknown | Reliability cannot yet be evaluated. |
| 1 | Poor | Major reason to doubt. |
| 2 | Limited | Useful but constrained. |
| 3 | Moderate | Generally useful with caveats. |
| 4 | High | Strong source or handling quality. |
| 5 | Formal | Official, technical, or independently controlled source, though still interpretable. |

## Normative requirements

Important evidence SHOULD define reliability separately from strength.

A document SHOULD NOT be assumed reliable only because it appears official.

Human testimony SHOULD model perspective and memory limitations.

Technical evidence SHOULD model collection, interpretation, or metadata limitations when relevant.

## Validation questions

- Why should players trust or doubt this evidence?
- Is the evidence reliable but weak?
- Is the evidence unreliable but revealing?
- Does the case fairly indicate reliability limitations?

## Related

- CER-0303
- CER-0205
- ADR-0002
