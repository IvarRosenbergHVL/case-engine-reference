---
id: CER-0302
title: Evidence Fragment
status: draft
version: 0.1
tags:
  - evidence-system
  - evidence-fragment
---

# Evidence Fragment

An Evidence Fragment is the smallest useful unit of evidence in CER.

## Purpose

Evidence fragments let the engine distribute information across documents without losing traceability.

A document may contain many fragments.

A single fragment may be exposed in more than one document if redundancy is intentional.

## Definition

An Evidence Fragment is a structured unit of information that can affect a player inference.

It may support a fact, challenge a claim, create context, mislead fairly, or help eliminate a hypothesis.

## Fragment metadata

An Evidence Fragment SHOULD define:

| Field | Description |
|---|---|
| fragment_id | Stable identifier. |
| summary | Short description of the information. |
| related_facts | Facts the fragment supports or challenges. |
| related_claims | Claims the fragment supports or challenges. |
| source_type | Witness, record, object, photo, system, expert, context, etc. |
| reliability | Source and interpretation reliability. |
| strength | Strength of support for intended inference. |
| discovery_role | How it affects player understanding. |
| exposure_targets | Documents or assets where it appears. |
| criticality | Whether it is required for solution. |

## Fragment granularity

Fragments SHOULD be small enough to move between documents during repair.

Poor fragment:

```text
The financial records prove motive and the timeline contradicts the suspect.
```

Better fragments:

```text
The suspect received a final payment notice three days before the incident.
The suspect's card was used near the location at 20:46.
The suspect claimed to be home by 20:30.
```

## Normative requirements

Critical fragments SHOULD be linked to at least one critical fact.

A fragment SHOULD NOT contain multiple unrelated clues.

A fragment SHOULD identify whether it is direct, indirect, contextual, misleading, or confirmatory.

## Validation questions

- Is the fragment atomic enough?
- Which fact or claim does it affect?
- Where is it exposed?
- Is it too explicit for its discovery stage?
- Is it redundant if critical?

## Related

- CER-0301
- CER-0306
- RULE-0003
