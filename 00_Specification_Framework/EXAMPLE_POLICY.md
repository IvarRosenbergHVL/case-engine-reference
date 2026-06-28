---
id: CER-0009
title: Example Policy
status: draft
version: 0.1
tags:
  - specification-framework
  - examples
  - case-independence
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
- Suspect B
- Witness C
- Location X
- Object Y
- Substance Z
- Document D
- Evidence Fragment EF-001
- Claim CL-001

## Good example

```text
Suspect A claims to have left Location X at 20:15.
A timestamped record places Object Y at Location X at 20:43.
The contradiction supports an opportunity hypothesis.
```

This example is generic, synthetic, and demonstrates a contradiction pattern.

## Bad example

```text
A named actor from a known case lies about a specific trip, specific object, or specific relationship from that case.
```

This example is not acceptable because it may encode identifiable case content.

## Requirements

Examples SHOULD be short.

Examples SHOULD use placeholders unless concrete detail is necessary to explain a general concept.

Examples MUST NOT include identifiable details from specific cases.

Examples SHOULD NOT imply a complete mystery solution.

Examples SHOULD NOT include unique clue chains.

## Review checklist

Before adding an example, ask:

- Is this example synthetic?
- Can it be traced to a specific analyzed case?
- Does it include unnecessary concrete detail?
- Does it reveal a complete clue chain?
- Could placeholders express the same concept?

## Related

- ADR-0004
- RULE-0012
- CER-0002
