---
id: CER-0009
title: Example Policy
status: draft
version: 0.2
tags:
  - specification-framework
  - examples
  - case-independence
  - audit-safe
---

# Example Policy

The Example Policy defines how examples may be used in CER without making the specification dependent on any concrete case.

## Purpose

Examples make the specification easier to understand, but they can also accidentally leak details from real, commercial, private, unpublished, or user-provided cases.

CER examples must therefore be synthetic, minimal, and generic.

## Core principle

Examples SHALL illustrate a rule or model, not reproduce a case.

## Preferred example style

CER examples SHOULD use placeholders such as:

- Actor A
- Actor B
- Suspect C
- Witness D
- Location X
- Object Y
- Substance Z
- Document DOC-001
- Evidence Fragment EF-001
- Claim CL-001
- Event E-001
- Role R-001
- Relationship REL-001

## Safe example pattern

```text
Actor A makes Claim CL-001 about being at Location X.
Evidence Fragment EF-001 places Object Y at Location X later the same evening.
The contradiction supports review of Hypothesis H-001.
```

This example is generic, synthetic, and demonstrates a contradiction pattern without implying a complete case.

## Unsafe example pattern

```text
A concrete public role is paired with a concrete hidden family relationship, motive, profession, object, or method in a way that resembles a specific case.
```

This is not acceptable because it may encode identifiable case content even without names.

## Prohibited example traits

Examples MUST NOT include:

- identifiable details from specific cases
- concrete actor professions paired with concrete hidden relationships
- unique family structures copied from analyzed cases
- distinctive motive chains from analyzed cases
- distinctive clue chains from analyzed cases
- named or recognizable real cases
- commercial case structures
- user-provided case structures

## Requirements

Examples SHOULD be short.

Examples SHOULD use placeholders unless concrete detail is necessary to explain a general concept.

Examples MUST NOT include identifiable details from specific cases.

Examples SHOULD NOT imply a complete mystery solution.

Examples SHOULD NOT include unique clue chains.

Relationship examples SHOULD use abstract labels such as REL-001 instead of concrete relationship content unless the relationship type itself is the concept being specified.

## Review checklist

Before adding an example, ask:

- Is this example synthetic?
- Can it be traced to a specific analyzed case?
- Does it include unnecessary concrete detail?
- Does it reveal a complete clue chain?
- Could placeholders express the same concept?
- Does it combine public role, hidden relation, motive, and clue in a way that resembles a real or provided case?

## Related

- ADR-0004
- RULE-0012
- CER-0002
- CER-1502
