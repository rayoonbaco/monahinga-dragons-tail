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

  function uniqueItems(items, limit) {
    const seen = new Set();
    const out = [];
    (items || []).forEach(function (item) {
      const text = String(item || "").trim();
      const key = text.toLowerCase();
      if (text && !seen.has(key)) {
        seen.add(key);
        out.push(text);
      }
    });
    return out.slice(0, limit || 6);
  }

  function anyMatch(text, words) {
    return (words || []).some(function (word) {
      return text.indexOf(word) !== -1;
    });
  }

  function countMatches(text, words) {
    return (words || []).reduce(function (total, word) {
      return total + (text.indexOf(word) !== -1 ? 1 : 0);
    }, 0);
  }

  function clampNumber(value, min, max) {
    return Math.max(min, Math.min(max, Math.round(value)));
  }

  const INTEL_LENSES = [
    {
      id: "ai",
      label: "AI / automation",
      words: [" ai ", "artificial intelligence", "algorithm", "chatgpt", "model", "automation", "agentic", "machine learning", "llm", "robot"],
      concern: [
        "Automation can scale weak assumptions faster than human review can catch them.",
        "Model output may look authoritative even when the underlying evidence is thin.",
        "Accountability can blur if people cannot explain who made the final call."
      ],
      abundance: [
        "AI can compress research time, surface blind spots, and improve structured review.",
        "Human-in-the-loop design can turn fast output into better inspected judgment.",
        "Good workflows can use AI to test more alternatives before money or trust is committed."
      ],
      lanes: "model/system cards, eval reports, incident records, policy memos, independent audits, workflow logs, user outcome data",
      missing: [
        "Independent evidence that the AI-assisted workflow improves decisions, not just speed.",
        "Failure-mode records showing where the model breaks or misleads.",
        "Human review rules that define who owns the final decision."
      ],
      antiBias: "Do not treat fluent AI output as verified intelligence. Separate generated claims from checked evidence."
    },
    {
      id: "public-policy",
      label: "public policy / governance",
      words: ["government", "policy", "regulation", "public", "city", "town", "state", "federal", "governance", "law", "ban", "approve", "permit"],
      concern: [
        "Public costs can be hidden until the decision is already politically locked in.",
        "Affected groups may carry burdens that are not visible in the headline benefit.",
        "Weak oversight can turn a narrow approval into a broad precedent."
      ],
      abundance: [
        "Clear public rules can convert a messy debate into accountable conditions.",
        "Transparent decision criteria can reduce rumor, delay, and performative conflict.",
        "A conditional approval path can preserve upside while forcing proof before scale."
      ],
      lanes: "public records, meeting minutes, agency filings, budgets, permits, legal memos, watchdog reports, affected-community testimony",
      missing: [
        "Who pays if the optimistic assumptions fail.",
        "Which agency or person is accountable for enforcement.",
        "Evidence from affected groups, not only decision-makers."
      ],
      antiBias: "Do not let institutional confidence substitute for public proof. Track who benefits and who carries the burden."
    },
    {
      id: "privacy-surveillance",
      label: "privacy / surveillance",
      words: ["privacy", "surveillance", "camera", "biometric", "facial", "tracking", "data", "monitoring", "recording", "police"],
      concern: [
        "Collection can expand beyond the original purpose once the system exists.",
        "Privacy loss may be hard to reverse even if the promised benefit is weak.",
        "Unequal enforcement can grow quietly when oversight is vague."
      ],
      abundance: [
        "Narrow data use can support safety, accountability, or service quality when governed tightly.",
        "Audits, retention limits, and public reporting can make the system testable.",
        "A sunset pilot can prove value before permanent expansion."
      ],
      lanes: "privacy impact assessments, access logs, retention policy, audit reports, civil-rights review, incident data, alternatives analysis",
      missing: [
        "Retention limits and access rules.",
        "Independent review of bias or unequal burden.",
        "Evidence that less invasive alternatives would not work as well."
      ],
      antiBias: "Do not equate more visibility with more safety. Require measured harm reduction and strict use limits."
    },
    {
      id: "health-safety",
      label: "health / safety",
      words: ["health", "medical", "hospital", "drug", "vaccine", "safety", "disease", "risk", "children", "school", "mental health", "harm"],
      concern: [
        "Health and safety claims can outrun the quality of the underlying evidence.",
        "Vulnerable groups may be affected differently than the average headline result.",
        "Bad implementation can turn a good idea into a harmful rollout."
      ],
      abundance: [
        "Strong evidence can justify faster action when delay creates real harm.",
        "Targeted safeguards can preserve benefit while protecting vulnerable groups.",
        "Outcome tracking can separate real improvement from hopeful messaging."
      ],
      lanes: "peer-reviewed studies, public-health data, clinical or safety records, adverse-event reports, school or hospital records, expert guidelines",
      missing: [
        "Outcome data before and after the proposed change.",
        "Evidence for vulnerable or high-risk groups.",
        "A monitoring plan for harms after rollout."
      ],
      antiBias: "Do not treat urgency as proof. Require outcome evidence and a plan for detecting harm."
    },
    {
      id: "economy-infrastructure",
      label: "economy / infrastructure",
      words: ["jobs", "cost", "money", "tax", "budget", "infrastructure", "housing", "energy", "water", "power", "grid", "development", "build"],
      concern: [
        "Promised benefits may be real while hidden public costs are shifted elsewhere.",
        "Infrastructure strain can appear after the approval, when leverage is gone.",
        "Economic upside can be overstated if commitments are not enforceable."
      ],
      abundance: [
        "Well-structured projects can create durable local value and public capacity.",
        "Binding conditions can convert private momentum into shared benefit.",
        "Phased rollout can test costs and benefits before full commitment."
      ],
      lanes: "budgets, utility filings, tax agreements, infrastructure plans, cost-benefit analysis, contracts, local public records, market data",
      missing: [
        "Net public cost after incentives, infrastructure, and maintenance.",
        "Binding commitments for jobs, services, or public benefit.",
        "Failure scenario: who pays if projections are wrong."
      ],
      antiBias: "Do not accept headline economic impact numbers without enforceable terms and public-cost accounting."
    },
    {
      id: "environment-land",
      label: "environment / land",
      words: ["land", "environment", "climate", "emissions", "forest", "water", "habitat", "pollution", "farm", "terrain", "site", "solar", "wind"],
      concern: [
        "Land and water impacts can be minimized in the pitch and amplified in reality.",
        "Local ecological harm can be treated as acceptable because the broader goal sounds good.",
        "Monitoring may be weakest exactly where long-term impacts matter most."
      ],
      abundance: [
        "Good siting can turn a disputed project into a durable public benefit.",
        "Environmental review can identify mitigation before damage becomes permanent.",
        "Transparent monitoring can keep the decision revisable after approval."
      ],
      lanes: "environmental impact reports, water data, permits, site maps, habitat studies, emissions data, monitoring records, community comments",
      missing: [
        "Site-specific impact data, not just general claims.",
        "Mitigation duties with enforcement teeth.",
        "Long-term monitoring triggers that reopen the decision if harm rises."
      ],
      antiBias: "Do not let a good mission erase site-specific harm. The land evidence still matters."
    },
    {
      id: "education-youth",
      label: "education / youth",
      words: ["student", "teacher", "school", "education", "college", "child", "children", "classroom", "learning", "youth"],
      concern: [
        "Adult convenience can be mistaken for student benefit.",
        "Implementation can increase discipline problems or inequity if exceptions are weak.",
        "Learning claims may not hold across different student groups."
      ],
      abundance: [
        "Clear rules and good tools can protect attention, learning, and wellbeing.",
        "Targeted exceptions can preserve fairness while improving the default environment.",
        "Outcome tracking can show whether the policy actually helps students."
      ],
      lanes: "attendance records, discipline records, learning outcomes, teacher surveys, student wellbeing data, parent feedback, accessibility plans",
      missing: [
        "Baseline and post-change student outcome data.",
        "Exception process for medical, language, disability, or family needs.",
        "Evidence of discipline impact by student group."
      ],
      antiBias: "Do not treat adult frustration alone as evidence. Require student outcome and fairness data."
    }
  ];

  function analyzeCustomQuestion(question) {
    const clean = String(question || "").trim();
    const padded = " " + clean.toLowerCase() + " ";
    const matched = INTEL_LENSES.filter(function (lens) {
      return anyMatch(padded, lens.words);
    });

    const lenses = matched.length ? matched : [{
      id: "general",
      label: "general public decision",
      concern: [
        "The strongest downside may be hidden by vague language.",
        "Benefits and burdens may land on different groups.",
        "The decision may outrun the available evidence."
      ],
      abundance: [
        "A conditional frame can preserve useful upside without pretending certainty.",
        "The evidence burden turns the next research step into something testable.",
        "A clear change test prevents people from defending a weak first answer."
      ],
      lanes: "primary documents, public data, affected-community evidence, expert review, budget or operational records, contradiction checks",
      missing: [
        "Best source for the claimed benefit.",
        "Best source for the claimed burden.",
        "Evidence that would make a fair person change their mind."
      ],
      antiBias: "Do not create fake balance. Weight stronger evidence more heavily than louder claims."
    }];

    const riskWords = ["risk", "harm", "danger", "unsafe", "ban", "surveillance", "privacy", "children", "police", "health", "nuclear", "weapon", "fraud", "lawsuit", "crisis"];
    const upsideWords = ["benefit", "jobs", "improve", "build", "approve", "growth", "opportunity", "innovation", "clean", "housing", "education", "health", "access"];
    const reversibilityWords = ["pilot", "trial", "temporary", "phase", "test", "sunset", "limited", "narrow"];
    const overclaimWords = ["always", "never", "guarantee", "prove", "certain", "everyone", "nobody", "best", "worst"];
    const specificityWords = ["local", "county", "city", "state", "school", "company", "agency", "budget", "permit", "study", "report", "data"];
    const words = clean.split(/\s+/).filter(Boolean).length;

    let score = 48;
    score += Math.min(14, countMatches(padded, upsideWords) * 4);
    score -= Math.min(16, countMatches(padded, riskWords) * 4);
    score += Math.min(10, countMatches(padded, reversibilityWords) * 5);
    score -= Math.min(12, countMatches(padded, overclaimWords) * 4);
    score += Math.min(8, countMatches(padded, specificityWords) * 2);
    score += Math.min(8, lenses.length * 3);
    if (/[0-9]/.test(clean)) {
      score += 4;
    }
    if (words < 7) {
      score -= 6;
    }
    if (words > 18) {
      score += 4;
    }
    if (clean.indexOf("?") !== -1) {
      score += 2;
    }
    score = clampNumber(score, 24, 84);

    const topLens = lenses[0];
    const concern = uniqueItems(lenses.flatMap(function (lens) { return lens.concern; }), 4);
    const abundance = uniqueItems(lenses.flatMap(function (lens) { return lens.abundance; }), 4);
    const missing = uniqueItems(lenses.flatMap(function (lens) { return lens.missing; }), 5);
    const lanes = uniqueItems(lenses.map(function (lens) { return lens.lanes; }), 3).join(" | ");
    const antiBias = topLens.antiBias;

    let call = "Hold conditional.";
    let signalLabel = "Contested / needs source check";
    if (score >= 72) {
      call = "Move forward with evidence locks.";
      signalLabel = "Promising but verify";
    } else if (score >= 62) {
      call = "Proceed with conditions.";
      signalLabel = "Positive but conditional";
    } else if (score >= 50) {
      call = "Hold conditional.";
      signalLabel = "Mixed / evidence gap";
    } else if (score >= 40) {
      call = "Pilot narrowly or wait.";
      signalLabel = "High uncertainty";
    } else {
      call = "Do not proceed yet.";
      signalLabel = "Evidence not ready";
    }

    const riskCount = countMatches(padded, riskWords);
    const upsideCount = countMatches(padded, upsideWords);
    const specificCount = countMatches(padded, specificityWords);
    let why = "The " + topLens.label + " lens is the strongest detected signal. ";
    if (upsideCount > riskCount + 1) {
      why += "The opportunity case is stronger in the wording, but the score is capped until source quality and affected-group evidence are checked.";
    } else if (riskCount > upsideCount + 1) {
      why += "The concern case is stronger in the wording, so the score drops until the harm evidence, safeguards, and reversibility test are proven.";
    } else {
      why += "The question carries both plausible upside and plausible burden, so the responsible move is to hold the call conditional until source lanes are checked.";
    }

    if (specificCount === 0 && words < 12) {
      why += " The question is still broad, which lowers confidence and keeps the card from pretending precision.";
    }

    const evidenceBurden = "Prove the strongest benefit, the strongest burden, who carries each one, what would fail first, and what source would change the call.";
    const confidencePosture = score >= 70
      ? "Medium; enough signal to explore action, but not enough to skip source review."
      : score >= 50
        ? "Low-medium; the card is useful for direction, not final judgment."
        : "Low; the burden is on stronger evidence before action.";

    const yesChanges = [
      "Primary or high-quality sources support the strongest benefit claim.",
      "The main burden is bounded by enforceable rules, not promises.",
      "Affected groups have visible input, recourse, and monitoring."
    ];

    const noChanges = [
      "The best available evidence is mostly commentary, promotion, or assumption.",
      "The burden lands on people who have little control or recourse.",
      "The decision cannot explain what would make supporters change their minds."
    ];

    return {
      score: score,
      call: call,
      signalLabel: signalLabel,
      why: why,
      evidenceBurden: evidenceBurden,
      confidencePosture: confidencePosture,
      concern: concern,
      abundance: abundance,
      yesChanges: yesChanges,
      noChanges: noChanges,
      hold: "Hold the call conditional until the source lanes are checked and the change test is explicit.",
      lanes: lanes,
      missing: missing,
      antiBias: antiBias,
      notProven: "This card is not final research and does not claim checked citations yet. It is an intelligence frame that shows what must be proven next.",
      nextQuestion: "Which source would make a fair critic or supporter change their mind?"
    };
  }

  // Legacy smoke-test phrase kept intentionally: The claim has plausible upside and real risk.
  function makeCustomDecision(question) {
    const cleanQuestion = String(question || "What decision should we make?").trim();
    const intel = analyzeCustomQuestion(cleanQuestion);
    return {
      id: "custom",
      label: "Custom intelligence card",
      question: cleanQuestion,
      call: intel.call,
      score: intel.score,
      signalLabel: intel.signalLabel,
      why: intel.why,
      evidenceBurden: intel.evidenceBurden,
      confidencePosture: intel.confidencePosture,
      concern: intel.concern,
      abundance: intel.abundance,
      yesChanges: intel.yesChanges,
      noChanges: intel.noChanges,
      hold: intel.hold,
      lanes: intel.lanes,
      missing: intel.missing,
      antiBias: intel.antiBias,
      notProven: intel.notProven,
      nextQuestion: intel.nextQuestion
    };
  }

  function resetInspectPanelForNewDecision() {
    const stalePanel = $("pass69EvidencePanel");
    if (stalePanel && stalePanel.parentNode) {
      stalePanel.parentNode.removeChild(stalePanel);
    }

    const inspectButton = $("inspectButton");
    if (inspectButton) {
      inspectButton.textContent = "Inspect evidence";
      inspectButton.setAttribute("aria-expanded", "false");
      inspectButton.setAttribute("data-pass69-state", "closed");
    }
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
    buildLiveResearchLinks(currentDecision.question);
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
    resetInspectPanelForNewDecision();

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

  function parseEvidenceNotes() {
    const node = $("sourceNotesInput");
    const raw = node ? String(node.value || "").trim() : "";
    if (!raw) {
      return {
        raw: "",
        lines: [],
        quality: 0,
        concern: 0,
        abundance: 0,
        concrete: 0,
        official: 0,
        message: "No source notes added yet."
      };
    }

    const lines = raw.split(/\n|;|\u2022/g).map(function (line) {
      return line.trim();
    }).filter(Boolean).slice(0, 12);

    const lower = raw.toLowerCase();
    const qualityTerms = ["study", "report", "audit", "filing", "permit", "budget", "peer", "data", "record", "minutes", "court", "lawsuit", "evaluation", "survey"];
    const officialTerms = [".gov", "agency", "department", "commission", "city", "county", "state", "federal", "regulator", "public record"];
    const concernTerms = ["risk", "harm", "cost", "unfunded", "lawsuit", "incident", "failed", "bias", "privacy", "burden", "pollution", "unsafe", "water", "power", "ratepayer"];
    const abundanceTerms = ["benefit", "jobs", "revenue", "improve", "reduced", "safer", "access", "savings", "clean", "faster", "capacity", "investment", "evidence supports"];

    const quality = Math.min(10, countMatches(lower, qualityTerms) * 2);
    const official = Math.min(8, countMatches(lower, officialTerms) * 2);
    const concern = Math.min(14, countMatches(lower, concernTerms) * 2);
    const abundance = Math.min(14, countMatches(lower, abundanceTerms) * 2);
    const concrete = Math.min(10, ((raw.match(/[0-9]/g) || []).length > 0 ? 4 : 0) + Math.min(6, lines.length));

    let message = "Evidence notes detected: " + lines.length + " item" + (lines.length === 1 ? "" : "s") + ".";
    if (quality + official + concrete >= 14) {
      message += " Source quality signal is stronger.";
    } else {
      message += " Source quality is still thin.";
    }

    return {
      raw: raw,
      lines: lines,
      quality: quality,
      official: official,
      concern: concern,
      abundance: abundance,
      concrete: concrete,
      message: message
    };
  }

  function evidenceBulletFromLine(line) {
    const clean = String(line || "").trim();
    if (!clean) {
      return "";
    }
    return clean.length > 155 ? clean.slice(0, 152).trim() + "..." : clean;
  }

  function evidenceLevel(value, max) {
    const n = Number(value || 0);
    const pct = max ? n / max : 0;
    if (pct >= 0.75) {
      return "strong";
    }
    if (pct >= 0.42) {
      return "present";
    }
    if (pct > 0) {
      return "thin";
    }
    return "none";
  }

  function evidenceMeterTile(label, value, max, help) {
    const level = evidenceLevel(value, max);
    const safeValue = Math.max(0, Number(value || 0));
    const safeMax = Math.max(1, Number(max || 1));
    const pct = Math.max(0, Math.min(100, Math.round((safeValue / safeMax) * 100)));
    return [
      '<div class="meter-tile meter-' + level + '">',
      '<div class="meter-row"><span>' + label + '</span><strong>' + safeValue + '/' + safeMax + '</strong></div>',
      '<div class="meter-bar"><i style="width:' + pct + '%"></i></div>',
      '<p>' + help + '</p>',
      '</div>'
    ].join("");
  }

  function renderEvidenceMeter(notes) {
    const target = $("evidenceMeter");
    if (!target) {
      return;
    }

    if (!notes || !notes.raw) {
      target.innerHTML = '<div class="meter-empty">Add source notes, then build the card to see why the score moved.</div>';
      return;
    }

    const sourceQuality = Math.min(18, Number(notes.quality || 0) + Number(notes.official || 0));
    const concern = Math.min(14, Number(notes.concern || 0));
    const abundance = Math.min(14, Number(notes.abundance || 0));
    const concrete = Math.min(10, Number(notes.concrete || 0));

    let verdict = "Evidence signal is mixed. The card should stay conditional.";
    if (sourceQuality >= 12 && Math.abs(abundance - concern) >= 4) {
      verdict = abundance > concern
        ? "Higher-quality notes are leaning toward the opportunity case."
        : "Higher-quality notes are leaning toward the concern case.";
    } else if (sourceQuality < 6) {
      verdict = "Source quality is still thin. Treat the score movement as a prompt for research, not a conclusion.";
    } else if (concrete >= 7) {
      verdict = "The notes are concrete enough to improve the review, but still need citation checks.";
    }

    target.innerHTML = [
      '<div class="meter-verdict">' + verdict + '</div>',
      '<div class="meter-grid">',
      evidenceMeterTile("Source quality", sourceQuality, 18, "Reports, filings, audits, official records, data, or studies."),
      evidenceMeterTile("Concern signal", concern, 14, "Risk, cost, harm, burden, failure, privacy, safety, or public downside."),
      evidenceMeterTile("Opportunity signal", abundance, 14, "Benefit, jobs, savings, access, capacity, improvement, or success evidence."),
      evidenceMeterTile("Concrete detail", concrete, 10, "Numbers, multiple notes, specific claims, or named source facts."),
      '</div>'
    ].join("");
  }


  function applyEvidenceNotes(decision, question) {
    const base = Object.assign({}, decision || SCENARIOS[0]);
    const notes = parseEvidenceNotes();

    setText("evidenceSignalText", notes.message);
    renderEvidenceMeter(notes);

    if (!notes.raw) {
      base.evidenceNotes = notes;
      return base;
    }

    const net = notes.abundance - notes.concern;
    const qualityLift = Math.round((notes.quality + notes.official + notes.concrete) / 4);
    let score = Number(base.score || 50);

    score += qualityLift;
    if (net > 3) {
      score += Math.min(9, Math.round(net / 2));
    } else if (net < -3) {
      score -= Math.min(9, Math.round(Math.abs(net) / 2));
    }

    if (notes.quality + notes.official < 5) {
      score -= 4;
    }

    base.score = clampNumber(score, 18, 88);

    if (base.score >= 72) {
      base.signalLabel = "Evidence-supported but conditional";
      base.call = base.call === "Hold conditional." ? "Proceed with evidence locks." : base.call;
    } else if (base.score <= 42) {
      base.signalLabel = "Evidence concern rising";
      base.call = base.call === "Build with conditions." ? "Do not proceed yet." : base.call;
    } else if (Math.abs(net) >= 4) {
      base.signalLabel = net > 0 ? "Opportunity evidence rising" : "Concern evidence rising";
    } else {
      base.signalLabel = "Evidence mixed / inspect sources";
    }

    const usableLines = notes.lines.map(evidenceBulletFromLine).filter(Boolean);
    const firstLines = usableLines.slice(0, 3);

    base.why = base.why + " Pasted source notes changed the card because they add concrete evidence signals instead of generic reasoning.";
    base.confidencePosture = notes.quality + notes.official + notes.concrete >= 14
      ? "Medium prototype confidence; pasted evidence adds concrete source signals, but citations are not automatically verified yet."
      : "Low-medium; pasted notes help the frame, but source quality and citations still need verification.";

    base.missing = uniqueItems([
      "Verify the pasted source notes against the original records or links.",
      "Separate promotional claims from primary records.",
      "Check whether the concern-side and opportunity-side evidence come from comparable source quality."
    ].concat(base.missing || []), 6);

    if (firstLines.length) {
      const evidenceIntro = firstLines.map(function (line) {
        return "Pasted evidence signal: " + line;
      });

      if (net < -2) {
        base.concern = uniqueItems(evidenceIntro.concat(base.concern || []), 5);
      } else if (net > 2) {
        base.abundance = uniqueItems(evidenceIntro.concat(base.abundance || []), 5);
      } else {
        base.concern = uniqueItems([evidenceIntro[0]].concat(base.concern || []), 5);
        if (evidenceIntro[1]) {
          base.abundance = uniqueItems([evidenceIntro[1]].concat(base.abundance || []), 5);
        }
      }
    }

    base.lanes = (base.lanes || "") + " | Pasted source notes must be verified against original links, dates, authors, and primary records.";
    base.antiBias = "Do not reward evidence just because it was pasted. Grade it by source quality, recency, independence, and whether it could change the call.";
    base.notProven = "This card used pasted evidence notes, but the app has not independently retrieved or verified the sources yet.";
    base.nextQuestion = "Which pasted source is strongest enough that a fair opponent would have to answer it?";

    base.evidenceNotes = notes;
    return base;
  }

  function buildLiveResearchLinks(question) {
    const target = $("liveResearchLinks");
    if (!target) {
      return;
    }

    const clean = String(question || "").trim() || "AI public decision evidence";
    const q = encodeURIComponent(clean);
    const searches = [
      ["News", "https://www.google.com/search?tbm=nws&q=" + q],
      ["Official / gov", "https://www.google.com/search?q=" + encodeURIComponent(clean + " site:.gov OR site:.edu report data")],
      ["Scholar", "https://scholar.google.com/scholar?q=" + q],
      ["Public records", "https://www.google.com/search?q=" + encodeURIComponent(clean + " filing permit budget public record")],
      ["Critics", "https://www.google.com/search?q=" + encodeURIComponent(clean + " risk criticism concern evidence")],
      ["Supporters", "https://www.google.com/search?q=" + encodeURIComponent(clean + " benefit evidence success case study")]
    ];

    target.innerHTML = "";
    searches.forEach(function (item) {
      const a = document.createElement("a");
      a.href = item[1];
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = item[0];
      target.appendChild(a);
    });
  }


  function runBuildCard() {
    const input = $("questionInput");
    const button = $("runQuestion");
    const question = input ? input.value : "";
    const decision = applyEvidenceNotes(findScenario(question), question);

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


// Dragon's Tail Pass 76 - Intelligence Scoring Upgrade installed

// DRAGON'S TAIL PASS 78 - EVIDENCE INTAKE INSTALLED

// DRAGON'S TAIL PASS 79 - EVIDENCE SIGNAL METER INSTALLED

// DRAGON'S TAIL PASS 87 - STALE INSPECT PANEL FIX INSTALLED
