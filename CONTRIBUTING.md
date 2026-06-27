# Contributing to Case Engine Reference

CER is a formal specification project.

Contributions should improve clarity, precision, validation, or implementation usefulness.

## Contribution principles

- Domain concepts before implementation details.
- Normative language where behavior must be testable.
- Examples after rules, not before.
- Decisions documented through ADRs when significant.
- Proposals documented through RFCs when unresolved.

## Document requirements

New major documents SHOULD include:

- YAML frontmatter
- Purpose
- Scope
- Definitions
- Normative statements
- Design discussion
- Validation considerations
- Examples
- Related topics

## Naming

Use stable file names and IDs.

Examples:

```text
CER-0042 — Truth Graph
PAT-0007 — Hidden Identity
RULE-0014 — Critical Fact Redundancy
TEST-0009 — Suspect Balance
ADR-0003 — Discovery Graph
```

## Review focus

Reviewers should ask:

- Is the concept clearly defined?
- Is it testable?
- Does it conflict with existing terminology?
- Is it implementation-independent?
- Does it support generation, validation, and rendering?

## Implementation notes

Implementation-specific content MAY exist, but SHOULD be clearly separated from normative domain requirements.
