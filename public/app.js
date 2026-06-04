// Dragon's Tail Pass 65 - clean runtime rebuild
// Purpose: replace the polluted app.js with a small, parse-safe, public-first runtime.
// Browser marker: DRAGON_TAIL_PASS65_CLEAN_APPJS_LOADED

(function () {
  "use strict";

  const PASS_MARKER = "DRAGON_TAIL_PASS65_CLEAN_APPJS_LOADED";

  const SCENARIOS = [
    {
      id: "ai-data-centers",
      label: "AI data centers",
      question: "Are AI data centers worth the cost?",
      call: "Build with conditions.",
      score: 65,
      signalLabel: "Positive but conditional",
      why: "Meaningful upside is plausible, but local burden, energy, water, and transparency gaps must be closed.",
      evidenceBurden: "Prove the public burden is bounded, visible, and matched by durable public benefit.",
      confidencePosture: "Conditional prototype signal until source lanes are checked.",
      concern: [
        "Power, water, and land burdens can land locally while benefits leave the community.",
        "Jobs and tax-base claims can be overstated without enforceable commitments.",
        "Opaque energy deals can weaken public trust."
      ],
      abundance: [
        "Compute infrastructure can support science, logistics, medicine, and local digital capacity.",
        "Good siting can pair new load with grid upgrades and public revenue.",
        "Clear community-benefit terms can turn private buildout into shared upside."
      ],
      yesChanges: [
        "Binding power, water, and emissions limits are published.",
        "Community benefits are enforceable, not promotional.",
        "Independent reporting shows net public value over time."
      ],
      noChanges: [
        "Costs shift to ratepayers or local infrastructure.",
        "Water, land, or power impacts exceed the promised guardrails.",
        "The operator resists public transparency."
      ],
      hold: "Hold the call conditional until missing evidence is checked.",
      lanes: "Utility filings, water permits, grid interconnection data, tax agreements, jobs data, local public records, operator disclosures.",
      missing: [
        "Power and water load by phase.",
        "Public cost exposure and ratepayer risk.",
        "Enforceable community-benefit terms."
      ],
      antiBias: "Do not treat hype about AI growth as proof of local benefit. Demand local numbers.",
      notProven: "This card does not prove every data center is good or bad. It defines the conditions that would change the call.",
      nextQuestion: "Which public costs are capped, and who pays if the caps fail?"
    },
    {
      id: "ai-frontier-safety",
      label: "Frontier AI safety",
      question: "Should frontier AI development slow down?",
      call: "Slow the risky edges.",
      score: 54,
      signalLabel: "Contested",
      why: "Capability growth can produce real benefits, but frontier deployment needs stronger auditability, incident reporting, and accountability before confidence hardens.",
      evidenceBurden: "Prove that risky capabilities are tested, monitored, governed, and reversible before deployment incentives outrun safeguards.",
      confidencePosture: "Low-medium; the correct answer changes by capability tier and evidence quality.",
      concern: [
        "Power can concentrate before oversight and public accountability catch up.",
        "Misuse, opacity, and control risks remain unresolved at the frontier.",
        "Competition can reward speed over careful deployment and incident transparency."
      ],
      abundance: [
        "Useful AI can improve science, education, health, accessibility, and resilience.",
        "Staged deployment can preserve progress while restricting the riskiest edges.",
        "Safety investment can become a strategic advantage rather than a brake."
      ],
      yesChanges: [
        "Transparent audits show robust control over risky capabilities.",
        "Labs and regulators agree on enforceable thresholds.",
        "Staged release proves useful progress can continue safely."
      ],
      noChanges: [
        "Major incidents reveal brittle assumptions or hidden capabilities.",
        "Labs resist independent evaluation or incident disclosure.",
        "Deployment races reward opacity and speed over control."
      ],
      hold: "Hold the call contested until independent evaluations and enforceable thresholds separate useful progress from frontier risk.",
      lanes: "Model/system cards, eval reports, incident databases, regulatory actions, lab policies, independent safety research, cybersecurity evidence.",
      missing: [
        "Independent evaluations tied to clear deployment thresholds.",
        "Incident reporting and red-team evidence across risky capabilities.",
        "Governance commitments that are enforceable rather than voluntary theater."
      ],
      antiBias: "Do not flatten all AI into one risk level. Separate useful deployed systems from frontier capabilities.",
      notProven: "This card does not prove acceleration or pause is always right. It separates useful progress from high-risk release conditions.",
      nextQuestion: "Which capabilities cross the threshold where public proof of control should come before deployment?"
    },
    {
      id: "schools-phones",
      label: "Phones in schools",
      question: "Should schools ban phones during the day?",
      call: "Restrict with exceptions.",
      score: 70,
      signalLabel: "Likely yes with safeguards",
      why: "Attention and classroom climate improve when phones are constrained, but safety, accessibility, and family needs require clear exceptions.",
      evidenceBurden: "Show that learning, safety, and student wellbeing improve without creating unfair discipline or access problems.",
      confidencePosture: "Medium; local implementation quality matters.",
      concern: [
        "Blanket bans can create discipline conflicts and equity problems.",
        "Students with health, language, or family-care needs may need access.",
        "Poor rollout can push enforcement onto teachers without support."
      ],
      abundance: [
        "Less distraction can protect learning time and social focus.",
        "A clear common rule can reduce teacher-by-teacher conflict.",
        "Exceptions can preserve safety and accessibility."
      ],
      yesChanges: [
        "Attendance, attention, and classroom climate improve after rollout.",
        "Exceptions are clear and humane.",
        "Discipline data does not show unfair burden."
      ],
      noChanges: [
        "The policy increases conflict without improving learning.",
        "Students with legitimate needs are blocked.",
        "Enforcement becomes inconsistent or punitive."
      ],
      hold: "Move toward yes only with exceptions, parent communication, and discipline safeguards.",
      lanes: "Attendance data, discipline records, teacher surveys, student wellbeing data, parent feedback, accessibility accommodations.",
      missing: [
        "Baseline classroom disruption data.",
        "Exception process for medical and family needs.",
        "Post-policy discipline and equity review."
      ],
      antiBias: "Do not treat adult frustration alone as evidence. Require student outcome and discipline data.",
      notProven: "This card does not prove every school should use the same rule.",
      nextQuestion: "What exceptions keep the rule firm without making it cruel?"
    },
    {
      id: "housing-growth",
      label: "Housing growth",
      question: "Should the town approve more housing density?",
      call: "Approve with infrastructure conditions.",
      score: 68,
      signalLabel: "Yes if capacity is real",
      why: "More housing can ease price pressure and support workers, but infrastructure, design, and displacement risk need hard conditions.",
      evidenceBurden: "Prove the plan adds real homes people can afford while funding the infrastructure it consumes.",
      confidencePosture: "Medium; depends on affordability terms and infrastructure financing.",
      concern: [
        "Growth can strain roads, schools, water, and public services.",
        "Luxury-only supply may miss the people most squeezed.",
        "Poor design can trigger backlash and reduce trust."
      ],
      abundance: [
        "More homes can reduce scarcity and support local workers.",
        "Density near services can protect land and reduce commute pressure.",
        "Development can fund upgrades if agreements are enforceable."
      ],
      yesChanges: [
        "Infrastructure funding is locked before approvals scale.",
        "A meaningful affordability share is enforceable.",
        "Design and transit access reduce public burden."
      ],
      noChanges: [
        "Public services are overloaded without funding.",
        "The project delivers little affordability.",
        "Displacement risk rises without protection."
      ],
      hold: "Approve only where affordability and infrastructure obligations are concrete.",
      lanes: "Housing needs assessments, zoning maps, infrastructure plans, school capacity, water/sewer capacity, affordability covenants.",
      missing: [
        "Net new affordable units by income band.",
        "Infrastructure funding source and timing.",
        "Displacement and tenant-protection analysis."
      ],
      antiBias: "Do not let vague growth slogans substitute for binding affordability and capacity numbers.",
      notProven: "This card does not prove every density project is good. It defines the conditions for approval.",
      nextQuestion: "Which infrastructure upgrades are funded before the homes arrive?"
    },
    {
      id: "public-safety",
      label: "Public safety",
      question: "Should the city expand surveillance cameras downtown?",
      call: "Pilot narrowly.",
      score: 52,
      signalLabel: "Narrow and conditional",
      why: "Cameras may help solve specific incidents, but broad surveillance can create privacy, bias, and mission-creep risks.",
      evidenceBurden: "Prove the cameras solve defined safety problems better than less invasive options and are governed by strict limits.",
      confidencePosture: "Low-medium; effectiveness and governance determine the call.",
      concern: [
        "Surveillance can expand beyond the original purpose.",
        "Bias and unequal enforcement can grow quietly.",
        "Money may shift away from more effective safety work."
      ],
      abundance: [
        "Targeted cameras can support investigations in high-risk locations.",
        "Transparent policy can build accountability.",
        "A time-limited pilot can test value before expansion."
      ],
      yesChanges: [
        "A narrow pilot shows measurable safety gains.",
        "Retention, access, and audit rules are public.",
        "Civil-rights review finds no disproportionate burden."
      ],
      noChanges: [
        "The system expands without measurable benefit.",
        "Footage access is opaque or abused.",
        "Less invasive options perform as well or better."
      ],
      hold: "Pilot only with sunset dates, audits, and narrow use rules.",
      lanes: "Crime data, clearance rates, camera policy, civil-rights review, budget alternatives, public feedback.",
      missing: [
        "Specific safety problem the cameras solve.",
        "Data retention and access controls.",
        "Independent audit plan."
      ],
      antiBias: "Do not equate visibility with safety. Require evidence of actual harm reduction.",
      notProven: "This card does not prove cameras are always useful or always abusive.",
      nextQuestion: "What measurable harm must fall before expansion is allowed?"
    },
    {
      id: "climate-energy",
      label: "Clean energy",
      question: "Should the region accelerate clean-energy projects?",
      call: "Accelerate with siting discipline.",
      score: 73,
      signalLabel: "Likely yes",
      why: "Clean power can cut risk and costs over time, but speed without siting discipline can create land, reliability, and community conflicts.",
      evidenceBurden: "Prove the projects reduce emissions and costs while protecting reliability, land use, and local consent.",
      confidencePosture: "Medium-high; project quality and grid readiness matter.",
      concern: [
        "Bad siting can damage habitat or public trust.",
        "Grid constraints can waste good projects.",
        "Benefits may bypass host communities."
      ],
      abundance: [
        "Clean power can reduce pollution and long-run fuel risk.",
        "Local projects can create jobs and resilience.",
        "Grid upgrades can unlock broader economic value."
      ],
      yesChanges: [
        "Grid studies show deliverable power.",
        "Community benefit and land protections are binding.",
        "Lifecycle emissions and cost impacts are transparent."
      ],
      noChanges: [
        "Projects cannot interconnect or deliver promised power.",
        "Local harm exceeds public benefit.",
        "Costs are hidden or shifted unfairly."
      ],
      hold: "Move fast where grid, land, and community terms are real.",
      lanes: "Interconnection queues, utility plans, emissions data, land-use permits, community agreements, rate impacts.",
      missing: [
        "Interconnection timeline and upgrade cost.",
        "Host-community benefit terms.",
        "Land and habitat mitigation plan."
      ],
      antiBias: "Do not treat every clean-energy project as automatically good. The siting and grid evidence still matter.",
      notProven: "This card does not prove all projects should be approved.",
      nextQuestion: "Which projects can deliver clean power soon without shifting hidden costs?"
    }
  ];

  let currentDecision = SCENARIOS[0];

  function $(id) {
    return document.getElementById(id);
  }

  function setText(id, value) {
    const node = $(id);
    if (node) {
      node.textContent = value == null ? "" : String(value);
    }
  }

  function clearAndFillList(id, items) {
    const node = $(id);
    if (!node) {
      return;
    }
    node.innerHTML = "";
    const safeItems = Array.isArray(items) ? items : [];
    safeItems.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      node.appendChild(li);
    });
  }

  function normalizeQuestion(value) {
    return String(value || "").trim().toLowerCase();
  }

  function findScenario(question) {
    const q = normalizeQuestion(question);
    if (!q) {
      return SCENARIOS[0];
    }
    const direct = SCENARIOS.find(function (scenario) {
      return scenario.question.toLowerCase() === q || scenario.id === q;
    });
    if (direct) {
      return direct;
    }
    if (q.includes("school") || q.includes("phone")) {
      return byId("schools-phones");
    }
    if (q.includes("housing") || q.includes("density") || q.includes("zoning")) {
      return byId("housing-growth");
    }
    if (q.includes("camera") || q.includes("surveillance") || q.includes("police") || q.includes("safety")) {
      return byId("public-safety");
    }
    if (q.includes("clean") || q.includes("energy") || q.includes("climate") || q.includes("solar") || q.includes("wind")) {
      return byId("climate-energy");
    }
    if (q.includes("frontier") || q.includes("slow") || q.includes("pause") || q.includes("ai safety")) {
      return byId("ai-frontier-safety");
    }
    if (q.includes("data center") || q.includes("datacenter")) {
      return byId("ai-data-centers");
    }
    return makeCustomDecision(question);
  }

  function byId(id) {
    return SCENARIOS.find(function (scenario) { return scenario.id === id; }) || SCENARIOS[0];
  }

  function makeCustomDecision(question) {
    const cleanQuestion = String(question || "What decision should we make?").trim();
    return {
      id: "custom",
      label: "Custom claim",
      question: cleanQuestion,
      call: "Build with conditions.",
      score: 58,
      signalLabel: "Prototype signal",
      why: "The claim has plausible upside and real risk. The responsible move is to name the evidence burden before hardening the call.",
      evidenceBurden: "Prove the benefit, burden, affected groups, failure modes, and change test with source-lane evidence.",
      confidencePosture: "Low-medium; this is a structured prototype card until real source retrieval is added.",
      concern: [
        "The strongest downside may be hidden by vague language.",
        "Benefits and burdens may land on different groups.",
        "The decision may outrun the evidence."
      ],
      abundance: [
        "A conditional frame can preserve useful upside.",
        "The evidence burden makes the next research step concrete.",
        "The change test prevents fake certainty."
      ],
      yesChanges: [
        "Reliable sources show durable public benefit.",
        "The main burdens are bounded and governed.",
        "Affected people have visible recourse."
      ],
      noChanges: [
        "Costs or harms are larger than claimed.",
        "Key evidence is missing or unverifiable.",
        "The plan cannot explain who bears the risk."
      ],
      hold: "Hold the call conditional until the missing evidence is checked.",
      lanes: "Primary documents, public data, affected-community evidence, expert review, budget or operational records, contradiction checks.",
      missing: [
        "Best source for the claimed benefit.",
        "Best source for the claimed burden.",
        "Evidence that would change the call."
      ],
      antiBias: "Do not create fake balance. Weight stronger evidence more heavily than louder claims.",
      notProven: "This card is not final research. It is a decision-room frame for what must be proven next.",
      nextQuestion: "What evidence would make a fair person change their mind?"
    };
  }

  function renderDecision(decision) {
    currentDecision = decision || SCENARIOS[0];

    setText("currentQuestion", currentDecision.question);
    setText("callText", currentDecision.call);
    setText("signalScore", currentDecision.score);
    setText("signalLabel", currentDecision.signalLabel);
    setText("whyText", currentDecision.why);
    setText("evidenceBurdenText", currentDecision.evidenceBurden);
    setText("confidencePostureText", currentDecision.confidencePosture);
    setText("holdLine", currentDecision.hold);

    clearAndFillList("concernList", currentDecision.concern);
    clearAndFillList("abundanceList", currentDecision.abundance);
    clearAndFillList("yesChangeList", currentDecision.yesChanges);
    clearAndFillList("noChangeList", currentDecision.noChanges);
    clearAndFillList("missingEvidenceList", currentDecision.missing);

    setText("sourceLaneText", currentDecision.lanes);
    setText("engineBurdenText", currentDecision.evidenceBurden);
    setText("antiBiasText", currentDecision.antiBias);
    setText("notProvenText", currentDecision.notProven);

    const input = $("questionInput");
    if (input && !input.value.trim()) {
      input.value = currentDecision.question;
    }

    updateAgentRun("Ready. Build a card to run the claim through the room.", -1);
  }

  function updateAgentRun(status, activeIndex) {
    setText("agentRunStatus", status);
    const steps = $("agentRunSteps");
    if (!steps) {
      return;
    }

    const children = Array.from(steps.children);
    children.forEach(function (child, index) {
      child.classList.toggle("is-active", index === activeIndex);
      child.classList.toggle("is-complete", activeIndex >= 0 && index < activeIndex);
    });
  }

  function runBuildCard() {
    const input = $("questionInput");
    const button = $("runQuestion");
    const question = input ? input.value : "";
    const decision = findScenario(question);

    if (button) {
      button.disabled = true;
      button.textContent = "Building...";
    }

    const steps = [
      "1. Framing the decision.",
      "2. Testing the concern case.",
      "3. Testing the abundance case.",
      "4. Naming missing evidence.",
      "5. Building the change test.",
      "6. Writing the public card."
    ];

    let index = 0;
    updateAgentRun(steps[0], 0);

    const timer = window.setInterval(function () {
      index += 1;
      if (index < steps.length) {
        updateAgentRun(steps[index], index);
        return;
      }

      window.clearInterval(timer);
      renderDecision(decision);
      updateAgentRun("Complete. Public card updated.", steps.length);

      if (button) {
        button.disabled = false;
        button.textContent = "Build card";
      }
    }, 220);
  }

  function toggleInspect(forceOpen) {
    const room = $("engineRoom");
    const button = $("inspectButton");
    if (!room) {
      return;
    }

    const isHidden = room.hasAttribute("hidden") || room.style.display === "none";
    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : isHidden;

    if (shouldOpen) {
      room.removeAttribute("hidden");
      room.style.display = "";
      if (button) {
        button.textContent = "Hide evidence";
        button.setAttribute("aria-expanded", "true");
      }
      setText("sourceLaneText", currentDecision.lanes);
      setText("engineBurdenText", currentDecision.evidenceBurden);
      setText("antiBiasText", currentDecision.antiBias);
      setText("notProvenText", currentDecision.notProven);
      clearAndFillList("missingEvidenceList", currentDecision.missing);
    } else {
      room.setAttribute("hidden", "");
      room.style.display = "none";
      if (button) {
        button.textContent = "Inspect evidence";
        button.setAttribute("aria-expanded", "false");
      }
    }
  }

  function buildCopyText() {
    const d = currentDecision || SCENARIOS[0];
    return [
      "MONAHINGA™ DRAGON'S TAIL PUBLIC DECISION CARD",
      "",
      "Question: " + d.question,
      "Call: " + d.call,
      "Five-year signal: " + d.score + "/100 - " + d.signalLabel,
      "",
      "Why: " + d.why,
      "",
      "Evidence burden: " + d.evidenceBurden,
      "",
      "Concern case:",
      "- " + d.concern.join("\n- "),
      "",
      "Abundance case:",
      "- " + d.abundance.join("\n- "),
      "",
      "Moves toward yes if:",
      "- " + d.yesChanges.join("\n- "),
      "",
      "Moves toward no if:",
      "- " + d.noChanges.join("\n- "),
      "",
      "Missing evidence:",
      "- " + d.missing.join("\n- "),
      "",
      "What is not proven: " + d.notProven,
      "",
      "Next public question: " + d.nextQuestion,
      "",
      "Prototype note: This is a public-first decision card, not final live research."
    ].join("\n");
  }

  function copyPublicCard() {
    const text = buildCopyText();
    const status = $("copyStatus");

    function done(ok) {
      if (status) {
        status.textContent = ok ? "Decision card copied." : "Copy failed. Card text is ready in the console.";
      }
      if (!ok) {
        console.log(text);
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        done(true);
      }).catch(function () {
        done(false);
      });
      return;
    }

    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      done(ok);
    } catch (err) {
      done(false);
    }
  }

  function handleTopicClick(event) {
    const button = event.target.closest("[data-topic], [data-scenario], [data-id]");
    if (!button) {
      return;
    }

    const id = button.getAttribute("data-topic") || button.getAttribute("data-scenario") || button.getAttribute("data-id");
    const decision = byId(id);
    const input = $("questionInput");
    if (input) {
      input.value = decision.question;
    }
    renderDecision(decision);
  }

  function bindRuntime() {
    const runButton = $("runQuestion");
    const inspectButton = $("inspectButton");
    const closeButton = $("closeEngine");
    const copyButton = $("copyButton");
    const topicWrap = $("topicButtons");

    if (runButton) {
      runButton.addEventListener("click", function (event) {
        event.preventDefault();
        runBuildCard();
      });
    }

    if (inspectButton) {
      inspectButton.addEventListener("click", function (event) {
        event.preventDefault();
        toggleInspect();
      });
    }

    if (closeButton) {
      closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        toggleInspect(false);
      });
    }

    if (copyButton) {
      copyButton.addEventListener("click", function (event) {
        event.preventDefault();
        copyPublicCard();
      });
    }

    if (topicWrap) {
      topicWrap.addEventListener("click", handleTopicClick);
    }

    document.addEventListener("click", function (event) {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const id = target.id;
      if (id === "runQuestion") {
        event.preventDefault();
        runBuildCard();
      } else if (id === "inspectButton") {
        event.preventDefault();
        toggleInspect();
      } else if (id === "closeEngine") {
        event.preventDefault();
        toggleInspect(false);
      } else if (id === "copyButton") {
        event.preventDefault();
        copyPublicCard();
      }
    }, true);

    window.DRAGON_TAIL_RUNTIME = {
      marker: PASS_MARKER,
      version: "pass65-clean-appjs",
      scenarios: SCENARIOS.length,
      buildCard: runBuildCard,
      inspect: toggleInspect,
      copy: copyPublicCard
    };

    document.documentElement.setAttribute("data-dragon-tail-runtime", "pass65-clean-appjs");
    console.info(PASS_MARKER);
  }

  function boot() {
    renderDecision(SCENARIOS[0]);
    toggleInspect(false);
    bindRuntime();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
}());

