---
id: AUDIT-ALESUND-1996-CER-GAP
title: Ålesund 1996 case audit — CER adequacy and hardening recommendations
status: draft
source_example: examples/alesund-1996-rockmiljo/CER-case-bible.md
tags:
  - audit
  - v1-hardening
  - validation
  - examples
---

# Ålesund 1996 case audit — CER adequacy and hardening recommendations

## Purpose

This audit uses the fictional Ålesund 1996 rock-scene homicide case as a stress test for CER v1.0-rc. The goal is twofold:

1. Evaluate whether the case is structurally ready to become a playable document package.
2. Evaluate whether CER is sufficient to prevent plausible case-generation failures in a rich, socially realistic, multi-suspect case.

## Summary verdict

The case concept is strong and compatible with CER, but it is not yet render-ready. It needs structured case constants, document specs, critical fact redundancy checks, and timeline validation before player-facing documents are written.

CER catches the major structural risks, especially hidden truth separation, evidence traceability, discovery planning, information economy, and failure modes. However, this example exposes several areas where CER could be strengthened before v1.0.

## Case strengths against CER

### Hidden truth is explicit

The case defines killer, victim, method, motive, death window, crime scene, weapon, and cover-up mechanism. This supports CER's core requirement that documents must expose an underlying information system rather than inventing evidence during prose writing.

### Evidence is multi-modal

The case uses:

- audio transcript
- bar receipt
- contact sheet
- key list
- rig list
- forensic note
- scene sketch
- interviews
- business correspondence
- rehearsal notes

This gives the evidence graph enough variety to avoid a single-document solution.

### Red herrings have human reasons

Ragna, Eivind, Silje, Morten, Nikko, Kai, Arild, and Wenche each conceal something that is not murder. This makes them suspicious without making every suspect a cartoon villain.

### Discovery path can be modeled

The player path can be expressed as discovery nodes:

1. Original timeline is wrong.
2. Three venues form the movement puzzle.
3. Many witnesses lied for non-murder reasons.
4. Jonas has the strongest means/motive/opportunity combination.
5. The accident theory fails physically.
6. Other suspects can be eliminated.

## Case weaknesses requiring repair before document production

### 1. Timeline precision is not yet validated

The case depends on movement between Smutthullet, Zipper, Pizzaen, and possibly Løvenvoldgata. The current murder window is plausible but must be validated with walking times, entry points, and witness timing.

Required repair:

- Add exact or approximate coordinates.
- Add walking-time assumptions.
- Decide canonical post-murder movement for Jonas.
- Define whether witnesses estimate or know exact times.

Severity: Major until repaired.

### 2. Too much social texture could obscure solution logic

The case has 10+ actors and three venues. This creates realism, but may overload players if documents are long and undifferentiated.

Required repair:

- Cap most documents at one page.
- Provide a map/timeline aid.
- Give every document a declared role: evidence, context, misdirection, corroboration, elimination, or atmosphere.
- Avoid atmosphere-only documents unless they also reduce context cost.

Severity: Moderate.

### 3. Jonas risks becoming too obvious

Jonas currently has motive, access, technical means, contradiction, and psychological pressure. If all of that appears too early, players may solve by genre intuition rather than evidence.

Required repair:

- Make Jonas credible and professionally useful in early documents.
- Let Ragna, Eivind, Silje, and Morten carry strong but eliminable suspicion.
- Do not write Jonas as openly unstable.

Severity: Moderate.

### 4. Audio clue risks becoming a bottleneck

The Kai recording is strong. If it is the only clear proof that Jonas followed Martin, the case becomes brittle.

Required repair:

- Corroborate with Grete's statement.
- Corroborate with bar receipt.
- Corroborate with Silje contact sheet.
- Corroborate weakly with Nikko or Ragna.

Severity: Major if unaddressed; moderate if redundant.

### 5. Real-world grounding needs explicit boundaries

The case uses real Ålesund venues and a real historical scene context. This is valuable, but CER should require clear treatment of fiction vs real-world references.

Required repair:

- Use fictional names for suspects, witnesses, staff, and incriminating conduct.
- Use real venues as environmental anchors only.
- Keep real local figures out of fictional wrongdoing.
- Add source notes for real-world venue/context facts outside player evidence.

Severity: Major for publication safety if not handled.

## CER adequacy assessment

### CER strengths demonstrated by this case

CER is strong on the core architecture:

