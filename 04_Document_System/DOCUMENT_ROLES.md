---
id: CER-0403
title: Document Roles
status: draft
version: 0.1
tags:
  - document-system
  - roles
---

# Document Roles

Document Roles describe what a document does inside the investigation.

## Purpose

A document should not be included only because the genre expects it.

Each document SHOULD have a defined function in evidence distribution, discovery, context, realism, or facilitation.

## Role taxonomy

| Role | Description |
|---|---|
| Anchor | Establishes setting, central event, and initial frame. |
| Core clue | Exposes information required for solution. |
| Corroborator | Independently supports another clue. |
| Context provider | Explains required domain knowledge. |
| Red herring | Supports a plausible wrong theory. |
| Contradiction source | Creates or exposes conflict between claims. |
| Eliminator | Weakens or removes a suspect or hypothesis. |
| Atmosphere | Adds realism, tone, and world texture. |
| Procedure | Shows institutional process or case handling. |
| Late confirmation | Confirms the intended solution after reasoning is mostly complete. |
| Hint | Optional support for stuck players. |
| Facilitator solution | Explains truth and reasoning outside player materials. |

## Primary and secondary roles

A document SHOULD have one primary role.

A document MAY have secondary roles.

Example:

```text
Primary role: Context provider
Secondary role: Means evidence
```

## Role balance

A case package SHOULD include a mix of document roles.

Too many core clue documents can feel mechanical.

Too many atmosphere documents can feel padded.

Too many red herrings can feel unfair.

## Normative requirements

A player-facing document SHOULD have a declared investigative role.

A document with no evidence role MAY still exist if it provides atmosphere, procedure, or context.

A document with high solution density SHOULD be flagged for validation review.

## Validation questions

- What is the primary role of this document?
- Does the case contain too many documents with the same role?
- Is this document necessary, useful, or decorative?
- Does the role match its evidence exposures?

## Related

- CER-0401
- CER-0207
- CER-0312
