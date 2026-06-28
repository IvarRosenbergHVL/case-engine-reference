---
id: CER-0506
title: Suspect Interrogation
status: draft
version: 0.1
tags:
  - document-types
  - police
  - interrogation
  - suspect
---

# Suspect Interrogation

A Suspect Interrogation records questioning of a person who is considered relevant, suspicious, or formally suspected.

## Purpose

Suspect interrogations expose claims, denials, evasions, partial truths, emotional reactions, contradictions, and motive framing.

They are powerful documents because they let players compare what a suspect says with records, witness statements, and physical evidence.

## When to use

Use a Suspect Interrogation when the case needs:

- alibi testing
- motive exploration
- contradiction with objective records
- suspect psychology
- partial confession or denial
- hidden relationship exposure
- pressure-based inconsistency

## Typical investigative roles

| Role | Suitability |
|---|---|
| Claim source | Very high |
| Contradiction source | Very high |
| Red herring | High |
| Core clue | Medium |
| Eliminator | Medium |
| Late confirmation | Medium |

## Typical evidence exposure

A Suspect Interrogation may expose:

- claimed alibi
- denial of relationship
- motive explanation
- knowledge the suspect should not have
- inconsistent sequence
- emotional trigger
- minimization
- blame shifting
- refusal to answer

## Realism constraints

The document SHOULD distinguish questions from answers.

It SHOULD avoid turning the suspect into an exposition device.

A suspect may lie, omit, misunderstand, deflect, or tell the truth for the wrong reason.

The interrogation SHOULD reflect the legal and procedural setting of the case world.

## Required metadata

A specification SHOULD include:

- interrogation ID
- suspect actor ID
- interviewer
- date and time
- location
- legal status if relevant
- reliability profile
- claim IDs represented
- recording or transcript status

## Rendering guidance

Suspect interrogations MAY be rendered as:

- transcript
- summarized police notes
- signed statement
- excerpted recording transcript
- interview report

## Validation checks

- Does the suspect only know what they plausibly could know?
- Are lies modeled as claims rather than facts?
- Are contradictions traceable?
- Does the interrogation overexplain motive or method?
- Does it respect spoiler limits?

## Related

- CER-0203
- CER-0206
- CER-0211
- CER-0503
