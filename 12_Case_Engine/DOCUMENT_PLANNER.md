---
id: CER-1207
title: Document Planner
status: draft
version: 0.1
tags:
  - case-engine
  - document-planner
  - component
---

# Document Planner

The Document Planner converts evidence and discovery requirements into document specifications.

## Purpose

A case should not be produced by writing random documents and hoping the solution emerges.

The Document Planner decides which documents are needed, what role each document plays, which evidence it may expose, and how documents work together as an investigation archive.

## Responsibility

The Document Planner is responsible for producing Document Specifications from the Evidence Graph, Discovery Graph, and case production plan.

It SHOULD ensure that each planned document has a reason to exist.

## Inputs

The Document Planner MAY receive:

- evidence graph
- critical fact coverage map
- discovery graph
- document distribution matrix
- case style guide
- target document count
- package format
- target difficulty
- spoiler separation requirements

## Outputs

The Document Planner SHOULD produce:

- document specifications
- document roles
- document metadata requirements
- evidence exposure assignments
- document distribution matrix updates
- spoiler classification
- artifact production needs
- validation hooks

## Document planning decisions

For each planned document, the planner SHOULD define:

- document type
- document source
- document role
- intended player function
- exposed evidence fragments
- claims and perceptions included
- hidden facts excluded
- required context clues
- metadata requirements
- realism constraints
- rendering requirements

## Document roles

Documents MAY serve roles such as:

- establish context
- expose evidence
- corroborate evidence
- contradict a claim
- introduce a suspect or actor
- support elimination
- create fair misdirection
- provide procedural realism
- carry visual or material clues

A document SHOULD NOT exist only to add volume unless volume itself has a deliberate player-facing function.

## Order independence

For static case archives, documents SHOULD generally be solvable without relying on a fixed reading order.

If a product uses staged release, envelopes, live facilitation, or hint gating, that ordering model SHOULD be explicit.

## Must not

The Document Planner SHOULD NOT place all decisive evidence in one document.

The Document Planner SHOULD NOT expose hidden solution truth unintentionally.

The Document Planner SHOULD NOT treat a document as authoritative if it is actually a claim, perception, error, or biased source.

## Human control

A human reviewer SHOULD be able to inspect the document plan before drafting begins.

The reviewer SHOULD be able to see why each document exists and which evidence it is responsible for exposing.

## Normative requirements

Every major document SHOULD have a Document Specification.

Every evidence-bearing document SHOULD trace to evidence fragments.

Critical fact coverage SHOULD be visible before writing begins.

Document plans SHOULD support validation of redundancy, clue density, and spoiler separation.

## Validation questions

- Does every document have a defined role?
- Is critical evidence distributed fairly?
- Are documents specified before they are written?
- Are claims separated from facts?
- Does any document solve the case alone?
- Is spoiler classification clear?

## Implements

- CER-0400
- CER-0401
- CER-0402
- CER-0403
- CER-0404
- CER-0405
- CER-0406
- CER-0407
- CER-0408
- CER-0409

## Related

- CER-1205
- CER-1206
- CER-1208
