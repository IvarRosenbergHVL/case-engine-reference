---
id: CER-0212
title: Event Model
status: draft
version: 0.1
tags:
  - case-architecture
  - event-model
---

# Event Model

The Event Model defines things that happen in the case universe.

## Purpose

Events connect actors, locations, objects, facts, timeline constraints, evidence, and discovery.

A case cannot be validated unless important events are structured.

## Definition

An event is a bounded occurrence that changes state or creates evidence.

An event may be fully known, partially known, hidden, disputed, misremembered, or inferred.

## Event categories

| Category | Description |
|---|---|
| Core event | Central incident or decisive action. |
| Preparatory event | Action that makes the core event possible. |
| Discovery event | In-world discovery by investigators or characters. |
| Cover event | Action that conceals or distorts truth. |
| Context event | Background occurrence that explains relationships or motive. |
| Evidence event | Creation, movement, destruction, or recording of evidence. |

## Event metadata

An event SHOULD define:

- event_id
- title
- description
- time or time window
- location
- actors involved
- objects involved
- resulting facts
- claims about the event
- evidence produced
- uncertainty level

## Normative requirements

Important events SHOULD be represented in the Timeline Graph.

Important events SHOULD be linkable to actors and locations.

Events that produce evidence SHOULD link to the Evidence Graph.

Events used for alibi or opportunity validation SHOULD include time constraints.

## Validation questions

- Does the event have a plausible time window?
- Does the event require an actor to know something they cannot know?
- Does the event create or explain evidence?
- Does the event conflict with another event?

## Related

- CER-0202
- CER-0209
- CER-0210
