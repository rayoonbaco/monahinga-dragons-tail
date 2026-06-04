# Dragon's Tail / Draw Twice - Working First Pass

This version is intentionally dependency-light.

It does NOT require Node.js.
It will try to start a local URL with Python on port 8787.
If Python is not available, it will open the app directly as a local HTML file.

## Run

Double-click:

START_DRAGONS_TAIL.bat

Preferred URL:

http://localhost:8787

Fallback:
public/index.html opens directly in your browser.

## Why this version exists

The previous version depended on Node.js. If Node was missing or the server exited, localhost refused to connect.
This rebuild moves the first-pass engine into the browser so the project always opens.

## Core capability

The important capability is the evidence engine:
- one AI question
- fear case versus abundance case
- many source categories
- current / near-future / five-year horizons
- ranked source lanes
- source links
- five-year value rating
- confidence rating

This is still a first pass. The next pass should connect live search APIs so the source lanes are automatically fetched, deduplicated, quoted, and cited.


## Background image system

This pass adds the Dragon's Tail cinematic background behind the whole app.

Current background file:

public/assets/dragon-tail-bg.png

To swap the background later, replace that file with another PNG using the same name.

Design rule:
- Use no-text cinematic art as the app background.
- Use poster images with big words for marketing and LinkedIn.
- Keep the evidence table darker than the rest so the information engine stays readable.


## Cinematic Hero Pass

This pass makes the top screen work like a poster-first decision room:

- the Dragon's Tail background is more visible
- the first screen is taller and more cinematic
- the main panels are more transparent
- the input becomes a command-console overlay
- the evidence engine remains darker and more readable below the fold

Refresh with Ctrl+F5 if the browser keeps the older style.


## Composition Pass

This pass inches the interface toward a five-years-ahead agent feel:

- more visible cinematic background
- smaller first-screen panels
- stronger poster moment at the top
- compact command-console input
- more breathing room for the Dragon's Tail core image
- darker tool section below for real evidence work

Refresh with Ctrl+F5 after installing.


## Command Console Pass

This pass tightens the first-screen copy and makes the input feel more like the command console of the decision room.

Changes:
- hero headline: "Before the next cut, see both sides."
- top-right label: "Evidence Engine v0.1"
- input label: "Enter the question on the table."
- button: "Open the Decision Room"
- added a short console note under the button
- added subtle console texture to the input panel

Refresh with Ctrl+F5 after installing.


## Decision Room Pass

This pass begins shaping the section below the hero into the actual agent experience.

Changes:
- adds a "Decision Room" intro section after the hero
- renames the core lanes to Concern Lane, Five-Year Signal, and Abundance Lane
- improves the question section labels
- adds visual source-lane / HUD texture to the decision cards
- keeps the evidence engine practical and readable


## Evidence Engine Pass

This pass starts the real engine layer.

Added:
- source-lane summary chips
- Daghlian Protocol check: no single source/category carries the verdict
- Slotin Protocol check: confidence must survive assumption stress
- Missing Lanes area
- first-pass honesty notice
- intelligence-board styling for the evidence table

This is still not live retrieval yet. It maps, ranks, and organizes source lanes. The next major capability pass is retrieval + citation extraction.


## QA / Smoke Test Harness Pass

This pass adds a local smoke-test harness so the project can move faster without using Ray as the screenshot mule after every patch.

Run:

qa\SMOKE_TEST_DRAGONS_TAIL.bat

or the root shortcut:

SMOKE_TEST_DRAGONS_TAIL.bat

The test checks:
- required files and assets
- HTML anchors and IDs
- CSS cache-busting and background references
- JavaScript bindings
- Evidence Engine DOM elements
- Daghlian Protocol
- Slotin Protocol
- Missing Lanes
- rough JavaScript brace balance

If the result is GREEN, the structure is safe to inspect visually or keep building.
If RED, send qa\last_smoke_report.txt back to ChatGPT.


## Sticky Smoke Test Pass

This pass improves the QA workflow so the smoke-test window does not vanish.

Use:

SMOKE_TEST_DRAGONS_TAIL.bat

