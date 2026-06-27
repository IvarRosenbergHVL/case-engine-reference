---
id: CER-0005
title: Writing Guidelines
status: draft
version: 0.1
tags:
  - writing
  - governance
---

# Writing Guidelines

CER documents MUST describe the domain before describing implementations.

## Standard document shape

A major concept page SHOULD contain:

1. Purpose
2. Scope
3. Definitions
4. Normative statements
5. Design discussion
6. Patterns
7. Validation
8. Examples
9. Mermaid diagram
10. Related topics
11. Future work

## Concepts before implementation

Write:

```text
Evidence Planning is the process of deciding where information appears.
```

Before writing:

```text
The EvidencePlannerNode calls an LLM.
```

## Specifications before examples

Define the rule first, then show an example.

## Validation focus

Every core concept SHOULD answer:

- Can it be generated?
- Can it be validated?
- Can it be visualized?
- Can it be tested?
- Can it be reused?

## Avoid story dependence

CER MUST define reusable structures, not a single mystery plot.

Example-specific material SHOULD be placed in `examples/`.

## Avoid hidden assumptions

If a concept depends on another concept, reference it explicitly.

Example:

```markdown
This concept depends on [[Evidence Graph]] and [[Document Distribution Matrix]].
```
