# Case Engine Reference (CER)

**Case Engine Reference** is a formal specification for designing, producing, validating, rendering, and packaging document-based investigation games.

CER is not an implementation for a specific technology stack. It is the domain reference for compatible case engines, manual workflows, and hybrid production systems.

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

## V1 status

CER is currently in **V1 hardening**.

The focus is completion, audit, consistency, and release candidate readiness.

See:

- `15_V1_Hardening/V1_SCOPE_FREEZE.md`
- `15_V1_Hardening/AUDIT_CHECKLIST.md`
- `15_V1_Hardening/RC_CHECKLIST.md`
- `15_V1_Hardening/RELEASE_CHECKLIST.md`

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
├── README.md
├── HOME.md
├── MASTER_OUTLINE.md
├── ROADMAP.md
├── CHANGELOG.md
├── CONTRIBUTING.md
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
├── 15_V1_Hardening/
├── adr/
├── rules/
├── patterns/
├── schemas/
├── tests/
├── examples/
└── extensions/
```

## Normative language

CER uses RFC-style terminology:

- MUST
- MUST NOT
- SHOULD
- SHOULD NOT
- MAY

These terms are defined in `00_Specification_Framework/SPECIFICATION_LANGUAGE.md` and refined for V1 in `15_V1_Hardening/NORMATIVE_LANGUAGE.md`.

## Implementation relationship

Any implementation of a Case Engine SHOULD be able to state which CER version it implements and which compliance level it claims.

Example:

```text
Implementation: case-engine-node
Conforms to: CER v1.0
Compliance: Partial Level 2
```

See `14_Compliance/` for the V1 compliance model.

## License

License is not yet finalized. See future `LICENSE.md`.
