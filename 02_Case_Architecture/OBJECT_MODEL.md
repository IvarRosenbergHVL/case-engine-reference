---
id: CER-0213
title: Object Model
status: draft
version: 0.1
tags:
  - case-architecture
  - object-model
---

# Object Model

The Object Model defines physical and digital items that can create, carry, conceal, or explain evidence.

## Purpose

Objects are often the bridge between event, method, opportunity, and document evidence.

A case engine must track objects well enough to avoid impossible custody, unsupported methods, or unexplained evidence appearance.

## Definition

An object is a physical or digital item with relevance to the case information system.

Objects may be ordinary, suspicious, missing, altered, planted, destroyed, misidentified, or misunderstood.

## Object categories

| Category | Description |
|---|---|
| Physical object | Tool, key, clothing, container, paper, vehicle, device. |
| Digital object | File, message, image, log, account, metadata. |
| Legal object | Will, contract, deed, certificate, court record. |
| Medical object | Sample, report, medication, prescription, record. |
| Financial object | Card, receipt, invoice, account, insurance policy. |
| Context object | Item that explains setting, profession, routine, or access. |

## Object metadata

An object SHOULD define:

- object_id
- name
- category
- owner or custodian
- location history
- relevant events
- evidence produced
- document appearances
- known alterations
- player-facing description
- facilitator-only truth

## Custody

Objects that matter to solution SHOULD have a custody model.

Custody describes who possessed, controlled, accessed, moved, altered, or recorded the object.

## Normative requirements

A critical object SHOULD have a traceable custody path.

A critical object SHOULD appear in evidence or documents before it is used in the solution explanation.

An object used to establish means SHOULD be linked to actor access.

Digital objects SHOULD include source and metadata reliability where relevant.

## Validation questions

- Who had access to the object?
- When did the object move?
- Which document reveals it?
- Is the object's evidentiary role clear?
- Does the object appear only when convenient, or is it seeded earlier?

## Related

- CER-0204
- CER-0212
- RULE-0007
