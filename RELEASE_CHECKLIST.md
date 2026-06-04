# Dragon's Tail Release Checklist

## Current release posture

This project is ready for a local visual validation and Render static-site handoff when the smoke test is green.

## Before GitHub / Render push

1. Run `qa\SMOKE_TEST_DRAGONS_TAIL.bat`.
2. Run `START_DRAGONS_TAIL.bat`.
3. Open `http://localhost:8787`.
4. Hard-refresh the browser with `Ctrl+F5`.
5. Click **Build card**.
6. Click **Inspect evidence**.
7. Click **Hide evidence**.
8. Click **Copy public card**.

## Expected browser behavior

- The public card stays short and readable.
- The evidence engine opens only when inspected.
- The copy action returns a useful public-facing card or a clear fallback message.
- The app does not claim live research, live citations, or final certainty.

## Render handoff

Render should publish `./public` from `render.yaml` as a static web service. The app has no Node build step.
