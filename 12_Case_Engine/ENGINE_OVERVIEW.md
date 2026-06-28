---
id: CER-1201
title: Engine Overview
status: draft
version: 0.1
tags:
  - case-engine
  - architecture
  - overview
---

# Engine Overview

The Case Engine is a reference architecture for producing CER-compatible case packages.

## Purpose

The engine turns structured case design into playable investigation material.

It coordinates truth modeling, evidence planning, discovery design, document specification, artifact production, validation, repair, rendering, and export.

## Definition

A Case Engine is any process or system that implements CER well enough to produce, validate, and package a document-based investigation case.

It may be software, a manual workflow, or a hybrid production process.

## Engine boundary

The engine is responsible for:

- maintaining traceability from truth to player-facing artifact
- separating facts, claims, perceptions, and documents
- planning evidence exposure
- producing artifact specifications
- supporting human review and approval
- validating fairness and consistency
- rendering and packaging release material

The engine is not responsible for:

- forcing use of AI
- replacing human judgment
- guaranteeing artistic quality without review
- inventing facts outside the case model
- treating generated text as truth

## Source of truth

The hidden case model is authoritative.

Documents and artifacts are views, not sources of truth.

Generated drafts are candidates, not facts.

## Human governance

The engine SHOULD support human decisions throughout production.

Human reviewers MAY approve, reject, edit, replace, lock, or reopen artifacts.

A CER-compatible engine SHOULD make those decisions traceable.

## Component contract

Each engine component SHOULD define:

- responsibility
- inputs
- outputs
- constraints
- prohibited behavior
- implemented CER sections
- validation hooks

## Minimal engine

A minimal engine may be a structured manual workflow if it:

- defines a truth model
- maps evidence to documents
- validates core solvability
- maintains spoiler separation
- produces a coherent release package

## Advanced engine

An advanced engine may add:

- agent orchestration
- automated validation
- automatic repair suggestions
- schema validation
- prompt derivation
- visual continuity checking
- package manifests
- compliance scoring

## Normative requirements

An engine SHOULD preserve traceability from case truth to final artifacts.

An engine SHOULD keep planning, production, validation, and release decisions auditable.

An engine SHOULD NOT treat AI output as automatically correct.

An engine SHOULD support human control over release readiness.

## Related

- ADR-0001
- ADR-0002
- ADR-0005
- CER-1200
- CER-1202