The smoke test now:
- opens in a persistent Command Prompt window
- opens qa\last_smoke_report.txt in Notepad automatically
- prints RESULT: GREEN or RESULT: RED
- stays open until a key is pressed

If you ever need to reopen the latest report:

OPEN_LAST_SMOKE_REPORT.bat


## Evidence Engine v0.2

This version deepens the engine.

Added:
- 12 new evidence categories, including infrastructure, emissions, utility rates, supply chain, cybersecurity, competition, governance, resilience, community benefit, opportunity cost, terminal value, and public trust
- source families such as primary records, scholarly/technical, government/regulator, market, company, local/community, opposition/watchdog, media, international, and historical
- expanded retrieval lanes in addition to primary lanes
- source-family board
- lane-depth board
- table now shows source family tags
- smoke test updated for v0.2 structures

The engine now maps more than 120 lanes for the default data-center question and is designed to expand further when live retrieval is wired.


## Evidence Engine v0.3

This version adds the first compression and retrieval-adapter layer.

Added:
- Public Card Preview below the decision lanes
- Copy Card button
- strongest concern / counterpoint / missing-middle / change-the-call fields
- retrieval queue board for the future live adapter
- Red Team Gate, Blue Team Gate, and Archivist Gate
- v0.3 smoke-test checks for the new structures

This still does not fake live research. It prepares the next layer: pull, read, dedupe, cite, score, then compress.


## Evidence Engine v0.3.1

This version is a layout precision pass.

Added:
- paired Concern Lane / Abundance Lane category ordering
- matching pair markers on the lane cards
- consistent minimum card height so opposing categories line up more cleanly
- smoke-test coverage for paired lane alignment

Purpose:
The two sides should feel like they are being compared directly across the table, not drifting independently.


## Evidence Engine v0.3.2

This version tightens visual diagnosis across the Concern Lane and Abundance Lane.

Added:
- exact paired-card height matching on desktop
- matching category cards now use the tallest card height for both sides
- resize listener recalculates paired heights when the browser changes size
- smoke-test coverage for paired-card height matching

Purpose:
A user should be able to scan directly left-to-right across the table and compare the same category without visual drift.


## Evidence Engine v0.4

This version exposes the scoring anatomy before live retrieval is wired.

Added:
- Scoring Anatomy board
- top lane score breakdowns
- visible Evidence Weight formula
- credibility, relevance, recency, specificity, decision impact, and bias adjustment factors
- confidence gate with model-confidence label
- compact score anatomy badges inside the source lane table
- smoke-test coverage for v0.4 structures

Purpose:
Before the engine pulls live sources, the app now shows where the evidence math will live and how each lane earns weight.


## Evidence Engine v0.5

This version adds the Executive Synthesis Layer.

Added:
- third-column style synthesis board below the paired lanes
- paired category summaries that weigh Concern Lane and Abundance Lane together
- directional synthesis labels:
  - leans concern
  - mixed
  - leans abundance
  - build with conditions
- public card now uses the strongest synthesis row for the bottom line and change-the-call language
- smoke-test coverage for the executive synthesis layer

Purpose:
The viewer can now scan left-to-right: concern, abundance, and the agent's objective weighing of what both sides mean together.


## Evidence Engine v0.6

This version adds the Source Lens / Provenance Layer.

Added:
- Source Lens section
- staged source records from the highest-priority lanes
- provenance checklist: title, publisher, date, source family, claim, contradiction, weight
- source record cards with claim extraction placeholders
- Provenance Gate, Contradiction Gate, and Public Proof Gate
- smoke-test coverage for source record structures

Purpose:
The engine now has the evidence container that live retrieval will fill: each lane can become traceable, scored, explainable source records.


## Evidence Engine v0.7

This version adds the Live Retrieval Drill v0.1.

Added:
- staged live retrieval pull board
- top 12 priority pulls from the current source-lane map
- source-family-specific retrieval instructions
- direct open links for each priority pull
- retrieval status labels: ready, queued, watch
- copy-card validity note that retrieval is staged, not falsely completed

