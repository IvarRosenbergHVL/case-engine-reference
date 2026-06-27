---
id: CER-0209
title: Actor Model
status: draft
version: 0.1
tags:
  - case-architecture
  - actor-model
---

# Actor Model

The Actor Model defines people and organizations that can know, claim, hide, act, influence, or be affected by case events.

## Purpose

Actors are not only names in documents. They are entities with roles, relationships, knowledge, motives, opportunities, and document footprints.

## Definition

An actor is a person, group, institution, business, public body, or informal collective that participates in or affects the case information system.

## Actor categories

| Category | Description |
|---|---|
| Victim | Person or entity harmed by the central event. |
| Culprit | Actor responsible for the central act or deception. |
| Suspect | Actor plausibly connected to means, motive, or opportunity. |
| Witness | Actor with relevant knowledge or perception. |
| Investigator | Actor producing investigative material. |
| Expert | Actor providing technical, medical, legal, or contextual knowledge. |
| Institution | Organization producing records or constraints. |
| Peripheral actor | Actor that adds realism, context, or limited evidence. |

## Actor dimensions

An actor SHOULD define:

- identity
- public role
- hidden role, when relevant
- relationships
- knowledge state
- belief state
- motive profile
- opportunity profile
- means profile
- reliability profile
- document appearances

## Public and hidden layers

An actor MAY have public attributes and hidden attributes.

The player-facing archive SHOULD reveal hidden attributes through evidence, not through direct exposition.

## Normative requirements

A suspect SHOULD have at least one meaningful connection to the central event.

A major actor SHOULD have a perception state.

A major actor SHOULD have a document footprint unless their absence is itself meaningful.

An actor MUST NOT make claims that require access to information they cannot know unless the access is modeled.

## Validation questions

- Does every major actor have a role in the case logic?
- Are suspects balanced across means, motive, and opportunity?
- Are hidden roles discoverable?
- Are claims consistent with actor knowledge?

## Related

- CER-0203
- CER-0205
- PAT-0001
