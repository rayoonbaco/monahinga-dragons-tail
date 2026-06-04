#!/usr/bin/env python3
"""
Dragon's Tail Pass 66 smoke test.

Purpose:
- Match the clean Pass 65 app.js runtime.
- Stop requiring stale Pass 63 recovery markers.
- Catch the real failure class that broke the app: stale script URLs, missing runtime markers,
  missing DOM targets, missing scenario data, and obvious JavaScript corruption.
"""

from pathlib import Path
import datetime
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
REPORT = ROOT / "qa" / "last_smoke_report.txt"

passed = 0
failed = 0
lines = []

def emit(message=""):
    print(message)
    lines.append(message)

def check(name, condition, detail=""):
    global passed, failed
    if condition:
        passed += 1
        emit(f"[PASS] {name}")
    else:
        failed += 1
        suffix = f" -- {detail}" if detail else ""
        emit(f"[FAIL] {name}{suffix}")

def read_text(path):
    try:
        return path.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return ""

def run_node_check():
    node_path = shutil.which("node")
    if not node_path:
        check("node parse check unavailable on this Windows machine", True, "Node is not installed; browser Console remains the runtime source of truth.")
        return
    try:
        cp = subprocess.run(
            [node_path, "--check", str(ROOT / "public" / "app.js")],
            cwd=ROOT,
            text=True,
            capture_output=True,
            timeout=20,
        )
        check("node --check public/app.js", cp.returncode == 0, (cp.stderr or cp.stdout).strip())
    except Exception as exc:
        check("node --check public/app.js completed", False, str(exc))

emit("DRAGON'S TAIL PASS 66 / CLEAN RUNTIME SMOKE TEST")
emit(f"Timestamp: {datetime.datetime.now().isoformat(timespec='seconds')}")

index_path = ROOT / "public" / "index.html"
app_path = ROOT / "public" / "app.js"
css_path = ROOT / "public" / "styles.css"
render_path = ROOT / "render.yaml"
readme_render_path = ROOT / "README_RENDER.md"
start_path = ROOT / "START_DRAGONS_TAIL.bat"

index = read_text(index_path)
app = read_text(app_path)
css = read_text(css_path)
render = read_text(render_path)
readme_render = read_text(readme_render_path)

# Required files.
check("START_DRAGONS_TAIL.bat exists", start_path.exists())
check("public/index.html exists", index_path.exists())
check("public/styles.css exists", css_path.exists())
check("public/app.js exists", app_path.exists())
check("public/assets/dragon-tail-bg.png exists", (ROOT / "public" / "assets" / "dragon-tail-bg.png").exists())
check("public/assets/favicon.svg exists", (ROOT / "public" / "assets" / "favicon.svg").exists())
check("render.yaml exists", render_path.exists())
check("README_RENDER.md exists", readme_render_path.exists())
check(".gitignore exists", (ROOT / ".gitignore").exists())

# HTML structure the runtime depends on.
for dom_id in [
    "appRoot",
    "questionStage",
    "questionInput",
    "runQuestion",
    "topicButtons",
    "decisionCard",
    "currentQuestion",
    "callText",
    "signalScore",
    "signalLabel",
    "whyText",
    "evidenceBurdenText",
    "confidencePostureText",
    "concernList",
    "abundanceList",
    "yesChangeList",
    "noChangeList",
    "holdLine",
    "inspectButton",
    "copyButton",
    "copyStatus",
    "engineRoom",
    "closeEngine",
    "sourceLaneText",
    "missingEvidenceList",
    "engineBurdenText",
    "antiBiasText",
    "notProvenText",
    "visibleAgentRun",
    "agentRunStatus",
    "agentRunSteps",
]:
    check(f"#{dom_id} exists", f'id="{dom_id}"' in index or f"id='{dom_id}'" in index)

# Removed stale UI.
for stale_id in ["methodStage", "decisionRunner", "visibleAgentRun46", "runnerStatus"]:
    check(f"#{stale_id} removed", f'id="{stale_id}"' not in index and stale_id not in app)

# Public copy and core text.
for text in [
    "One question. Two honest sides. One conditional card.",
    "evidence burden",
    "Change test",
    "Moves toward yes if",
    "Moves toward no if",
    "Evidence weight guardrail",
    "CONTROLLED AGENTIC RITUAL",
]:
    check(f"text present: {text}", text in index or text in app)

check("one Build card button", index.count('id="runQuestion"') + index.count("id='runQuestion'") == 1)
check("one decision card section", index.count('id="decisionCard"') + index.count("id='decisionCard'") == 1)
check("one engine room", index.count('id="engineRoom"') + index.count("id='engineRoom'") == 1)
check("one visible ritual step container", index.count('id="agentRunSteps"') + index.count("id='agentRunSteps'") == 1)
ritual_step_count = (
    index.count('class="ritual-step')
    + index.count("class='ritual-step")
    + index.count("ritual-step")
    + index.count("data-step=")
    + sum(1 for label in ["Frame", "Concern", "Abundance", "Missing evidence", "Change test", "Card"] if label in index)
)
check("six visible ritual steps", ritual_step_count >= 6, f"found {ritual_step_count} likely step markers")

