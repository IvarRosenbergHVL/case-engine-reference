---
id: CER-0402
title: Document Metadata
status: draft
version: 0.1
tags:
  - document-system
  - metadata
---

# Document Metadata

Document Metadata defines the structured fields required to generate, validate, render, and package documents.

## Purpose

Metadata makes documents traceable and controllable.

Without metadata, documents become isolated prose and cannot reliably support validation, rendering, or packaging.

## Metadata groups

| Group | Purpose |
|---|---|
| Identity | Stable identification and title. |
| Source | Who or what created the document. |
| Time | In-world creation, modification, discovery, or archival dates. |
| Role | Investigative and discovery function. |
| Evidence | Evidence exposures represented. |
| Reliability | Source and interpretation reliability. |
| Rendering | Layout, format, page behavior, asset style. |
| Visibility | Player-facing, optional hint, or facilitator-only. |
| Packaging | Folder, order, envelope, or export location. |

## Recommended fields

A document SHOULD define:

| Field | Description |
|---|---|
| document_id | Stable identifier. |
| title | Player-facing or internal title. |
| document_type | Taxonomy type. |
| source_actor | Person, organization, system, or unknown source. |
| author | Specific author if known. |
| in_world_date | Date the document was created in the case universe. |
| archive_date | Date it entered the case archive, if relevant. |
| visibility | player, optional_hint, facilitator. |
| primary_role | Main investigative role. |
| secondary_roles | Additional functions. |
| evidence_exposures | Linked exposures. |
| reliability_profile | Trust and limitation information. |
| spoiler_risk | Whether it risks revealing too much. |
| render_template | Layout or template family. |
| output_filename | Export filename. |

## Normative requirements

Player-facing documents SHOULD have enough metadata to support traceability from output file back to evidence exposure.

Facilitator-only documents MUST be clearly marked.

Documents with high spoiler risk SHOULD be reviewed before export.

Rendered filenames SHOULD be stable and human-readable.

## Validation questions

- Does the document have a stable ID?
- Is visibility explicit?
- Are evidence exposures linked?
- Is render template known?
- Does the metadata support packaging?

## Related

- CER-0401
- CER-0312
- RULE-0008
