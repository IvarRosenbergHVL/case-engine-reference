---
id: ADR-0004
title: CER remains case-independent
status: accepted
date: 2026-06-28
tags:
  - adr
  - scope
  - case-independence
---

# ADR-0004 — CER remains case-independent

## Status

Accepted.

## Context

CER is a reference specification for generating and validating investigation-style case packages.

The specification may be informed by playtesting, genre analysis, product analysis, and design critique, but it must not encode the content of any specific case.

## Decision

CER SHALL remain case-independent.

CER SHALL describe general models, rules, patterns, validation checks, document types, and architecture.

CER SHALL NOT include concrete details from any real, commercial, private, unpublished, or user-provided mystery case.

## Prohibited content

CER documents MUST NOT include:

- concrete character names from analyzed cases
- concrete victim, suspect, or witness identities from analyzed cases
- concrete plot events from analyzed cases
- concrete murder methods from analyzed cases
- concrete motives from analyzed cases
- concrete timelines from analyzed cases
- concrete clue chains from analyzed cases
- concrete red herrings from analyzed cases
- concrete solution structures from analyzed cases
- copied or paraphrased document text from analyzed cases
- references that identify a specific analyzed case as source material

## Allowed content

CER MAY include:

- generic examples
- synthetic examples
- abstract patterns
- document type descriptions
- validation principles
- design rules
- information architecture concepts
- invented placeholder actors such as Actor A or Suspect B

## Example policy

Examples SHOULD use neutral placeholders.

Preferred:

```text
Suspect A claims to have left at 20:15.
A record places the relevant object nearby at 20:43.
The contradiction supports an opportunity hypothesis.
```

Avoid:

```text
A named suspect from a known case claims a specific alibi that matches a real analyzed product.
```

## Consequences

CER can be published, reused, and implemented without disclosing private or proprietary case material.

Implementations can generate concrete cases, but those cases are outputs of an implementation, not part of the reference specification.

## Related

- CER-0001
- CER-0101
- CER-0401
