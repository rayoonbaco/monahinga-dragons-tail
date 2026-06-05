# Pass 87 — Stale Inspect Panel Fix

Recorded: 2026-06-04 21:26:59

The Build card button was working, but the visible Inspect Evidence panel could stay open with old content after a new card was built. This made the app look broken because the decision card would update while the old inspect panel still referenced the previous question.

Pass 87 fixes that by removing any existing pass69EvidencePanel whenever a new decision card is rendered, then resetting the Inspect Evidence button to the closed state.

Manual test:

1. Build a data-center card.
2. Open Inspect Evidence.
3. Build an AI agents or warehouse card.
4. Confirm the old inspect panel closes.
5. Click Inspect Evidence again and confirm the evidence matches the current card.

Backup: C:\PROJECTS\DRAGON'S TAIL\backups\dragon_tail_pass87_stale_inspect_panel_fix_20260604_212659\app.js
