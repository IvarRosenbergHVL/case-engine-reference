---
id: CER-1302
title: Dependency Tracking
status: draft
version: 0.1
tags:
  - production-graphs
  - dependencies
  - impact-analysis
---

# Dependency Tracking

Dependency Tracking defines how the Case Engine records relationships between production objects.

## Purpose

When one part of a case changes, the engine must know what else may be affected.

Without dependency tracking, repair becomes guesswork and approved artifacts may silently become inconsistent.

## Definition

Dependency Tracking is the practice of recording which nodes depend on, derive from, expose, render, validate, package, or approve other nodes.

## Dependency examples

A document specification may depend on:

- evidence fragments
- document role
- case style guide
- spoiler classification
- artifact requirements

A draft artifact may depend on:

- artifact production specification
- required facts
- forbidden content
- producer output
- case style guide

A rendered file may depend on:

- approved artifact
- template
- visual assets
- export format settings
- print readiness requirements

A release package may depend on:

- rendered files
- package grouping
- manifest entries
- print guide
- human release decision

## Upstream and downstream

An upstream node influences later nodes.

A downstream node may need review when an upstream node changes.

The engine SHOULD be able to answer:

```text
What does this node depend on?
What depends on this node?
```

## Dependency strength

Dependencies MAY have different strengths:

| Strength | Description |
|---|---|
| hard | Downstream node is invalid if upstream changes. |
| soft | Downstream node may need review if upstream changes. |
| reference | Downstream node cites or links upstream but may remain valid. |
| style | Downstream node depends on visual or textual continuity. |
| package | Downstream node is included through packaging relationship. |

## Normative requirements

A Case Engine SHOULD track dependencies for critical facts, evidence fragments, document specifications, artifact specifications, approved artifacts, rendered files, and release packages.

A change to a hard dependency SHOULD trigger revalidation of downstream nodes.

A change to a locked upstream node SHOULD require explicit approval.

Dependency tracking SHOULD support repair impact analysis.

## Validation questions

- What nodes depend on this node?
- Which dependencies are hard dependencies?
- Does a change require revalidation?
- Does a locked or approved node depend on changed material?
- Can the engine explain why a node must be reviewed again?

## Related

- CER-1301
- CER-1303
- CER-1212
- CER-1103