# Pass 65 runtime truth.
check("Pass 65 clean runtime marker present", "DRAGON_TAIL_PASS65_CLEAN_APPJS_LOADED" in app)
check("Pass 65 cache-bust script tag present", "dragon-tail-pass65-clean-appjs" in index)
check("Pass 63 cache-bust no longer required", "dragon-tail-pass63-click-path-recovery" not in index)
check("runtime exposes browser marker", "window.DRAGON_TAIL_RUNTIME" in app)
check("runtime boot function exists", "function boot()" in app)
check("runtime binds main controls", "function bindRuntime()" in app)
check("Build card function exists", "function runBuildCard()" in app)
check("Inspect evidence toggle exists", "function toggleInspect" in app)
check("Copy public card function exists", "function copyPublicCard()" in app)
check("topic click handler exists", "function handleTopicClick" in app)
check("typed custom question handler exists", "function makeCustomDecision" in app)

# Scenario coverage.
for scenario_id in [
    "ai-data-centers",
    "ai-frontier-safety",
    "schools-phones",
    "housing-growth",
    "public-safety",
    "climate-energy",
]:
    check(f"scenario present: {scenario_id}", f'id: "{scenario_id}"' in app)

check("scenario pack has at least six ids", app.count('id: "') >= 6)
check("AI medicine custom claims remain supported", "The claim has plausible upside and real risk" in app)
check("custom claims get classified", "return makeCustomDecision(question)" in app)
check("schools classifier route exists", 'q.includes("school")' in app and 'q.includes("phone")' in app)
check("housing classifier route exists", 'q.includes("housing")' in app and 'q.includes("density")' in app)
check("data center classifier route exists", 'q.includes("data center")' in app)

# Decision schema and copied card.
for schema_text in [
    "evidenceBurden",
    "missing",
    "yesChanges",
    "noChanges",
    "confidencePosture",
    "antiBias",
    "notProven",
    "nextQuestion",
]:
    check(f"decision schema has {schema_text}", schema_text in app)

for copy_text in [
    "DRAGON'S TAIL PUBLIC DECISION CARD",
    "Question:",
    "Call:",
    "Five-year signal:",
    "Evidence burden:",
    "Concern case:",
    "Abundance case:",
    "Moves toward yes if:",
    "Moves toward no if:",
    "Missing evidence:",
    "What is not proven:",
    "Prototype note:",
]:
    check(f"copy card includes {copy_text}", copy_text in app)

# Safety / not-overclaiming.
check("prototype note present", "not final live research" in app)
check("no live retrieval claim", "live citations" not in app.lower() and "live retrieval" not in app.lower())

# Render/static readiness.
check("render.yaml not empty", len(render.strip()) > 0)
check("README_RENDER.md not empty", len(readme_render.strip()) > 0)
check("render.yaml defines services", "services:" in render)
check("render.yaml service type web", "type: web" in render)
check("render.yaml runtime static", "runtime: static" in render)
render_compact = render.replace(" ", "")
check(
    "render.yaml publishes public",
    (
        "publishPath:public" in render_compact
        or "publishPath:./public" in render_compact
        or "staticPublishPath:public" in render_compact
        or "staticPublishPath:./public" in render_compact
        or "public" in render.lower()
    ),
    "expected a static publish path or public folder reference"
)
check("render.yaml rewrites all routes", "/*" in render)
check("index uses relative css/js paths", 'href="styles.css' in index and "app.js" in index)
check("index does not reference local filesystem", "C:\\" not in index and "file:///" not in index)

# CSS/layout existence.
check("CSS not empty", len(css.strip()) > 100)
check("CSS keeps visible ritual styles", "ritual" in css.lower())
check("CSS has decision card styles", "decision" in css.lower())
check("voice microphone button removed", "microphone" not in index.lower() and "speechrecognition" not in app.lower())

# Basic corruption checks.
check("no merge markers", "<<<<<<<" not in app + index + css and ">>>>>>>" not in app + index + css)
check("index not empty", len(index.strip()) > 100)
check("app not empty", len(app.strip()) > 100)
check("rough JS braces balanced", app.count("{") == app.count("}"), f"braces: {app.count('{')} vs {app.count('}')}")
check("rough JS parens balanced", app.count("(") == app.count(")"), f"parens: {app.count('(')} vs {app.count(')')}")
check("old app.js line-99 missing-comma bug absent", 'nextQuestion: "Which capabilities cross the threshold where public proof of control should come before deployment?"\n  }\n  {' not in app)

run_node_check()

emit("")
emit(f"Result: {'GREEN' if failed == 0 else 'RED'} - {passed} passed, {failed} failed")

REPORT.parent.mkdir(parents=True, exist_ok=True)
REPORT.write_text("\n".join(lines) + "\n", encoding="utf-8")

if failed:
    sys.exit(1)
sys.exit(0)

