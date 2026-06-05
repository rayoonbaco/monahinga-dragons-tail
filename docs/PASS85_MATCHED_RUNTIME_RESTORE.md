# Pass 85 — Matched Runtime Restore

Recorded: 2026-06-04 21:15:46

The Build card button stopped working after a mismatched recovery attempt. The likely cause was restoring only `public/app.js` while `public/index.html`, `public/styles.css`, and/or the smoke test remained from a later incompatible patch state.

Pass 85 restored a matched known-good runtime set:

- `public/index.html`
- `public/app.js`
- `public/styles.css`
- `qa/smoke_test.py`

This restores the clean evidence-aware prototype without QA/test-button drift.

The current runtime keeps:

- the real Build card button ID: `runQuestion`
- evidence-aware custom scoring
- optional source notes
- evidence meter
- no QA test button clutter

Backed up previous local runtime to:

```text
C:\PROJECTS\DRAGON'S TAIL\backups\dragon_tail_pass85_before_matched_runtime_restore_20260604_211546
```

Product lesson:

> When a static app runtime drifts, restore the matched file set, not one file at a time.

Next steps:

1. Restart the local app.
2. Hard refresh with Ctrl+F5.
3. Confirm Build card works.
4. Confirm source notes change the card.
5. Only then push to Render.
