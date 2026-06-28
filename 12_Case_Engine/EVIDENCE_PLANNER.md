---
id: CER-1205
title: Evidence Planner
status: draft
version: 0.1
tags:
  - case-engine
  - evidence-planner
  - component
---

# Evidence Planner

The Evidence Planner converts hidden truth into observable evidence structures.

## Purpose

The Evidence Planner ensures that players can discover the solution through documents and artifacts rather than author explanation.

It decides which facts are exposed, where they are exposed, how strongly they are supported, and how they relate to misleading or incomplete information.

## Responsibility

The Evidence Planner is responsible for designing the Evidence Graph and evidence exposure strategy.

It SHOULD connect critical facts to evidence fragments, corroboration, contradictions, red herrings, and document requirements.

## Inputs

The Evidence Planner MAY receive:

- approved Truth Model
- critical fact list
- actor model
- timeline graph
- relationship graph
- object model
- location model
- target difficulty
- document count constraints
- fairness requirements

## Outputs

The Evidence Planner SHOULD produce:

- evidence graph
- evidence fragments
- critical fact coverage map
- corroboration plan
- contradiction plan
- red herring plan
- evidence strength assignments
- reliability assignments
- evidence exposure requirements

## Evidence exposure

The Evidence Planner SHOULD decide:

- which fact each evidence fragment supports
- whether the fragment is direct or indirect
- whether the fragment is objective, claimed, inferred, or perceived
- which documents may expose it
- whether redundant exposure is required
- whether the fragment can mislead fairly

## Must not

The Evidence Planner SHOULD NOT create evidence that contradicts the Truth Model unless represented as claim, perception, error, or deliberate misdirection.

The Evidence Planner SHOULD NOT place all critical support in one document.

The Evidence Planner SHOULD NOT rely on outside knowledge unless the needed context is embedded in the case package.

## Human control

A human reviewer SHOULD be able to inspect critical fact coverage before document drafting begins.

Evidence plans that rely on subtle inference SHOULD receive careful review.

## Normative requirements

Critical facts SHOULD have planned evidence exposure.

Critical evidence SHOULD be traceable to truth and documents.

Red herrings SHOULD be eliminable or downgradable.

Evidence strength and reliability SHOULD be represented explicitly where relevant.

## Validation questions

- Does every critical fact have sufficient evidence support?
- Is evidence distributed across documents?
- Are red herrings fair?
- Are contradictions intentional and explainable?
- Can players infer the intended conclusion without outside knowledge?

## Implements

- CER-0300
- CER-0301
- CER-0302
- CER-0303
- CER-0304
- CER-0305
- CER-0306
- CER-0310
- CER-0311
- CER-0312

## Related

- CER-1204
- CER-1206
- CER-1207
