# Case Engine Reference (CER)

**Case Engine Reference** is a formal specification for designing, producing, validating, rendering, and packaging document-based investigation games.

CER is not an implementation for a specific technology stack. It is the domain reference for compatible case engines, manual workflows, and hybrid production systems.

## Specification vs repository

The repository contains two kinds of material:

1. **CER specification material** — the reference itself. This is the durable content intended for designers, writers, implementers, validators, and production teams.
2. **Repository project material** — release planning, audit records, CI workflows, changelog entries, and distribution automation. This supports maintenance of the reference, but is not CER itself.

When reading CER as a resource, start with `HOME.md` or `MASTER_OUTLINE.md` and follow the numbered specification sections.

## Purpose

CER defines how a case engine or production workflow SHOULD model:

- cases as interconnected information systems
- hidden truth separately from player-facing documents
- evidence as structured fragments connected to facts
- documents as views into the underlying evidence network
- player discovery as a planned and validated progression
- artifacts as specification-driven production outputs
- rendering, packaging, and audience separation
- validation, repair, compliance, and release readiness

## Core thesis

> A case is an interconnected information system.
>
> Documents are representations of information.
>
> Documents are never the information itself.

## Project status

CER is currently preparing for a v1.0 release candidate.

The current repository focus is editorial polish, consistency review, example safety, documentation quality, and release automation.

New conceptual work is intentionally deferred unless required to complete the release candidate.

## Intended readers

CER is written for:

- game designers building document-based investigation cases
- human case writers and editors
- engineers implementing case generation engines
- prompt and agent designers
- artifact producers and graphic designers
- renderer and document export developers
- validators and QA systems
- facilitators and product owners

## Repository map

```text
/
├── README.md                 # repository overview
├── HOME.md                   # Obsidian/specification entry point
├── MASTER_OUTLINE.md         # specification structure
├── ROADMAP.md                # repository project material
├── CHANGELOG.md              # repository project material
├── CONTRIBUTING.md           # repository project material
├── 00_Specification_Framework/
├── 01_Foundations/
├── 02_Case_Architecture/
├── 03_Evidence_System/
├── 04_Document_System/
├── 05_Document_Types/
├── 06_Discovery_System/
├── 07_Information_Economy/
├── 08_Failure_Modes/
├── 09_Validation/
├── 10_Rendering/
├── 11_Artifact_Production/
├── 12_Case_Engine/
├── 13_Production_Graphs/
├── 14_Compliance/
├── adr/
├── rules/
├── patterns/
├── schemas/
├── tests/
├── examples/
├── extensions/
├── 15_V1_Hardening/          # repository release-readiness material
├── .github/                  # automation
└── site/                     # static site support
```

## Normative language

CER uses RFC-style terminology:

- MUST
- MUST NOT
- SHOULD
- SHOULD NOT
- MAY

These terms are defined in `00_Specification_Framework/SPECIFICATION_LANGUAGE.md`.

## Implementation relationship

Any implementation of a Case Engine SHOULD be able to state which CER version it implements and which compliance level it claims.

Example:

```text
Implementation: case-engine-node
Conforms to: CER v1.0
Compliance: Partial Level 2
```

See `14_Compliance/` for the compliance model.

## Obsidian

The repository can be opened directly as an Obsidian vault.

Use `HOME.md` as the entry point when reading CER as a connected reference.

## Release artifacts

Release automation may publish:

- an Obsidian-ready ZIP
- checksum files
- release notes
- a static documentation site

These are distribution formats generated from the Markdown source.

## License

License is not yet finalized. See future `LICENSE.md`.
