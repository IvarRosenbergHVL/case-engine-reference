---
id: CER-1106
title: Prompt Derivation
status: draft
version: 0.1
tags:
  - artifact-production
  - prompts
  - ai
---

# Prompt Derivation

Prompt Derivation defines how prompts may be generated from Artifact Production Specifications.

## Purpose

Prompts are useful when AI tools are used, but prompts are not the source of truth.

CER treats prompts as derived implementation artifacts.

## Core principle

```text
Artifact Production Specification
+ Production Recommendations
+ Case Style Guide
+ Tool Adapter
= Prompt
```

The Artifact Production Specification remains authoritative.

## Definition

Prompt Derivation is the process of translating a production specification into instructions for a specific AI tool or model.

## Inputs

Prompt derivation MAY use:

- artifact production specification
- required facts
- forbidden content
- required evidence exposures
- case style guide
- production recommendations
- model capability profile
- output format requirements
- quality gate requirements

## Tool adapters

Different tools may require different prompt forms.

A tool adapter MAY translate the same production specification into:

- text generation prompt
- image generation prompt
- layout instruction
- negative prompt
- structured JSON instruction
- batch production job
- editing instruction

## Prompt limitations

A prompt SHOULD NOT include hidden truth that the artifact does not need.

A prompt SHOULD NOT expose unrelated critical facts.

A prompt SHOULD NOT replace acceptance criteria.

A prompt SHOULD NOT be treated as evidence that the artifact is correct.

## Normative requirements

Prompt Derivation is optional.

If prompts are used, they SHOULD be derived from specifications, not written freehand as the primary control mechanism.

A produced artifact SHOULD be validated against the production specification, not merely against the prompt.

Model-specific prompt guidance SHOULD remain outside core truth and evidence models.

## Validation questions

- Which production specification was this prompt derived from?
- Does the prompt include only necessary facts?
- Does the prompt preserve forbidden content constraints?
- Is the output validated against the specification?
- Can another tool fulfill the same specification without this prompt?

## Related

- ADR-0005
- CER-1101
- CER-1105
- RULE-0013
