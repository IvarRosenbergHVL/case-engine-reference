---
id: ADR-0001
title: Truth Graph is the authoritative hidden model
status: accepted
date: 2026-06-27
tags:
  - adr
  - truth-graph
  - architecture
---

# ADR-0001 — Truth Graph is the authoritative hidden model

## Status

Accepted.

## Context

A paper-based cold case experience can easily become a set of disconnected documents. If the documents are authored first, the case tends to inherit contradictions, missing causal links, uneven suspect balance, and accidental spoilers.

The player-facing archive must feel like an assembled case file, but the generator must not treat documents as the primary source of truth.

## Decision

CER defines the **Truth Graph** as the authoritative hidden model of objective case reality.

The Truth Graph SHALL exist before player-facing documents are generated.

Player-facing documents SHALL be derived from evidence structures that trace back to the Truth Graph.

The Truth Graph SHALL NOT be directly exposed to players.

## Consequences

This decision creates a separation between:

- what objectively happened
- what characters believe happened
- what documents claim happened
- what players can infer
- what facilitators know

It enables:

- automated consistency checks
- timeline validation
- suspect balance validation
- evidence redundancy validation
- spoiler safety
- repair workflows

## Alternatives considered

### Document-first generation

Rejected. Document-first generation creates plausible artifacts quickly, but makes validation and repair difficult because truth must be inferred from already-written prose.

### Plot-summary-first generation

Rejected. A plot summary is useful for human orientation, but it is too vague to function as a validation source.

### Timeline-first generation

Partially accepted. A timeline is necessary, but it does not represent motive, knowledge, relationships, evidence, perception, or discovery by itself.

## Related

- [[00_Specification_Framework/TERMINOLOGY|Terminology]]
- [[00_Specification_Framework/ARCHITECTURE_OVERVIEW|Architecture Overview]]
- [[rules/RULE-0001-case-is-information-system|RULE-0001]]