Purpose:
This pass bridges the static evidence engine to the future live retrieval adapter without pretending citations have already been pulled and read.


## Evidence Engine v0.8

This version adds the Criticality Protocol.

Added:
- Criticality Protocol board
- Daghlian Check: prevents evidence being stacked too tightly around one source family, category, or narrative
- Slotin Check: prevents confidence from being held apart by one fragile assumption
- Demon Core / The Dragon card: symbolic reminder that power is not permission
- safeguard score and label
- historical images embedded as project assets
- public-card validity note updated for v0.8

Purpose:
This pass embeds the moral and methodological safeguard layer without crowding the main UI. It honors the Los Alamos lesson as a decision rule: courage matters, but no answer leaves the room until the safeguards are stronger than the excitement.


## Evidence Engine v0.9

This version is the Visual Integration / Launch Polish pass.

Added:
- About button and modal explaining Dragon's Tail in launch language
- hero time-horizon chips: Current, Near-future, Five-year horizon
- launch strip: Source lanes, Time horizons, Method, Output
- Copy Brief button for an executive summary export
- v0.9 visual target asset included when available
- tightened public-facing framing around the Criticality Protocol

Purpose:
This pass converges the product toward launch: compelling, not overwhelming; cinematic, but useful; morally grounded, but still an evidence engine.


## Evidence Engine v0.9.1

This version is the Flow Clarity pass.

Added:
- sticky section navigation
- renamed yellow button to Build the Decision Room
- button now rebuilds and scrolls to the first result
- flow guide explaining the four-step experience
- section-purpose notes
- back/skip navigation rows between major sections
- How to Use modal
- smoke-test coverage for the new flow elements

Purpose:
Make the app easier to understand without reducing its depth. Every button should feel useful. Every section should explain why it exists.


## Evidence Engine v0.9.2

This version is the Cinematic Criticality / Bio Integration pass.

Added:
- Criticality intro explaining why Daghlian, Slotin, and the Demon Core are in the product
- cinematic criticality image panel when available
- Bio + project link buttons for Harry Daghlian, Louis Slotin, and the Demon Core
- modal biographies with back-to-Criticality navigation
- smoke-test coverage for the bio modal and criticality intro

Purpose:
Make the historical layer meaningful and clear without crowding the main decision workflow.


## Evidence Engine v0.9.2.1

This version replaces the raw Wikipedia-style reference images in the Criticality Protocol cards.

Added:
- cinematic crop for Harry Daghlian
- cinematic crop for Louis Slotin
- cinematic crop for the Demon Core
- cleaned Criticality Protocol labels
- retained the cinematic trio image as the intro panel

Purpose:
The historical layer now feels visually native to Dragon's Tail instead of pasted in from reference material.


## Evidence Engine v0.9.3

This version fixes top-button behavior and clarifies output actions.

Added:
- robust modal bindings for About and How to Use
- Download Brief now saves a .txt executive brief instead of copying silently
- Copy Card renamed to Copy Card Text
- output explainer added to the Public Card section
- button labels and feedback cleaned up

Purpose:
Buttons must do obvious things. Outputs must be clear: one short public card to copy, one fuller executive brief to download.


## Evidence Engine v0.9.4

This version is the Launch Tightening / Compression pass.

Added:
- Reading Order section
- Launch Readiness Check
- clearer purpose labels
- collapsible deep engine sections
- cleaner navigation labels
- readiness indicators for public launch criteria

Purpose:
Keep the first experience easy to understand while preserving the full evidence engine underneath.


## Evidence Engine v0.9.5

This version fixes the retrieval drill so it does not surprise the user.

Added:
- Stage Top 12 Pulls renamed to Preview Source Pulls
- button now stages source pulls only; it does not open Google automatically
- each source-pull row has explicit Open Search, Copy Query, and Mark Retrieved controls
- retrieval control note added
- retrieval rows now show the exact query before the user opens anything

Purpose:
Keep live-retrieval preparation visible and useful without hijacking the browser.


## Evidence Engine v0.9.6

This version polishes the public output layer.

