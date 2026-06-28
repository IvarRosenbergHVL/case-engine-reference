---
id: CER-1209
title: Writer
status: draft
version: 0.1
tags:
  - case-engine
  - writer
  - component
---

# Writer

The Writer produces draft textual artifacts from specifications.

## Purpose

The Writer turns approved requirements into draft text, but the Writer is not the source of truth.

The Writer implements Artifact Production Specifications and Document Specifications.

## Responsibility

The Writer is responsible for producing textual draft artifacts that satisfy their specifications.

It SHOULD preserve required facts, expose planned evidence, avoid forbidden content, and follow document voice, style, and realism constraints.

## Inputs

The Writer MAY receive:

- document specification
- artifact production specification
- required facts
- required evidence exposures
- forbidden content
- case style guide
- terminology constraints
- source voice requirements
- production recommendations
- prompt-derived instructions if AI is used

## Outputs

The Writer SHOULD produce:

- draft text artifact
- traceability notes
- unresolved questions
- assumptions made
- warnings about missing information
- revision notes

## Writing constraints

The Writer SHOULD distinguish:

- objective facts
- source claims
- perceptions
- errors
- uncertainty
- inference
- formal conclusions

The Writer SHOULD preserve the intended authority level of the document source.

## Must not

The Writer SHOULD NOT invent critical facts.

The Writer SHOULD NOT solve unspecified gaps by creating new evidence.

The Writer SHOULD NOT expose hidden solution facts unless required by the specification.

The Writer SHOULD NOT treat generated phrasing as authoritative truth.

## AI-assisted writing

If an AI model is used, the prompt SHOULD be derived from the Artifact Production Specification.

The AI output SHOULD be treated as a draft requiring validation and human review.

## Human control

A human reviewer MAY edit, approve, reject, or request revision of Writer output.

Approved text SHOULD be locked or versioned before rendering.

## Normative requirements

Text artifacts SHOULD be validated against their source specifications.

Evidence-bearing statements SHOULD trace to planned evidence or claim models.

Uncertainty SHOULD be preserved where specified.

Generated text SHOULD NOT become release-ready without review.

## Validation questions

- Does the text satisfy the specification?
- Are required evidence exposures present?
- Are forbidden facts absent?
- Does source voice match the document type?
- Are facts and claims clearly separated?
- Did the writer introduce unsupported details?

## Implements

- CER-0401
- CER-0403
- CER-0404
- CER-0405
- CER-1101
- CER-1102
- CER-1106

## Related

- CER-1208
- CER-1210
- CER-1211
