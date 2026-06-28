---
id: CER-0706
title: Discovery Cost
status: draft
version: 0.1
tags:
  - information-economy
  - discovery-cost
  - player-experience
---

# Discovery Cost

Discovery Cost describes how much effort players must spend to reach a discovery node.

## Purpose

Not all clues should be equally easy.

Discovery Cost helps designers control difficulty by modeling the work required to notice, interpret, connect, and validate information.

## Definition

Discovery Cost is the expected effort required for players to move from available archive material to a specific insight.

## Cost components

Discovery Cost MAY include:

| Component | Description |
|---|---|
| Notice cost | Effort required to see the relevant detail. |
| Interpretation cost | Effort required to understand what it means. |
| Connection cost | Effort required to connect it with other information. |
| Context cost | Background understanding required. |
| Comparison cost | Effort required to compare documents or claims. |
| Memory cost | Effort required to remember earlier material. |
| Social cost | Effort required for players to share and align findings. |

## Cost levels

| Level | Description |
|---|---|
| Low | Most groups will reach it with normal reading. |
| Moderate | Requires attention and some comparison. |
| High | Requires deliberate cross-document reasoning. |
| Very high | Requires several dependencies and careful interpretation. |
| Excessive | Likely unfair for declared difficulty unless optional. |

## Good cost

Good Discovery Cost makes insight feel earned.

It rewards attention, comparison, and discussion.

## Bad cost

Bad Discovery Cost hides required insight behind ambiguity, missing context, excessive noise, or accidental formatting problems.

## Normative requirements

Critical solution insights SHOULD have Discovery Cost appropriate to declared difficulty.

A high-cost critical insight SHOULD have redundancy or scaffolding.

Optional bonus insights MAY have high or very high Discovery Cost.

Excessive Discovery Cost SHOULD trigger validation warnings or repair.

## Validation questions

- How hard is this insight to reach?
- Which components create the cost?
- Is the cost intentional and fair?
- Is the insight critical or optional?
- Does redundancy reduce risk if players miss it?

## Related

- CER-0605
- CER-0704
- CER-0705
- CER-0305