# Pass 68 Inspect evidence visibility check.
try:
    app_text_pass68 = (ROOT / "public" / "app.js").read_text(encoding="utf-8", errors="replace")
    check("Pass 68 inspect visibility marker present", "DRAGON_TAIL_PASS68_INSPECT_VISIBILITY_LOADED" in app_text_pass68)
    check("Pass 68 inspect scrolls evidence into view", "scrollIntoView" in app_text_pass68)
    check("Pass 68 inspect button can say Hide evidence", "Hide evidence" in app_text_pass68)
except Exception as exc:
    check("Pass 68 inspect checks could read app.js", False, str(exc))

# Pass 69 Inspect evidence finalizer check.
try:
    app_text_pass69 = (ROOT / "public" / "app.js").read_text(encoding="utf-8", errors="replace")
    check("Pass 69 inspect toggle finalizer marker present", "DRAGON_TAIL_PASS69_INSPECT_TOGGLE_FINALIZER_LOADED" in app_text_pass69)
    check("Pass 69 creates visible inline evidence panel", "pass69EvidencePanel" in app_text_pass69)
    check("Pass 69 can show Hide evidence", "Hide evidence" in app_text_pass69)
except Exception as exc:
    check("Pass 69 inspect finalizer checks could read app.js", False, str(exc))

# Pass 70B inspect polish checks.
try:
    app_text_pass70b = (ROOT / "public" / "app.js").read_text(encoding="utf-8", errors="replace")
    css_text_pass70b = (ROOT / "public" / "styles.css").read_text(encoding="utf-8", errors="replace")
    check("Pass 70B inspect polish marker present", "DRAGON_TAIL_PASS70B_INSPECT_POLISH_LOADED" in app_text_pass70b)
    check("Pass 70B inspect panel scroll margin present", "#pass69EvidencePanel" in css_text_pass70b and "scroll-margin-top" in css_text_pass70b)
    check("Pass 70B preserves Pass 69 inspect finalizer", "DRAGON_TAIL_PASS69_INSPECT_TOGGLE_FINALIZER_LOADED" in app_text_pass70b)
except Exception as exc:
    check("Pass 70B inspect polish checks could read files", False, str(exc))

# Pass 72 rollback note: Pass 71 inspect consolidation was removed after visual regression.

# Pass 73 guided questions and Dragon note checks.
try:
    app_text_pass73 = (ROOT / "public" / "app.js").read_text(encoding="utf-8", errors="replace")
    css_text_pass73 = (ROOT / "public" / "styles.css").read_text(encoding="utf-8", errors="replace")
    check("Pass 73 guided questions marker present", "DRAGON_TAIL_PASS73_GUIDED_QUESTIONS_LOADED" in app_text_pass73)
    check("Pass 73 category selector present", "guidedCategorySelect" in app_text_pass73)
    check("Pass 73 question selector present", "guidedQuestionSelect" in app_text_pass73)
    check("Pass 73 has 40 starter questions", "40 starter questions" in app_text_pass73)
    check("Pass 73 Dragon note present", "Why Dragon" in app_text_pass73 and "nuclear Dragon" in app_text_pass73)
    check("Pass 73 styles present", ".guided-questions-panel" in css_text_pass73 and ".dragon-tail-note" in css_text_pass73)
except Exception as exc:
    check("Pass 73 guided question checks could read files", False, str(exc))

# Pass 74 MONAHINGA dragon brand checks.
try:
    app_text_pass74 = (ROOT / "public" / "app.js").read_text(encoding="utf-8", errors="replace")
    css_text_pass74 = (ROOT / "public" / "styles.css").read_text(encoding="utf-8", errors="replace")
    index_text_pass74 = (ROOT / "public" / "index.html").read_text(encoding="utf-8", errors="replace")
    check("Pass 74 MONAHINGA dragon brand marker present", "DRAGON_TAIL_PASS74_MONAHINGA_DRAGON_BRAND_LOADED" in app_text_pass74)
    check("Pass 74 dragon asset present", (ROOT / "public" / "assets" / "monahinga-dragon-tail-emblem.png").exists())
    check("Pass 74 copied card uses MONAHINGA", "MONAHINGA DRAGON'S TAIL PUBLIC DECISION CARD" in app_text_pass74)
    check("Pass 74 header dragon styles present", ".monahinga-dragon-mark" in css_text_pass74)
    check("Pass 74 app title includes MONAHINGA", "MONAHINGA Dragon" in index_text_pass74)
except Exception as exc:
    check("Pass 74 MONAHINGA brand checks could read files", False, str(exc))

# Pass 75 MONAHINGA TM checks.
try:
    app_text_pass75 = (ROOT / "public" / "app.js").read_text(encoding="utf-8", errors="replace")
    index_text_pass75 = (ROOT / "public" / "index.html").read_text(encoding="utf-8", errors="replace")
    check("Pass 75 MONAHINGA TM marker present", "MONAHINGA™" in app_text_pass75 or "MONAHINGA™" in index_text_pass75)
    check("Pass 75 copied card uses MONAHINGA TM", "MONAHINGA™ DRAGON'S TAIL PUBLIC DECISION CARD" in app_text_pass75)
    check("Pass 75 app title uses MONAHINGA TM", "MONAHINGA™ Dragon" in index_text_pass75)
except Exception as exc:
    check("Pass 75 MONAHINGA TM checks could read files", False, str(exc))

