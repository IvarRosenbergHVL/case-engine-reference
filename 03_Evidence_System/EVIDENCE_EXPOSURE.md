---
id: CER-0312
title: Evidence Exposure
status: draft
version: 0.1
tags:
  - evidence-system
  - evidence-exposure
  - documents
---

# Evidence Exposure

Evidence Exposure describes how an evidence fragment becomes available to players.

## Purpose

Evidence fragments are internal planning units. Players do not see fragments directly; they encounter them through documents, images, records, notes, maps, logs, and other artifacts.

Evidence Exposure defines that player-facing presentation layer.

## Definition

An Evidence Exposure is a planned appearance of an evidence fragment in a player-facing or facilitator-only artifact.

An exposure connects:

- evidence fragment
- document or asset
- presentation form
- discovery stage
- explicitness level
- intended player inference

## Exposure is not evidence

The same evidence fragment may be exposed in multiple ways.

Example:

```text
Fragment: A key object was in the suspect's possession.
Exposure 1: A photo shows the object in the background.
Exposure 2: An inventory note records the object as missing.
Exposure 3: A witness mentions seeing the object earlier.
```

## Exposure dimensions

| Dimension | Description |
|---|---|
| Artifact | Document, image, record, map, note, or other output. |
| Form | Text, table, timestamp, visual detail, metadata, annotation. |
| Explicitness | How directly the clue is stated. |
| Timing | Intended discovery stage. |
| Visibility | Player-facing, optional hint, facilitator-only. |
| Inference | What players can reasonably conclude. |
| Redundancy role | Primary, corroborating, contextual, or confirmatory. |

## Explicitness levels

| Level | Name | Description |
|---|---|---|
| 1 | Background | Present but not highlighted. |
| 2 | Notable | Visible to attentive players. |
| 3 | Clear | Straightforward clue. |
| 4 | Strong | Difficult to miss. |
| 5 | Direct | Nearly states the intended inference. |

## Normative requirements

Critical evidence fragments SHOULD have planned exposures.

Exposure explicitness SHOULD match intended difficulty and discovery stage.

A single exposure SHOULD NOT carry the entire solution unless it is an optional late hint.

## Validation questions

- Which artifact exposes this fragment?
- Is the exposure too subtle for a critical clue?
- Is the exposure too direct too early?
- Does it duplicate another exposure or provide independent support?

## Related

- CER-0302
- CER-0305
- CER-0207
- RULE-0009
