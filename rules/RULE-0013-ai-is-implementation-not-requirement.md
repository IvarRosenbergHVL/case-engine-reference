---
id: RULE-0013
title: AI is implementation, not requirement
status: accepted
version: 0.1
tags:
  - rule
  - implementation
  - ai
  - scope
---

# RULE-0013 — AI is implementation, not requirement

## Rule

CER SHALL NOT require AI for case design, validation, writing, rendering, or packaging.

AI MAY be used to implement CER, but CER SHALL remain meaningful as a human-readable and human-executable specification.

## Rationale

CER defines the structure and quality requirements of document-based homicide investigation games.

A human designer should be able to use CER manually.

A machine implementation should be judged by whether it produces CER-compliant output, not by whether it uses a particular AI model, agent framework, or prompt strategy.

## Consequences

CER documents SHOULD describe domain concepts, not model-specific behavior.

Implementation documents MAY map CER concepts to agents, workflows, prompts, schemas, or validators, but those mappings are outside the core specification unless explicitly included as implementation guidance.

## Validation

A CER-compliant case SHOULD be auditable from its case model, evidence plan, document specifications, rendered package, and validation results.

It SHOULD NOT require access to hidden prompts or chain-of-thought to determine compliance.

## Related

- CER-0106
- CER-0407
- RULE-0011
