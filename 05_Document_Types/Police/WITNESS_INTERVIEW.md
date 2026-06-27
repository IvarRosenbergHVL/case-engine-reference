---
id: CER-0503
title: Witness Interview
status: draft
version: 0.1
tags:
  - document-types
  - police
  - interview
  - witness
---

# Witness Interview

A Witness Interview records what a witness says, remembers, omits, misremembers, or frames.

## Purpose

Witness interviews are central to perception, contradiction, alibi testing, relationship evidence, and hypothesis formation.

They are especially useful because they expose claims rather than objective truth.

## When to use

Use a Witness Interview when the case needs:

- testimony
- alibi claims
- relationship information
- subjective perception
- memory uncertainty
- contradiction between sources
- emotional or social context

## Typical investigative roles

| Role | Suitability |
|---|---|
| Claim source | Very high |
| Contradiction source | Very high |
| Red herring | High |
| Core clue | Medium |
| Context provider | Medium |
| Eliminator | Medium |

## Typical evidence exposure

A Witness Interview may expose:

- claimed timeline
- observed behavior
- relationship tension
- rumor or hearsay
- motive perception
- hidden knowledge
- mistaken identity
- omission
- contradiction with records

## Realism constraints

A witness interview SHOULD preserve uncertainty.

Witnesses SHOULD NOT speak like omniscient narrators.

Statements may be wrong, incomplete, biased, self-protective, or shaped by memory.

The document SHOULD distinguish direct observation from hearsay when possible.

## Required metadata

A specification SHOULD include:

- interview ID
- interviewer
- interviewee
- date and time
- location
- interview format
- witness relationship to case
- reliability profile
- claim IDs represented

## Rendering guidance

Witness interviews MAY be rendered as:

- transcript
- summarized statement
- police interview form
- typed notes
- audio transcript extract
- signed witness statement

## Validation checks

- Are claims traceable to the witness and not objective truth by default?
- Does the witness only know what they plausibly could know?
- Are contradictions intentional and resolvable?
- Is reliability modeled?
- Does the interview reveal too much too directly?

## Related

- CER-0203
- CER-0206
- CER-0211
- CER-0404
