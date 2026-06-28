---
id: CER-0606
title: Suspicion Model
status: draft
version: 0.1
tags:
  - discovery-system
  - suspicion
  - suspects
---

# Suspicion Model

The Suspicion Model describes how evidence changes perceived suspicion across suspects or theories.

## Purpose

A good homicide investigation should not make the intended culprit uniquely obvious too early unless the case is deliberately designed that way.

The Suspicion Model helps designers balance suspicion and create fair shifts in player attention.

## Definition

Suspicion is the player-facing perceived likelihood that an actor, theory, or explanation is relevant to the solution.

Suspicion is not the same as truth.

## Suspicion dimensions

Suspicion MAY be affected by:

| Dimension | Description |
|---|---|
| Means | Ability, tool, knowledge, or access. |
| Motive | Reason, pressure, resentment, fear, gain, or belief. |
| Opportunity | Time, place, access, privacy, or sequence. |
| Behavior | Evasion, inconsistency, emotion, or unusual action. |
| Relationship | Hidden or public connection to other actors. |
| Evidence contact | Link to object, location, trace, or record. |
| Claim reliability | Whether claims hold up against evidence. |

## Suspicion curve

A suspect may have a suspicion curve across the play experience:

```text
Early → Middle → Late → Solution
Low     Medium    High    Confirmed
```

Wrong suspects may also rise and fall.

This is desirable when the evidence supports fair evaluation.

## Balancing suspicion

A medium or hard case SHOULD provide more than one plausible suspect or theory during early and middle discovery.

A wrong suspect SHOULD usually be suspicious for a reason, not merely because the document says they are suspicious.

The intended culprit SHOULD become most supported through cumulative reasoning, not through early isolated certainty.

## Normative requirements

Major suspects SHOULD have suspicion profiles.

Suspicion SHOULD be tied to evidence exposures or claims.

A suspect SHOULD NOT be suspicious only because of authorial framing.

A wrong suspect SHOULD have an elimination path if the case intentionally directs attention toward them.

## Validation questions

- Does one suspect become obvious too early?
- Are wrong suspects plausible for fair reasons?
- Does suspicion change when new evidence is considered?
- Are means, motive, and opportunity distributed across suspects?
- Can players explain why suspicion rises or falls?

## Related

- CER-0311
- CER-0602
- CER-0604
- CER-0310
