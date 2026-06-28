---
id: CER-0507
title: Autopsy Report
status: draft
version: 0.1
tags:
  - document-types
  - forensics
  - autopsy
---

# Autopsy Report

An Autopsy Report documents post-mortem examination findings, cause of death, manner of death where applicable, and relevant medical observations.

## Purpose

Autopsy reports support method reasoning, timeline estimation, injury interpretation, toxicological follow-up, and contradiction with witness or suspect claims.

They are high-authority documents and must be handled carefully to avoid solving the case too directly.

## When to use

Use an Autopsy Report when the case depends on:

- cause of death
- injury pattern
- time of death estimate
- body condition
- medical contradiction
- toxicology ordering
- concealed method
- staged scene detection

## Typical investigative roles

| Role | Suitability |
|---|---|
| Core clue | High |
| Corroborator | High |
| Contradiction source | Medium |
| Context provider | Medium |
| Red herring | Medium |
| Late confirmation | High |

## Typical evidence exposure

An Autopsy Report may expose:

- cause of death
- approximate time of death
- injuries
- absence of expected injury
- signs of poisoning
- stomach contents
- medical implants or scars
- defensive wounds
- toxicology samples taken
- uncertainty in findings

## Realism constraints

The report SHOULD use clinical language.

It SHOULD distinguish findings from interpretation.

It SHOULD not include investigative conclusions outside medical scope.

Uncertainty SHOULD be represented when estimates are imprecise.

## Required metadata

A specification SHOULD include:

- autopsy ID
- decedent actor ID
- pathologist
- examination date and time
- body received date and time
- cause of death
- manner of death if determined
- samples collected
- related forensic reports

## Rendering guidance

Autopsy reports are usually formal and structured.

They MAY include:

- medical examiner header
- case number
- sections for external and internal examination
- specimen table
- conclusion section
- signature block
- appendix references

## Validation checks

- Does the report stay within medical examiner knowledge?
- Are times consistent with the Timeline Graph?
- Are conclusions supported by findings?
- Does it avoid overdetermining the culprit?
- Are related toxicology or lab reports consistent?

## Related

- CER-0202
- CER-0302
- CER-0404
- CER-0500
