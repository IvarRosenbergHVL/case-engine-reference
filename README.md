# Case Engine Reference (CER)

**Case Engine Reference** is a formal specification for designing, generating, validating, rendering, and facilitating paper-based cold case investigations.

CER is not an implementation manual for a specific technology. It is the domain reference for the entire Case Engine ecosystem.

## Purpose

CER defines how a case engine SHALL model:

- cases as interconnected information systems
- hidden truth separately from player-facing documents
- evidence as structured fragments connected to facts
- documents as views into the underlying evidence network
- player discovery as a planned and validated progression
- ambiguity, red herrings, means, motive, and opportunity as first-class design elements

## Core thesis

> A case SHALL be modeled as an interconnected information system.
>
> Documents are representations of information.
>
> Documents are never the information itself.

## Intended readers

CER is written for:

- game designers building document-based cold case mysteries
- AI engineers implementing case generation engines
- prompt and agent designers
- renderer and document export developers
- validators and QA systems
- facilitators and product owners

## Repository status

This repository is currently in **M0 — Specification Framework**.

M0 defines the structure, language, process, terminology, and governance model used by all future CER volumes.

## Repository map

```text
/
├── README.md
├── HOME.md
├── MASTER_OUTLINE.md
├── ROADMAP.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── 00_Specification_Framework/
├── reference/
├── adr/
├── rules/
├── patterns/
├── schemas/
├── tests/
├── examples/
└── assets/
```

## Normative language

CER uses RFC-style terminology:

- MUST
- MUST NOT
- SHALL
- SHOULD
- SHOULD NOT
- MAY
- OPTIONAL

These terms are defined in `00_Specification_Framework/SPECIFICATION_LANGUAGE.md`.

## Implementation relationship

Any implementation of Case Engine SHOULD be able to state which CER version it implements.

Example:

```text
Implementation: case-engine-node
Conforms to: CER v0.1
```

## License

License is not yet finalized. See future `LICENSE.md`.
