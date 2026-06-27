---
id: CER-0214
title: Location Model
status: draft
version: 0.1
tags:
  - case-architecture
  - location-model
---

# Location Model

The Location Model defines places where events happen, objects exist, actors move, and opportunities become possible or impossible.

## Purpose

Location is not just setting. It affects access, visibility, travel time, witness reliability, document type, and opportunity.

## Definition

A location is a place, area, route, room, district, building, vehicle, digital environment, or bounded space relevant to the case.

## Location categories

| Category | Description |
|---|---|
| Scene location | Site of a central event. |
| Access location | Place controlling entry or opportunity. |
| Witness location | Place from which someone observes or fails to observe. |
| Transit location | Route, station, road, ferry, parking area, or path. |
| Document source location | Office, institution, archive, server, or workplace. |
| Context location | Place that supports atmosphere, motive, or routine. |

## Location metadata

A location SHOULD define:

- location_id
- name
- type
- parent location
- coordinates or relative position, when useful
- access constraints
- visibility constraints
- travel relationships
- associated actors
- associated events
- associated documents

## Access and visibility

A location SHOULD describe who can access it, who can observe it, and what barriers exist.

Opportunity reasoning depends on access and visibility.

## Normative requirements

Events SHOULD reference locations.

Locations used for opportunity reasoning SHOULD define access conditions.

Locations used for alibi reasoning SHOULD define travel or transition constraints where relevant.

A generated map, if present, SHOULD be consistent with the Location Model.

## Validation questions

- Could the actor reach the location in the available time?
- Could anyone observe the action from nearby locations?
- Is access restricted, public, hidden, logged, or assumed?
- Does the document archive support the claimed location relationships?

## Related

- CER-0202
- CER-0212
- RULE-0006