// Dragon's Tail Pass 68 - inspect evidence visibility recovery
// Makes Inspect evidence unmistakable: opens the evidence room, changes the button to Hide evidence,
// writes a nearby status message, and scrolls the room into view.
(function () {
  "use strict";

  const MARKER = "DRAGON_TAIL_PASS68_INSPECT_VISIBILITY_LOADED";

  function byId(id) {
    return document.getElementById(id);
  }

  function setStatus(message) {
    const status = byId("copyStatus");
    if (status) {
      status.textContent = message;
    }
  }

  function setButton(open) {
    const inspect = byId("inspectButton");
    if (!inspect) {
      return;
    }
    inspect.textContent = open ? "Hide evidence" : "Inspect evidence";
    inspect.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function openEvidenceRoom() {
    const room = byId("engineRoom");
    if (!room) {
      setStatus("Evidence room could not be found.");
      return;
    }

    room.removeAttribute("hidden");
    room.style.display = "";
    room.setAttribute("data-inspect-state", "open");
    setButton(true);
    setStatus("Evidence room opened below.");

    window.setTimeout(function () {
      try {
        room.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (err) {
        room.scrollIntoView();
      }
    }, 30);
  }

  function closeEvidenceRoom() {
    const room = byId("engineRoom");
    if (!room) {
      return;
    }

    room.setAttribute("hidden", "");
    room.style.display = "none";
    room.setAttribute("data-inspect-state", "closed");
    setButton(false);
    setStatus("Evidence room hidden.");
  }

  function evidenceIsOpen() {
    const room = byId("engineRoom");
    if (!room) {
      return false;
    }
    return !room.hasAttribute("hidden") && room.style.display !== "none";
  }

  function bindInspectVisibility() {
    const inspect = byId("inspectButton");
    const close = byId("closeEngine");

    if (inspect && !inspect.dataset.pass68Bound) {
      inspect.dataset.pass68Bound = "true";
      inspect.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (evidenceIsOpen()) {
          closeEvidenceRoom();
        } else {
          openEvidenceRoom();
        }
      }, true);
    }

    if (close && !close.dataset.pass68Bound) {
      close.dataset.pass68Bound = "true";
      close.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        closeEvidenceRoom();
      }, true);
    }

    setButton(evidenceIsOpen());
    console.info(MARKER);
    window.DRAGON_TAIL_INSPECT_VISIBILITY = {
      marker: MARKER,
      open: openEvidenceRoom,
      close: closeEvidenceRoom,
      isOpen: evidenceIsOpen
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindInspectVisibility);
  } else {
    bindInspectVisibility();
  }
}());