Added:
- Public Output Preview section
- clearer Short Card / Executive Brief / Evidence Trail distinction
- Copy Card Text now uses a cleaner public-card structure
- Download Brief now produces a Markdown executive brief
- executive brief includes question, better question, five-year signal, model confidence, criticality, synthesis, score movers, change conditions, bottom line, and validity note

Purpose:
Make the product output feel launch-ready and understandable: one short card to share, one fuller brief to download, evidence still inspectable underneath.


## Evidence Engine v0.9.7

This version is the Final UX Audit pass.

Added:
- Prototype Honesty note near the top
- Final UX Audit panel
- first-minute comprehension checks
- launch/distribution notes embedded under docs/AUDIENCE_AND_LINKEDIN_STRATEGY_NOTES.md
- copy tightening for the main path

Purpose:
Crystallize the product into a clear first-time experience before Render readiness.


## Evidence Engine v0.9.8

This version explains the Five-Year Signal.

Added:
- Five-Year Signal Explained section
- visible score scale from 0-100
- plain-English explanation of what a score like 75 means
- output text now labels the score as directional, not predictive

Purpose:
The color and number should never feel mysterious. A visitor should immediately understand what the signal means and what it does not mean.


## Evidence Engine v0.9.9

This version is the Human Decision Funnel pass.

Added:
- Human Decision Funnel
- Judgment Distribution visualization
- Plain-English Decision panel
- Plain-English Key modal
- SIG labels renamed to Importance
- source/retrieval/scoring jargon softened into normal-language labels

Purpose:
Show normal humans how the information moves from question to decision without making them feel trapped inside the machine.

## Evidence Engine v0.9.10

This version adds the Dragon Waterfall Synthesis.

Added:
- Dragon-style waterfall synthesis panel
- concern/downside bars
- abundance/upside bars
- central five-year signal core
- clearer bottom-line risk / condition / change-call row
- north-star visual saved as public/assets/dragon-waterfall-north-star.png when available

Purpose:
Make the large evidence engine feel like a cinematic decision instrument: the engine remains underneath, but normal users now see how the forces combine into a judgment.

## Dragon Waterfall Launch Polish v1.0.0

This pass brings the Executive Synthesis waterfall closer to the north-star image without removing the dragon graphics.

Added:
- full north-star dragon waterfall art preserved as the synthesis backdrop
- larger circular Five-Year Signal treatment
- Concern Case and Abundance Case score cards
- stronger evidence waterfall axis with -100 / 0 / +100 framing
- bottom executive strip for risks, success conditions, confidence, criticality, and change-the-call triggers
- dynamic confidence and criticality values wired into the waterfall after analysis
- cache-buster updated to `dragon-waterfall-v1000`

Run:

START_DRAGONS_TAIL.bat

Then open:

http://localhost:8787

QA:

SMOKE_TEST_DRAGONS_TAIL.bat

Expected result:

RESULT: GREEN

## Dragon's Tail Pass 42 - Masterpiece v1 reset

This pass converts the public app into a simplified decision-card system:

- public-first opening screen
- one clear question
- two honest sides
- one conditional card
- concise Los Alamos method framing
- evidence engine hidden behind Inspect
- no legacy builder-toggle clutter

The deep engine concept remains, but normal users see the card first.

## Dragon's Tail Pass 43 - One-screen masterpiece layout

This pass compresses the v1 public experience into a two-column desktop opening view:

- left side: core promise, Los Alamos lesson, question input, method
- right side: decision card, concern case, abundance case, change-the-call test, actions
- evidence engine remains inspectable but hidden by default

The goal is for a normal viewer to understand the product without scrolling through the engine room.

## Dragon's Tail Pass 44 - Decision Room Running

This pass makes the public card feel agentic without adding dashboard clutter.

When the user clicks **Build card**, Dragon's Tail now visibly runs a compact six-step decision-room ritual:

1. Frame
2. Concern
3. Abundance
4. Missing evidence
5. Change test
6. Card

The card updates after the sequence completes. This demonstrates controlled AI orchestration: powerful enough to think in roles, restrained enough to stay conditional and inspectable.

## Render deployment