- The case as an information system.
- Truth graph before documents.
- Evidence traceability.
- Discovery graph and reasoning path.
- Validation before rendering.
- Failure mode vocabulary.

These concepts directly improve the case. Without CER, the case would likely become an atmospheric story with uncertain solvability. With CER, it becomes possible to define what every clue must do.

### CER gaps demonstrated by this case

#### Gap 1 — Character realism validation

CER should more explicitly test whether major actors are plausible people rather than trope bundles.

Recommended rule:

A major actor SHOULD have:

- ordinary life context
- a social role beyond suspect function
- at least one non-criminal interest or obligation
- a plausible reason for any lie or omission
- a motive that combines practical and emotional pressures
- at least one way their own perspective makes sense to them

A validator SHOULD flag actors who exist only as motive devices, caricatures, or red herring props.

#### Gap 2 — Social ecology of locations

The Ålesund case depends on the meaning of venues, not just their physical locations.

Recommended Location Model extension:

- location_role
- social_meaning
- access_model
- witness_density
- noise_profile
- transition_paths
- closing_routine
- regulars_vs_outsiders

This allows validators to reason about why a location creates opportunity, concealment, rumor, pressure, or contradiction.

#### Gap 3 — Real-world grounding and fiction boundary

CER should have an explicit rule for cases set in real places or based on local history.

Recommended rule:

A case using real-world anchors MUST distinguish:

- sourced environmental facts
- fictional case events
- fictional people
- real people referenced only as context
- prohibited fictionalization of real persons as criminals, liars, corrupt actors, or scandal participants unless legally cleared and intentionally biographical

#### Gap 4 — Red herring fairness rubric

CER lists red herrings as a topic and failure mode family, but needs a practical scoring rubric.

Recommended rubric:

A red herring is fair when:

- it arises from a real clue, not arbitrary suspicion
- it has a plausible suspect motive or opportunity
- it can be eliminated through available evidence
- it does not require hidden author knowledge to reject
- it reinforces the case theme or reasoning model
- it does not become more evidentially supported than the true solution

#### Gap 5 — Multi-suspect cognitive load heuristic

Ten actors can work, but only with player aids and disciplined document roles.

Recommended validator heuristic:

If major actors > 8 and major locations > 2, the package SHOULD include at least two of:

- map
- timeline aid
- suspect list
- relationship diagram
- venue movement chart
- optional hint ladder

If playtime target is under 90 minutes, warn when actors > 8 unless documents are sharply compressed.

#### Gap 6 — Case constants layer

The case needs a canonical source for dates, spellings, locations, and timing. CER should make this explicit.

Recommended Case Constants model:

- canonical title
- case date
- present-day reopen date
- location list
- route assumptions
- actor IDs/names/ages
- document date conventions
- death window
- weather/lighting assumptions
- venue status
- fictionalization boundary

Validators and renderers should read from constants to prevent continuity drift.

#### Gap 7 — Document role budget

CER says documents expose evidence, but validators should track document role and budget.

Recommended document roles:

- critical evidence
- corroboration
- contradiction
- elimination
- context
- misdirection
- atmosphere
- player aid
- facilitator-only

A package SHOULD warn if too many documents are atmosphere-only or if critical evidence appears in documents whose role is unclear.

## Recommended new CER hardening tasks

1. Add Character Realism Validation rule.
2. Add Social Ecology fields to Location Model.
3. Add Real-World Grounding and Fiction Boundary rule.
4. Add Red Herring Fairness rubric.
5. Add Multi-Suspect Cognitive Load heuristic.
6. Add Case Constants model.
7. Add Document Role Budget validation.
8. Add an example-driven validation checklist using the Ålesund case.

## Suggested release impact

These changes do not require a major conceptual rewrite of CER. They are v1-hardening additions that make the existing architecture more practical for high-quality case generation.

Priority before v1.0:

- High: Case Constants, Red Herring Fairness, Real-World Grounding
- Medium: Character Realism, Document Role Budget
- Medium/Low: Social Ecology fields, Multi-Suspect heuristic

## Conclusion

The Ålesund 1996 case is a good stress test because it is not a simple locked-room puzzle. It has social texture, real-world atmosphere, many suspects, overlapping motives, small lies, multiple locations, and a solution that depends on timeline, access, physical evidence, and motive.

CER is strong enough to diagnose the main risks. To ensure consistently good, playable, non-caricatured cases, CER should add explicit validators for character realism, real-world grounding, social ecology, red herring fairness, cognitive load, case constants, and document role budgets.
