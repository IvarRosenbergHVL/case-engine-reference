---
id: CER-SCHEMAS-README
title: Schemas Index
status: draft
version: 0.2
tags:
  - schemas
  - index
  - v1
  - audit-safe
---

# Schemas Index

Schemas define machine-readable structures used by CER-compatible implementations.

## V1 schema scope

The V1 schema set is intentionally minimal.

Schemas support implementation and validation, but the Markdown specification remains the source of truth.

## V1 schemas

- `case.schema.json`
- `production_node.schema.json`
- `production_edge.schema.json`
- `document_specification.schema.json`
- `artifact_production_specification.schema.json`
- `validation_report.schema.json`
- `package_manifest.schema.json`

## Deferred schemas

Additional schemas for detailed graph objects may be added in V1.1 or later.

V1 does not require a schema for every conceptual model.

## Audit note

Schemas SHOULD describe structure and validation constraints only.

Schemas SHOULD NOT encode concrete case stories, actor relationships, motive chains, methods, or clue chains.

## Related

- `00_Specification_Framework/CER_V1_DEFINITION_OF_DONE.md`
- `14_Compliance/README.md`
- `15_V1_Hardening/V1_SCOPE_FREEZE.md`