// Dragon's Tail Pass 69 - inspect toggle finalizer
// Fixes the Pass 68 double-toggle problem caused by older document-level click handlers.
// The final visible state is applied after all earlier click handlers finish.
(function () {
  "use strict";

  const MARKER = "DRAGON_TAIL_PASS69_INSPECT_TOGGLE_FINALIZER_LOADED";
  const PANEL_ID = "pass69EvidencePanel";

  function byId(id) {
    return document.getElementById(id);
  }

  function currentDecision() {
    if (window.DRAGON_TAIL_RUNTIME && window.DRAGON_TAIL_RUNTIME.marker) {
      // The clean runtime writes the visible card into the DOM. Read from DOM so this
      // finalizer stays compatible with the current app.js closure.
    }
    return {
      sourceLane: textOf("sourceLaneText") || "Primary documents, public data, affected-community evidence, expert review, budget or operational records, contradiction checks.",
      burden: textOf("engineBurdenText") || textOf("evidenceBurdenText") || "Prove the benefit, burden, affected groups, failure modes, and change test with source-lane evidence.",
      antiBias: textOf("antiBiasText") || "Do not create fake balance. Weight stronger evidence more heavily than louder claims.",
      notProven: textOf("notProvenText") || "This card is not final research. It is a decision-room frame for what must be proven next.",
      missing: listText("missingEvidenceList")
    };
  }

  function textOf(id) {
    const node = byId(id);
    return node ? String(node.textContent || "").trim() : "";
  }

  function listText(id) {
    const node = byId(id);
    if (!node) {
      return [];
    }
    const items = Array.from(node.querySelectorAll("li")).map(function (li) {
      return String(li.textContent || "").trim();
    }).filter(Boolean);
    return items.length ? items : ["Best source for the claimed benefit.", "Best source for the claimed burden.", "Evidence that would change the call."];
  }

  function setStatus(message) {
    const status = byId("copyStatus");
    if (status) {
      status.textContent = message;
    }
  }

  function setButton(open) {
    const button = byId("inspectButton");
    if (!button) {
      return;
    }
    button.textContent = open ? "Hide evidence" : "Inspect evidence";
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("data-pass69-state", open ? "open" : "closed");
  }

  function ensurePanel() {
    let panel = byId(PANEL_ID);
    if (panel) {
      return panel;
    }

    panel = document.createElement("section");
    panel.id = PANEL_ID;
    panel.setAttribute("aria-live", "polite");
    panel.style.margin = "18px auto";
    panel.style.maxWidth = "1100px";
    panel.style.border = "1px solid rgba(89, 255, 239, 0.45)";
    panel.style.borderRadius = "18px";
    panel.style.padding = "18px";
    panel.style.background = "rgba(0, 20, 24, 0.92)";
    panel.style.boxShadow = "0 0 36px rgba(89, 255, 239, 0.12)";
    panel.style.color = "var(--text, #f6f0df)";

    const decisionCard = byId("decisionCard");
    if (decisionCard && decisionCard.parentNode) {
      decisionCard.parentNode.insertBefore(panel, decisionCard.nextSibling);
    } else {
      document.body.appendChild(panel);
    }

    return panel;
  }

  function renderPanel() {
    const data = currentDecision();
    const panel = ensurePanel();
    const missing = data.missing.map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("");

    panel.innerHTML = [
      '<div style="display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:12px;">',
      '<div>',
      '<div style="letter-spacing:.14em;text-transform:uppercase;color:#59ffef;font-weight:800;font-size:12px;">Inspect evidence</div>',
      '<h2 style="margin:.25rem 0 0;font-size:28px;">Evidence room is open</h2>',
      '</div>',
      '<button id="pass69HideEvidence" type="button" style="border:1px solid rgba(89,255,239,.45);background:rgba(89,255,239,.12);color:#f6f0df;border-radius:999px;padding:10px 14px;font-weight:800;cursor:pointer;">Hide evidence</button>',
      '</div>',
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;">',
      card("Source lanes", data.sourceLane),
      card("Evidence burden", data.burden),
      card("Missing evidence", "<ul style='margin:.25rem 0 0 1.1rem;padding:0;'>" + missing + "</ul>", true),
      card("Evidence weight guardrail", data.antiBias),
      card("What is not proven", data.notProven),
      '</div>'
    ].join("");

    const hide = byId("pass69HideEvidence");
    if (hide) {
      hide.addEventListener("click", function (event) {
        event.preventDefault();
        closePanel();
      });
    }

    panel.removeAttribute("hidden");
    panel.style.display = "block";
    return panel;
  }

  function card(title, body, bodyIsHtml) {
    return [
      '<article style="border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:14px;background:rgba(0,0,0,.28);">',
      '<h3 style="margin:0 0 8px;color:#59ffef;font-size:14px;text-transform:uppercase;letter-spacing:.1em;">' + escapeHtml(title) + '</h3>',
      '<div style="line-height:1.45;font-size:15px;">' + (bodyIsHtml ? body : escapeHtml(body)) + '</div>',
      '</article>'
    ].join("");
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function openPanel() {
    const panel = renderPanel();
    const room = byId("engineRoom");
    if (room) {
      room.removeAttribute("hidden");
      room.style.display = "";
      room.setAttribute("data-inspect-state", "open");
    }
    setButton(true);
    setStatus("Evidence room open.");
    window.setTimeout(function () {
      try {
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (err) {
        panel.scrollIntoView();
      }
    }, 20);
  }

  function closePanel() {
    const panel = byId(PANEL_ID);
    if (panel) {
      panel.setAttribute("hidden", "");
      panel.style.display = "none";
    }
    const room = byId("engineRoom");
    if (room) {
      room.setAttribute("hidden", "");
      room.style.display = "none";
      room.setAttribute("data-inspect-state", "closed");
    }
    setButton(false);
    setStatus("Evidence room hidden.");
  }

  function panelIsOpen() {
    const panel = byId(PANEL_ID);
    return !!panel && !panel.hasAttribute("hidden") && panel.style.display !== "none";
  }

  document.addEventListener("click", function (event) {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    const inspect = target.closest("#inspectButton");
    if (!inspect) {
      return;
    }

    const shouldClose = panelIsOpen();
    window.setTimeout(function () {
      if (shouldClose) {
        closePanel();
      } else {
        openPanel();
      }
    }, 0);
  }, true);

  window.DRAGON_TAIL_INSPECT_FINALIZER = {
    marker: MARKER,
    open: openPanel,
    close: closePanel,
    isOpen: panelIsOpen
  };

  console.info(MARKER);
}());

// Dragon's Tail Pass 70B - inspect polish
// Refines the Pass 69 inspect panel so it lands cleanly below the sticky header
// and avoids making the user wonder where the evidence room went.
(function () {
  "use strict";

  const MARKER = "DRAGON_TAIL_PASS70B_INSPECT_POLISH_LOADED";
  const PANEL_ID = "pass69EvidencePanel";

  function panel() {
    return document.getElementById(PANEL_ID);
  }

  function button() {
    return document.getElementById("inspectButton");
  }

  function status() {
    return document.getElementById("copyStatus");
  }

  function polishPanel() {
    const p = panel();
    if (!p || p.hasAttribute("hidden") || p.style.display === "none") {
      return;
    }

    p.setAttribute("data-pass70b-polished", "true");

    const s = status();
    if (s && /open/i.test(s.textContent || "")) {
      s.textContent = "Evidence room open below.";
    }

    const b = button();
    if (b) {
      b.textContent = "Hide evidence";
      b.setAttribute("aria-expanded", "true");
    }

    window.setTimeout(function () {
      const target = panel();
      if (!target || target.hasAttribute("hidden") || target.style.display === "none") {
        return;
      }

      const rect = target.getBoundingClientRect();
      const stickyOffset = 104;
      const top = Math.max(0, window.scrollY + rect.top - stickyOffset);
      window.scrollTo({ top: top, behavior: "smooth" });
    }, 60);
  }

  document.addEventListener("click", function (event) {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    if (!target.closest("#inspectButton")) {
      return;
    }
    window.setTimeout(polishPanel, 90);
  }, true);

  window.DRAGON_TAIL_INSPECT_POLISH = {
    marker: MARKER,
    polish: polishPanel
  };

  console.info(MARKER);
}());

// Dragon's Tail Pass 73 - guided questions and Dragon's Tail note
// Adds a lightweight category/question picker without replacing the working input/build flow.
(function () {
  "use strict";

  const MARKER = "DRAGON_TAIL_PASS73_GUIDED_QUESTIONS_LOADED";

  const QUESTION_BANK = [
    {
      category: "AI + infrastructure",
      questions: [
        "Are AI data centers worth the public cost?",
        "Should towns give tax breaks to AI infrastructure projects?",
        "Should utilities prioritize power for AI data centers?",
        "Should water-stressed regions approve new data centers?",
        "Should AI infrastructure deals require public benefit agreements?"
      ]
    },
    {
      category: "AI + society",
      questions: [
        "Will AI make medicine better?",
        "Should hospitals use AI for diagnosis?",
        "Should schools use AI tutors?",
        "Should companies replace support workers with AI agents?",
        "Should government agencies use AI to make benefit decisions?"
      ]
    },
    {
      category: "Schools + kids",
      questions: [
        "Should schools ban phones during the day?",
        "Should schools use AI detection tools?",
        "Should districts adopt AI tutoring systems?",
        "Should student data be used to predict academic risk?",
        "Should schools restrict social media access?"
      ]
    },
    {
      category: "Housing + growth",
      questions: [
        "Should the town approve more housing density?",
        "Should cities loosen zoning near transit?",
        "Should towns approve warehouse developments?",
        "Should short-term rentals be restricted?",
        "Should public subsidies require affordable housing guarantees?"
      ]
    },
    {
      category: "Public safety + surveillance",
      questions: [
        "Should the city expand surveillance cameras downtown?",
        "Should police use facial recognition?",
        "Should schools use weapon-detection systems?",
        "Should cities deploy drones for public safety?",
        "Should emergency services use predictive AI?"
      ]
    },
    {
      category: "Energy + climate",
      questions: [
        "Should the region accelerate clean-energy projects?",
        "Should towns approve large solar farms?",
        "Should communities keep aging nuclear plants open?",
        "Should utilities build new transmission lines?",
        "Should climate resilience spending take priority over tax cuts?"
      ]
    },
    {
      category: "Healthcare + bio",
      questions: [
        "Should hospitals use AI for triage?",
        "Should insurers use AI to approve care?",
        "Should public health agencies use mobility data during outbreaks?",
        "Should genetic screening be expanded?",
        "Should medicine prioritize prevention over late-stage treatment?"
      ]
    },
    {
      category: "Government + trust",
      questions: [
        "Should city councils use AI to summarize public comments?",
        "Should public agencies use AI chatbots for citizen services?",
        "Should government algorithms be publicly audited?",
        "Should public contracts require AI transparency?",
        "Should cities publish decision cards for major projects?"
      ]
    }
  ];

  function byId(id) {
    return document.getElementById(id);
  }

  function createOption(value, label) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    return option;
  }

  function fillQuestions(categoryIndex) {
    const questionSelect = byId("guidedQuestionSelect");
    if (!questionSelect) {
      return;
    }

    questionSelect.innerHTML = "";
    questionSelect.appendChild(createOption("", "Choose a question..."));

    const category = QUESTION_BANK[categoryIndex];
    if (!category) {
      questionSelect.disabled = true;
      return;
    }

    category.questions.forEach(function (question) {
      questionSelect.appendChild(createOption(question, question));
    });
    questionSelect.disabled = false;
  }

  function fillInput(question) {
    const input = byId("questionInput");
    if (!input || !question) {
      return;
    }
    input.value = question;
    input.focus();
  }

  function buildGuidedQuestionsPanel() {
    if (byId("guidedQuestionsPanel")) {
      return;
    }

    const input = byId("questionInput");
    if (!input) {
      return;
    }

    const panel = document.createElement("section");
    panel.id = "guidedQuestionsPanel";
    panel.className = "guided-questions-panel";
    panel.innerHTML = [
      '<div class="guided-questions-head">',
      '<div>',
      '<div class="guided-kicker">Guided questions</div>',
      '<h3>Pick a public question or write your own.</h3>',
      '</div>',
      '<span class="guided-pill">40 starter questions</span>',
      '</div>',
      '<div class="guided-question-controls">',
      '<label class="guided-field">Category<select id="guidedCategorySelect"></select></label>',
      '<label class="guided-field">Question<select id="guidedQuestionSelect" disabled></select></label>',
      '</div>'
    ].join("");

    const inputWrap = input.closest("label") || input.parentElement;
    const anchor = inputWrap && inputWrap.parentElement ? inputWrap.parentElement : input.parentElement;
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(panel, anchor);
    } else {
      input.parentNode.insertBefore(panel, input);
    }

    const categorySelect = byId("guidedCategorySelect");
    const questionSelect = byId("guidedQuestionSelect");

    if (!categorySelect || !questionSelect) {
      return;
    }

    categorySelect.appendChild(createOption("", "Choose a category..."));
    QUESTION_BANK.forEach(function (entry, index) {
      categorySelect.appendChild(createOption(String(index), entry.category));
    });

    categorySelect.addEventListener("change", function () {
      const index = Number(categorySelect.value);
      fillQuestions(Number.isFinite(index) ? index : -1);
    });

    questionSelect.addEventListener("change", function () {
      fillInput(questionSelect.value);
    });
  }

  function buildDragonNote() {
    if (byId("dragonTailNote")) {
      return;
    }

    const whyPanel = document.querySelector(".why-card, .why-strip, [class*='los'], [class*='Los']");
    const note = document.createElement("aside");
    note.id = "dragonTailNote";
    note.className = "dragon-tail-note";
    note.innerHTML = [
      '<div class="dragon-note-mark">D</div>',
      '<div>',
      '<div class="guided-kicker">Why Dragon’s Tail?</div>',
      '<p>The nuclear Dragon’s Tail warned what happens when powerful systems outrun the room around them. The AI Dragon’s Tail is different, but the lesson rhymes: new power needs better evidence, better controls, and better public decisions.</p>',
      '</div>'
    ].join("");

    if (whyPanel && whyPanel.parentNode) {
      whyPanel.parentNode.insertBefore(note, whyPanel.nextSibling);
      return;
    }

    const questionStage = byId("questionStage");
    if (questionStage) {
      questionStage.appendChild(note);
    }
  }

  function bootPass73() {
    buildGuidedQuestionsPanel();
    buildDragonNote();

    window.DRAGON_TAIL_GUIDED_QUESTIONS = {
      marker: MARKER,
      categories: QUESTION_BANK.length,
      questions: QUESTION_BANK.reduce(function (sum, entry) { return sum + entry.questions.length; }, 0)
    };

    console.info(MARKER);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootPass73);
  } else {
    bootPass73();
  }
}());

