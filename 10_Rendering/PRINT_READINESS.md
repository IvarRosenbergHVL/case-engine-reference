---
id: CER-1005
title: Print Readiness
status: draft
version: 0.1
tags:
  - rendering
  - print
  - export
---

# Print Readiness

Print Readiness defines whether rendered artifacts can be printed and used as intended in a physical case package.

## Purpose

A print-and-play case depends on artifacts surviving the transition from digital layout to physical paper.

Clues, metadata, marks, tables, images, and packaging instructions must remain usable after printing.

## Definition

Print Readiness is the degree to which a rendered artifact is suitable for home printing, professional printing, or physical assembly without losing evidence meaning or usability.

## Print readiness checks

| Check | Purpose |
|---|---|
| Page size | Confirms expected paper format. |
| Margins | Ensures content is not cut off. |
| Legibility | Ensures text and visual details remain readable. |
| Contrast | Ensures marks, stamps, and images print clearly. |
| Image resolution | Ensures evidence images remain inspectable. |
| Table integrity | Ensures rows and columns remain aligned. |
| Page breaks | Ensures important sections are not split badly. |
| Color dependency | Ensures clues do not depend only on color unless intended. |
| Assembly instructions | Ensures players can assemble package correctly. |

## Home printing

Home printing may introduce:

- lower contrast
- scaling issues
- missing bleed
- grayscale conversion
- paper variation
- image compression
- printer margin clipping

Artifacts intended for home printing SHOULD tolerate these conditions.

## Normative requirements

Player-facing artifacts SHOULD be readable when printed on common home printers.

Critical visual clues SHOULD NOT depend on fragile print details unless alternatives exist.

Print files SHOULD avoid placing evidence-critical information too close to page edges.

If color is required for interpretation, the print guide SHOULD state that clearly.

## Validation questions

- Does the artifact print without clipping?
- Are all critical clues readable on paper?
- Does grayscale printing affect interpretation?
- Are page breaks acceptable?
- Does the player know how to print or assemble it?

## Related

- CER-1001
- CER-1004
- CER-0410
- CER-0903
