# Dragon's Tail Render Deployment

Dragon's Tail is currently a dependency-light static public decision-room app. The Render-ready path is the `public/` folder.

## Recommended Render setup

Use the root `render.yaml` Blueprint if you are deploying from GitHub.

Expected Render service shape:

- Service type: Static site
- Runtime: static
- Build command: `echo "Static site - no build required"`
- Publish directory: `./public`
- Rewrite route: `/*` to `/index.html`

## Manual Render setup

If you do not use the Blueprint, create a new Static Site in Render and use:

```text
Build Command: echo "Static site - no build required"
Publish Directory: public
```

## Pre-deploy checklist

Run this locally before pushing to GitHub:

```bat
qa\SMOKE_TEST_DRAGONS_TAIL.bat
START_DRAGONS_TAIL.bat
```

Then click Build card and verify:

- one six-step controlled agentic ritual is visible
- the lower 1 / 2 / 3 method strip is gone
- the decision card updates
- Inspect evidence opens the evidence engine
- Copy public card works or shows a clear fallback message

## Current honesty note

This version is public-first and static. It does not yet perform live retrieval. Scores and lanes should be treated as prototype/source-lane signals until retrieval, citations, and extraction are wired in.