// Dragon's Tail Pass 74 - MONAHINGA dragon brand
// Adds MONAHINGA umbrella branding and a restrained dragon emblem without changing the decision engine.
(function () {
  "use strict";

  const MARKER = "DRAGON_TAIL_PASS74_MONAHINGA_DRAGON_BRAND_LOADED";
  const ASSET = "assets/monahinga-dragon-tail-emblem.png";

  function findBrandNode() {
    const candidates = Array.from(document.querySelectorAll("header, nav, .brand, .logo, [class*='brand'], [class*='logo'], body *"));
    return candidates.find(function (node) {
      const text = String(node.textContent || "").trim().replace(/\s+/g, " ");
      return text === "DRAGON'S TAIL" || text === "Dragon's Tail";
    });
  }

  function addHeaderBranding() {
    const brandNode = findBrandNode();
    if (!brandNode) {
      return;
    }

    if (!brandNode.querySelector(".monahinga-dragon-mark")) {
      const img = document.createElement("img");
      img.className = "monahinga-dragon-mark";
      img.src = ASSET;
      img.alt = "MONAHINGA™ Dragon's Tail fire-breathing dragon mark";
      img.loading = "eager";
      brandNode.insertBefore(img, brandNode.firstChild);
    }

    let label = brandNode.querySelector(".monahinga-brand-label");
    if (!label) {
      label = document.createElement("span");
      label.className = "monahinga-brand-label";
      brandNode.appendChild(label);
    }
    label.innerHTML = '<span class="monahinga-kicker">MONAHINGA™</span><span class="monahinga-title">Dragon’s Tail</span>';

    Array.from(brandNode.childNodes).forEach(function (child) {
      if (child.nodeType === Node.TEXT_NODE && /DRAGON/i.test(child.textContent || "")) {
        child.textContent = "";
      }
    });

    brandNode.classList.add("monahinga-branded-wordmark");
  }

  function addHeroDragonAccent() {
    const questionStage = document.getElementById("questionStage");
    if (!questionStage || document.getElementById("monahingaHeroDragonAccent")) {
      return;
    }

    const accent = document.createElement("div");
    accent.id = "monahingaHeroDragonAccent";
    accent.className = "monahinga-hero-dragon-accent";
    accent.setAttribute("aria-hidden", "true");
    accent.innerHTML = '<img src="' + ASSET + '" alt="">';
    questionStage.appendChild(accent);
  }

  function brandCopyStatus() {
    const status = document.getElementById("copyStatus");
    if (status && /Decision card copied/i.test(status.textContent || "")) {
      status.textContent = "MONAHINGA™ Dragon’s Tail card copied.";
    }
  }

  function bootPass74() {
    addHeaderBranding();
    addHeroDragonAccent();

    document.addEventListener("click", function (event) {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      if (target.closest("#copyButton")) {
        window.setTimeout(brandCopyStatus, 120);
      }
    }, true);

    window.DRAGON_TAIL_MONAHINGA_BRAND = {
      marker: MARKER,
      asset: ASSET,
      name: "MONAHINGA™ Dragon’s Tail"
    };

    console.info(MARKER);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootPass74);
  } else {
    bootPass74();
  }
}());

