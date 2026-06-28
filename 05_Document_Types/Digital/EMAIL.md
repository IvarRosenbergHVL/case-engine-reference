---
id: CER-0513
title: Email
status: draft
version: 0.1
tags:
  - document-types
  - digital
  - email
---

# Email

An Email document represents one or more email messages, threads, exports, screenshots, or recovered email records.

## Purpose

Email is useful for exposing relationships, plans, motive, timing, omissions, attachments, metadata, and contradiction between private communication and public claims.

## When to use

Use Email when the case depends on:

- relationship evidence
- motive or pressure
- planning or coordination
- hidden contact
- deleted or forwarded messages
- attachment evidence
- timestamp contradictions
- institutional communication

## Typical investigative roles

| Role | Suitability |
|---|---|
| Relationship clue | Very high |
| Motive evidence | High |
| Timeline clue | Medium |
| Contradiction source | High |
| Red herring | High |
| Context provider | Medium |

## Typical evidence exposure

Email may expose:

- sender and recipient
- timestamp
- subject line
- thread structure
- attachment names
- forwarding history
- deleted message gaps
- tone shift
- contradiction with alibi
- hidden relationship

## Realism constraints

Email SHOULD preserve plausible metadata.

It SHOULD distinguish message content from export metadata.

A sender SHOULD only write what they plausibly know, believe, or intend to communicate.

## Required metadata

A specification SHOULD include:

- message ID or thread ID
- sender
- recipients
- timestamp
- subject
- source system or export source
- attachments if any
- recovery status if relevant
- reliability profile

## Rendering guidance

Email may be rendered as:

- exported message
- inbox screenshot
- printed email
- email thread
- forensic export
- forwarded email bundle

Rendering SHOULD preserve headers when timestamps or recipients matter.

## Validation checks

- Are timestamps consistent with the Timeline Graph?
- Are recipients valid actors or organizations?
- Does the email reveal only plausible sender knowledge?
- Are attachment references present if used as evidence?
- Does the email feel natural rather than exposition-heavy?

## Related

- CER-0203
- CER-0206
- CER-0404
- CER-0500
