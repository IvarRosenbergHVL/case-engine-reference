---
id: CER-0211
title: Claim Model
status: draft
version: 0.1
tags:
  - case-architecture
  - claim-model
---

# Claim Model

The Claim Model defines assertions made by actors, documents, systems, or institutions.

## Purpose

Claims are the player-facing and in-world statements that may or may not match truth.

Separating claims from facts allows interviews, reports, records, and messages to be realistic without corrupting the hidden truth model.

## Definition

A claim is an assertion attributed to a source.

A claim may be:

- true
- false
- partially true
- misleading
- mistaken
- incomplete
- biased
- unverifiable

## Claim metadata

A claim SHOULD define:

| Field | Description |
|---|---|
| claim_id | Stable identifier. |
| source | Actor, document, device, or institution making the claim. |
| content | The assertion. |
| time_made | When the claim is made or recorded. |
| referenced_fact | Fact or facts the claim relates to. |
| truth_alignment | True, false, partial, misleading, unknown. |
| reliability_basis | Why the claim should or should not be trusted. |
| discovery_role | How the claim affects player reasoning. |

## Claim vs fact

A fact is objective within the case universe.

A claim is attributed.

Example:

```text
Fact: The actor left the building at 21:14.
Claim: The actor says they left before 21:00.
```

## Normative requirements

A document SHOULD represent claims as claims, not as direct truth.

A witness statement MUST NOT include objective knowledge unavailable to the witness unless access is modeled.

False claims SHOULD have a reason: mistake, bias, fear, loyalty, self-protection, manipulation, institutional error, or limited perspective.

## Validation questions

- Who makes this claim?
- What fact does it relate to?
- Is the claim true, false, partial, or unknown?
- Why would the source make this claim?
- How can players evaluate it?

## Related

- CER-0205
- CER-0210
- ADR-0002
