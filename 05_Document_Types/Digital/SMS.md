---
id: CER-0514
title: SMS
status: draft
version: 0.1
tags:
  - document-types
  - digital
  - sms
---

# SMS

An SMS document represents text message records, screenshots, exports, recovered messages, or phone-provider message metadata.

## Purpose

SMS is useful for short, time-sensitive, informal communication.

It can expose urgency, hidden meetings, emotional escalation, deletion gaps, alibi contradictions, and relationship dynamics.

## When to use

Use SMS when the case depends on:

- short informal messages
- last contact
- meeting coordination
- urgent warnings
- alibi testing
- deleted or missing messages
- relationship conflict
- timing contradictions

## Typical investigative roles

| Role | Suitability |
|---|---|
| Timeline clue | High |
| Relationship clue | High |
| Contradiction source | High |
| Red herring | Medium |
| Core clue | Medium |
| Atmosphere | Medium |

## Typical evidence exposure

SMS may expose:

- sender and recipient
- timestamp
- message content
- missed or failed delivery
- deleted gap
- last known contact
- location implication
- tone or emotional state
- mismatch with claimed timeline

## Realism constraints

SMS content SHOULD be brief and natural.

It SHOULD NOT carry long exposition unless the sender plausibly writes that way.

Screenshots and exports SHOULD preserve timestamps if timing matters.

## Required metadata

A specification SHOULD include:

- message ID or thread ID
- sender
- recipient
- timestamp
- device or source
- recovery status
- screenshot or export status
- reliability profile

## Rendering guidance

SMS may be rendered as:

- phone screenshot
- provider export
- forensic extraction table
- printed message thread
- cropped chat image

Rendering SHOULD make timestamps legible when timing is part of the clue.

## Validation checks

- Are timestamps consistent with the Timeline Graph?
- Is message style plausible for the sender?
- Does the message avoid unnatural exposition?
- Are deleted or missing messages intentional?
- Does the format preserve critical timing details?

## Related

- CER-0202
- CER-0203
- CER-0404
- CER-0513
