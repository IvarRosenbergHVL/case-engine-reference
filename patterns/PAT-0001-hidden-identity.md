---
id: PAT-0001
title: Hidden Identity
status: draft
version: 0.1
tags:
  - pattern
  - identity
  - character
---

# PAT-0001 — Hidden Identity

## Summary

A Hidden Identity pattern occurs when a character's public identity differs from their true role, relationship, origin, or relevance to the case.

## Purpose

Hidden identity creates layered discovery. It allows a character to appear peripheral while secretly explaining motive, inheritance, access, or historical conflict.

## Common forms

| Form | Description |
|---|---|
| Unknown child | A biological relationship is hidden. |
| False profession | A character appears in one role but acts from another. |
| Past relationship | A former partner, colleague, or rival is not recognized as such. |
| Assumed name | A character uses a different public name. |
| Hidden beneficiary | A person has a concealed financial or legal interest. |
| Secret witness | A witness has more context than they initially reveal. |

## Design requirements

A hidden identity SHOULD be discoverable through multiple indirect sources.

A hidden identity SHOULD NOT be revealed by a single explicit document unless that document appears late or is facilitator-only.

## Document support

Useful document types include:

- DNA reports
- old letters
- legal correspondence
- photographs
- school records
- property records
- birth or adoption records
- testimony with ambiguous phrasing
- family trees with missing or uncertain links

## Failure modes

The pattern becomes weak when:

- the hidden identity is obvious too early
- the reveal has no effect on motive or opportunity
- the identity is only stated directly, not inferred
- the identity twist replaces evidence reasoning

## Validation

A validator SHOULD check:

- whether the hidden identity affects the case logic
- whether it is supported by at least two independent sources
- whether the reveal happens at the intended discovery stage
- whether it creates or changes a meaningful hypothesis

## Related

- CER-0103
- CER-0104
- RULE-0003
