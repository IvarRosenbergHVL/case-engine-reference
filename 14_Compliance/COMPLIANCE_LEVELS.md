---
id: CER-1401
title: Compliance Levels
status: draft
version: 0.1
tags:
  - compliance
  - levels
  - v1
---

# Compliance Levels

Compliance Levels define how much of CER an implementation supports.

## Purpose

Not every implementation must support every CER feature at once.

Compliance Levels allow implementations to be honest about maturity without pretending to be complete.

## Level 0: Reference Awareness

The implementation uses CER terminology or ideas but does not provide structured compliance evidence.

Typical signs:

- uses some CER concepts
- no full traceability
- no systematic validation
- no explicit compliance matrix

## Level 1: Manual Compliance

The implementation can produce CER-aligned cases through a documented human workflow.

Typical signs:

- human-maintained truth model
- document specifications exist
- manual evidence coverage review
- manual release checklist
- limited automation

## Level 2: Structured Compliance

The implementation stores key CER objects in structured form.

Typical signs:

- explicit truth, evidence, document, and artifact structures
- traceability between major objects
- structured review states
- partial schema validation
- repeatable export checklist

## Level 3: Validated Compliance

The implementation performs systematic validation against CER requirements.

Typical signs:

- validation reports
- failure mode detection
- severity levels
- waiver tracking
- release readiness decision support
- dependency-aware revalidation

## Level 4: Engine Compliance

The implementation behaves like a full CER Case Engine.

Typical signs:

- full production pipeline
- dependency tracking
- impact analysis
- partial regeneration support
- human approval and locking
- rendering validation
- package manifests
- compliance reporting

## Partial compliance

An implementation MAY claim partial compliance for specific areas.

Example:

```text
CER V1 Compliance

Foundations: Level 3
Case Architecture: Level 3
Evidence System: Level 3
Document System: Level 2
Artifact Production: Level 2
Rendering: Level 1
Production Graphs: Level 0
Overall: Partial Level 2
```

## Normative requirements

Compliance claims SHOULD identify the CER version used.

Compliance claims SHOULD distinguish implemented, partial, and unsupported areas.

A higher level SHOULD not be claimed if required lower-level evidence is missing.

Manual processes MAY satisfy compliance if they are documented and repeatable.

## Validation questions

- Which CER version is being claimed?
- Which level is claimed?
- Which areas are only partially implemented?
- What evidence supports the claim?
- Which parts depend on human process?

## Related

- CER-1400
- CER-1402
- CER-1403