This project is Render-ready as a static site. Use the root `render.yaml` Blueprint, or create a Static Site manually with:

- Build Command: `echo "Static site - no build required"`
- Publish Directory: `public`

Before deploying, run `qa\SMOKE_TEST_DRAGONS_TAIL.bat` and verify the app locally with `START_DRAGONS_TAIL.bat`.

## Pass 50: Decision Intelligence Upgrade

Dragon's Tail is a public decision-room prototype. It does not claim to perform final live research yet. Pass 50 strengthens the reasoning layer so each card names the evidence burden, shows the strongest concern and abundance cases, separates yes/no change tests, and explains what remains unproven until live retrieval and citations are added.

Core product thesis: Dragon's Tail does not tell people what to believe; it shows what would have to be true for a belief to become responsible.


## Pass 51 - Evidence Weight Guardrail

Dragon's Tail now makes the anti-fake-balance rule explicit: two honest sides do not mean equal evidentiary weight. The public card stays compressed, while the inspect engine and copied card carry the fuller reasoning: evidence burden, confidence posture, missing evidence, and which source lanes should outweigh slogans or confidence theater.




## Pass 54 - Remove Voice Input / Restore Trust

The microphone affordance was removed after real-world testing showed browser speech recognition can capture background audio and make the product feel less reliable. Dragon's Tail now returns to a clean typed-question input so the public surface stays serious, predictable, and focused on decision quality.


## Pass 55 - Evidence Engine Upgrade

This pass strengthens the Inspect Evidence layer without adding public-screen clutter.

The public card remains the compressed executive layer. Inspect Evidence now explains:
- source lanes to inspect;
- what each lane is supposed to prove or disprove;
- missing evidence;
- contradiction check;
- evidence weight guardrail;
- what is not proven yet;
- the next live-retrieval research layer.

The app remains honest: this is still a prototype/source-lane reasoning scaffold until live retrieval, source extraction, contradiction checks, and citations are connected.

## Pass 56 - Inspect Engine Hierarchy

This pass keeps the public decision card compressed and improves the Inspect Evidence layer.

Changes:
- makes Source lanes the primary inspection card
- labels Missing evidence and Evidence burden as supporting proof tests
- demotes contradiction, evidence weight, not-proven, and next-research details into compact secondary cards
- keeps all Pass 55 evidence intelligence while making the inspect panel easier to scan
- adds smoke-test checks for the new inspect hierarchy

Product rule:
Public card stays simple. Inspect carries the research machinery. Copy carries the full shareable reasoning.


## Pass 57 - Copy Public Card Polish

This pass improves the shareable output behind Copy public card without adding public-screen clutter.

The copied card now reads like a public reasoning artifact: question, conditional call, signal, frame, why, evidence burden, evidence weight, concern case, abundance case, yes/no change test, missing evidence, what is not proven yet, confidence posture, public next question, and an explicit prototype note.

Product rule:
The screen stays compressed. Inspect carries the research machinery. Copy carries the full shareable reasoning object.

## Pass 58 - Demo Scenario Pack

This pass expands the built-in demo questions from four to six public decision scenarios without adding a new dashboard or changing the public-card structure.

Added sample scenarios:

- AI data centers
- Jobs and wages
- Medical abundance
- Safety vs speed
- Schools and phones
- Housing growth

Each scenario has its own frame, evidence burden, concern case, abundance case, missing evidence, evidence-weight posture, source lanes, contradiction check, change test, and copied-card output. The goal is to show that Dragon's Tail is a reusable public reasoning engine, not a one-topic demo.

## Pass 60 - Emergency JS/button recovery
Restored the missing comma between the Safety vs speed and Schools and phones scenario objects. This repaired app.js parsing so Build card, topic chips, Inspect evidence, Hide evidence, and Copy public card can bind normally again. The smoke test now checks that exact scenario boundary.


## Pass 61 - Browser Runtime Recovery

Pass 61 adds a cache-busted app.js URL and a browser runtime marker so the Console can prove the current JavaScript loaded. It also repairs the Safety-to-Schools scenario boundary and makes the smoke test explicit when Node is unavailable on Windows.
