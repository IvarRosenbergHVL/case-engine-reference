---
id: CER-1507
title: Case Independence Audit
status: draft
version: 0.1
tags:
  - v1
  - audit
  - case-independence
  - examples
---

# Case Independence Audit

This document records the V1 audit for examples that may be too close to a specific analyzed, user-provided, commercial, or real case.

## Purpose

CER must remain a general reference specification.

It may describe investigation structures and design patterns, but it must not encode a specific case through examples, relationship combinations, motive chains, document chains, or clue sequences.

## Audit rule

If an example can be replaced by placeholders without losing the rule being explained, it SHOULD be replaced.

Preferred placeholders:

- Actor A
- Actor B
- Witness C
- Location X
- Object Y
- Evidence Fragment EF-001
- Claim CL-001
- Event E-001
- Role R-001
- Relationship REL-001
- Document DOC-001

## Known V1 remediation

The Hidden Identity pattern previously contained concrete forms and document examples that could be read as too close to a specific case structure.

It was revised to use generic placeholders and functional document categories.

Remediated file:

- `patterns/PAT-0001-hidden-identity.md`

## Policy update

The Example Policy was strengthened to prohibit examples that combine concrete public roles, hidden relationships, motive structures, or clue chains in ways that may resemble a specific case.

Updated file:

- `00_Specification_Framework/EXAMPLE_POLICY.md`

## Audit search focus

The V1 audit should flag examples using concrete combinations such as:

- public role plus hidden relationship
- profession plus family connection
- distinctive inheritance or beneficiary chain
- distinctive forensic method plus personal relationship
- specific alibi pattern plus specific object
- specific location sequence plus specific motive
- complete mini-mystery solution

## Acceptable example style

Acceptable examples demonstrate one rule at a time.

Example:

```text
Actor A makes Claim CL-001.
Evidence Fragment EF-001 contradicts Claim CL-001.
Document DOC-001 exposes EF-001.
```

This is safe because it shows structure without story.

## Manual audit checklist

For each file, reviewers SHOULD check:

- Does the file contain examples?
- Do examples use placeholders?
- Does the example imply a complete case?
- Does it combine role, relationship, motive, and clue into a recognizable pattern?
- Can the example be made more abstract?
- Is the example necessary at all?

## V1 release requirement

Known case-specific examples SHOULD be removed or generalized before CER 1.0 release candidate.

Any remaining uncertainty SHOULD be tracked as an issue and not silently ignored.

## Related

- CER-0009
- CER-1502
- ADR-0004
- RULE-0012
- Issue #1
