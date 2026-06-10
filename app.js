const groups = {
  A: [
    ["Mexico", "🇲🇽", "Quarter-finals (1970, 1986)", 15],
    ["South Africa", "🇿🇦", "Group stage", 61],
    ["South Korea", "🇰🇷", "Fourth place (2002)", 22],
    ["Czechia", "🇨🇿", "Runner-up as Czechoslovakia (1934, 1962)", 44]
  ],
  B: [
    ["Canada", "🇨🇦", "Group stage", 27],
    ["Bosnia and Herzegovina", "🇧🇦", "Group stage (2014)", 71],
    ["Qatar", "🇶🇦", "Group stage (2022)", 51],
    ["Switzerland", "🇨🇭", "Quarter-finals (1934, 1938, 1954)", 17]
  ],
  C: [
    ["Brazil", "🇧🇷", "Winner (1958, 1962, 1970, 1994, 2002)", 5],
    ["Morocco", "🇲🇦", "Fourth place (2022)", 11],
    ["Haiti", "🇭🇹", "Group stage (1974)", 84],
    ["Scotland", "🏴", "Group stage", 36]
  ],
  D: [
    ["United States", "🇺🇸", "Third place (1930)", 14],
    ["Paraguay", "🇵🇾", "Quarter-finals (2010)", 39],
    ["Australia", "🇦🇺", "Round of 16 (2006, 2022)", 26],
    ["Turkey", "🇹🇷", "Third place (2002)", 25]
  ],
  E: [
    ["Germany", "🇩🇪", "Winner (1954, 1974, 1990, 2014)", 9],
    ["Curacao", "🇨🇼", "Debut", 82],
    ["Ivory Coast", "🇨🇮", "Group stage", 42],
    ["Ecuador", "🇪🇨", "Round of 16 (2006)", 23]
  ],
  F: [
    ["Netherlands", "🇳🇱", "Runner-up (1974, 1978, 2010)", 7],
    ["Japan", "🇯🇵", "Round of 16", 18],
    ["Sweden", "🇸🇪", "Runner-up (1958)", 43],
    ["Tunisia", "🇹🇳", "Group stage", 40]
  ],
  G: [
    ["Belgium", "🇧🇪", "Third place (2018)", 8],
    ["Egypt", "🇪🇬", "Group stage", 34],
    ["Iran", "🇮🇷", "Group stage", 20],
    ["New Zealand", "🇳🇿", "Group stage", 86]
  ],
  H: [
    ["Spain", "🇪🇸", "Winner (2010)", 1],
    ["Cape Verde", "🇨🇻", "Debut", 68],
    ["Saudi Arabia", "🇸🇦", "Round of 16 (1994)", 60],
    ["Uruguay", "🇺🇾", "Winner (1930, 1950)", 16]
  ],
  I: [
    ["France", "🇫🇷", "Winner (1998, 2018)", 3],
    ["Senegal", "🇸🇳", "Quarter-finals (2002)", 19],
    ["Iraq", "🇮🇶", "Group stage (1986)", 58],
    ["Norway", "🇳🇴", "Round of 16 (1998)", 29]
  ],
  J: [
    ["Argentina", "🇦🇷", "Winner (1978, 1986, 2022)", 2],
    ["Algeria", "🇩🇿", "Round of 16 (2014)", 35],
    ["Austria", "🇦🇹", "Third place (1954)", 24],
    ["Jordan", "🇯🇴", "Debut", 66]
  ],
  K: [
    ["Portugal", "🇵🇹", "Third place (1966)", 6],
    ["DR Congo", "🇨🇩", "Group stage as Zaire (1974)", 56],
    ["Uzbekistan", "🇺🇿", "Debut", 50],
    ["Colombia", "🇨🇴", "Quarter-finals (2014)", 13]
  ],
  L: [
    ["England", "🏴", "Winner (1966)", 4],
    ["Croatia", "🇭🇷", "Runner-up (2018)", 10],
    ["Ghana", "🇬🇭", "Quarter-finals (2010)", 72],
    ["Panama", "🇵🇦", "Group stage (2018)", 30]
  ]
};

const groupDates = {
  A: ["2026-06-11", "2026-06-18", "2026-06-24"],
  B: ["2026-06-12", "2026-06-18", "2026-06-24"],
  C: ["2026-06-13", "2026-06-19", "2026-06-24"],
  D: ["2026-06-12", "2026-06-19", "2026-06-25"],
  E: ["2026-06-14", "2026-06-20", "2026-06-25"],
  F: ["2026-06-14", "2026-06-20", "2026-06-25"],
  G: ["2026-06-15", "2026-06-21", "2026-06-26"],
  H: ["2026-06-15", "2026-06-21", "2026-06-26"],
  I: ["2026-06-16", "2026-06-22", "2026-06-26"],
  J: ["2026-06-16", "2026-06-22", "2026-06-27"],
  K: ["2026-06-17", "2026-06-23", "2026-06-27"],
  L: ["2026-06-17", "2026-06-23", "2026-06-27"]
};

const venues = [
  "Mexico City", "Toronto", "Los Angeles", "New York/New Jersey",
  "Dallas", "Kansas City", "Atlanta", "Seattle", "Miami", "Boston",
  "Philadelphia", "Vancouver", "Houston", "Monterrey", "San Francisco Bay Area", "Guadalajara"
];

const confederations = {
  Mexico: "CONCACAF",
  "South Africa": "CAF",
  "South Korea": "AFC",
  Czechia: "UEFA",
  Canada: "CONCACAF",
  "Bosnia and Herzegovina": "UEFA",
  Qatar: "AFC",
  Switzerland: "UEFA",
  Brazil: "CONMEBOL",
  Morocco: "CAF",
  Haiti: "CONCACAF",
  Scotland: "UEFA",
  "United States": "CONCACAF",
  Paraguay: "CONMEBOL",
  Australia: "AFC",
  Turkey: "UEFA",
  Germany: "UEFA",
  Curacao: "CONCACAF",
  "Ivory Coast": "CAF",
  Ecuador: "CONMEBOL",
  Netherlands: "UEFA",
  Japan: "AFC",
  Sweden: "UEFA",
  Tunisia: "CAF",
  Belgium: "UEFA",
  Egypt: "CAF",
  Iran: "AFC",
  "New Zealand": "OFC",
  Spain: "UEFA",
  "Cape Verde": "CAF",
  "Saudi Arabia": "AFC",
  Uruguay: "CONMEBOL",
  France: "UEFA",
  Senegal: "CAF",
  Iraq: "AFC",
  Norway: "UEFA",
  Argentina: "CONMEBOL",
  Algeria: "CAF",
  Austria: "UEFA",
  Jordan: "AFC",
  Portugal: "UEFA",
  "DR Congo": "CAF",
  Uzbekistan: "AFC",
  Colombia: "CONMEBOL",
  England: "UEFA",
  Croatia: "UEFA",
  Ghana: "CAF",
  Panama: "CONCACAF"
};

const matchupFacts = {
  "Mexico|South Africa": "Mexico and South Africa opened the 2010 World Cup against each other, a 1-1 draw remembered for Siphiwe Tshabalala's thunderous first goal of that tournament.",
  "Brazil|Morocco": "Brazil beat Morocco 3-0 in the 1998 World Cup group stage, but Morocco won their most recent meeting, a 2023 friendly.",
  "Scotland|Morocco": "Morocco beat Scotland 3-0 in their final 1998 World Cup group match; this group also reunites Brazil, Morocco, and Scotland from that 1998 section.",
  "Scotland|Brazil": "Scotland have met Brazil four times at World Cups and are still chasing a first World Cup win over the five-time champions.",
  "United States|Paraguay": "The United States beat Paraguay 3-0 at the 1930 World Cup, the same tournament that produced the USA's best-ever finish.",
  "United States|Australia": "The U.S. and Australia bring two of the tournament's more athletic, transition-minded squads into a host-nation pressure test.",
  "Turkey|United States": "Turkey and the United States have a short but punchy modern history, including a recent friendly win for Turkey before this tournament cycle.",
  "Australia|Turkey": "Turkey won both previous meetings with Australia, both friendlies played in 2004.",
  "Paraguay|Australia": "Paraguay and Australia have met several times, most recently before this tournament in a 2010 friendly won by Australia.",
  "Germany|Ecuador": "Germany have beaten Ecuador twice, including a 3-0 win at the 2006 World Cup.",
  "Germany|Ivory Coast": "Germany and Ivory Coast's only previous meeting was a 2-2 friendly in 2009.",
  "Netherlands|Japan": "The Netherlands beat Japan 1-0 at the 2010 World Cup; Japan are still hunting a first quarter-final appearance.",
  "Tunisia|Japan": "Japan beat Tunisia 2-0 at the 2002 World Cup, the tournament Japan co-hosted.",
  "Netherlands|Sweden": "The Netherlands and Sweden have a long European history, including a scoreless draw in the 1974 World Cup group stage.",
  "Belgium|Egypt": "Egypt beat Belgium 2-1 in a 2022 friendly, giving this fixture a recent upset edge despite Belgium's stronger ranking.",
  "Iran|New Zealand": "Iran and New Zealand have met only a couple of times; Iran won their 2003 AFC-OFC Challenge Cup meeting 3-0.",
  "Saudi Arabia|Uruguay": "Uruguay beat Saudi Arabia 1-0 at the 2018 World Cup, but Saudi Arabia's 1994 Round of 16 run remains a benchmark for the program.",
  "Argentina|Algeria": "Argentina and Algeria have met only rarely; their known senior meeting was a wild 4-3 Argentina friendly win in 2007.",
  "Portugal|Colombia": "Portugal and Colombia are the Group K heavyweights, pairing Cristiano Ronaldo's likely farewell tournament story with Colombia's best generation since 2014.",
  "England|Croatia": "Croatia beat England 2-1 after extra time in the 2018 World Cup semi-final, one of the defining modern rivalry moments for both teams.",
  "England|Ghana": "England and Ghana's only prior senior meeting was a 1-1 friendly at Wembley in 2011, a lively match shaped by Ghana's huge London support.",
  "Ghana|Panama": "Ghana and Panama have never met at a World Cup; both arrive with recent tournament-era memories of breaking new ground.",
  "England|Panama": "England beat Panama 6-1 in the 2018 World Cup group stage, Panama's first World Cup appearance.",
  "Croatia|Ghana": "Croatia's 2018 final run and Ghana's 2010 quarter-final heartbreak give this matchup two very different near-glory stories.",
  "Croatia|Panama": "Croatia are chasing another deep run after reaching the 2018 final and 2022 semi-finals; Panama are trying to turn a second World Cup appearance into a first knockout push."
};

const allTeams = Object.entries(groups).flatMap(([group, list], index) =>
  list.map(([name, flag, best, ranking], seed) => ({
    id: slug(name),
    name,
    flag,
    best,
    ranking,
    group,
    seed: seed + 1,
    rankBias: seed + index * 0.01
  }))
);

const teamByName = Object.fromEntries(allTeams.map(team => [team.name, team]));

const matchPairs = [
  [[0, 1], [2, 3]],
  [[0, 2], [3, 1]],
  [[3, 0], [1, 2]]
];

const matches = buildGroupMatches().concat(buildKnockoutMatches());
let selectedTeam = "United States";
let stageFilter = "all";
let searchTerm = "";
let selectedTeamOnly = false;
let scheduleSortMode = "date";
let teamSortMode = "az";

const els = {
  search: document.querySelector("#searchInput"),
  select: document.querySelector("#teamSelect"),
  focus: document.querySelector("#focusPanel"),
  matchList: document.querySelector("#matchList"),
  scheduleCount: document.querySelector("#scheduleCount"),
  sort: document.querySelector("#sortSelect"),
  teamSort: document.querySelector("#teamSortSelect"),
  selectedTeamOnly: document.querySelector("#selectedTeamOnly"),
  clearFilters: document.querySelector("#clearFilters"),
  groups: document.querySelector("#groupsGrid"),
  teamGrid: document.querySelector("#teamGrid"),
  route: document.querySelector("#routePanel"),
  bracket: document.querySelector("#bracket")
};

init();

function init() {
  els.select.innerHTML = allTeams
    .map(team => `<option value="${team.name}">${team.flag} ${team.name} - FIFA #${team.ranking}</option>`)
    .join("");
  els.select.value = selectedTeam;

  document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelectorAll("[data-filter-stage]").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter-stage]").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      stageFilter = button.dataset.filterStage;
      renderSchedule();
    });
  });

  els.search.addEventListener("input", event => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderAll();
  });

  els.sort.addEventListener("change", event => {
    scheduleSortMode = event.target.value;
    renderSchedule();
  });

  els.teamSort.addEventListener("change", event => {
    teamSortMode = event.target.value;
    renderTeams();
  });

  els.select.addEventListener("change", event => {
    selectedTeam = event.target.value;
    renderAll();
  });

  els.selectedTeamOnly.addEventListener("click", () => {
    selectedTeamOnly = !selectedTeamOnly;
    els.selectedTeamOnly.classList.toggle("active", selectedTeamOnly);
    renderSchedule();
  });

  els.clearFilters.addEventListener("click", () => {
    searchTerm = "";
    stageFilter = "all";
    selectedTeamOnly = false;
    scheduleSortMode = "date";
    els.search.value = "";
    els.sort.value = "date";
    els.selectedTeamOnly.classList.remove("active");
    document.querySelectorAll("[data-filter-stage]").forEach(button => {
      button.classList.toggle("active", button.dataset.filterStage === "all");
    });
    renderAll();
  });

  document.querySelector("#collapseGroups").addEventListener("click", event => {
    const cards = [...document.querySelectorAll(".group-card")];
    const shouldOpen = event.target.textContent === "Expand all";
    cards.forEach(card => card.open = shouldOpen);
    event.target.textContent = shouldOpen ? "Collapse all" : "Expand all";
  });

  renderAll();
}

function switchView(view) {
  document.querySelectorAll(".tab").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  document.querySelectorAll(".view").forEach(section => section.classList.toggle("active", section.id === `${view}View`));
}

function renderAll() {
  renderFocus();
  renderSchedule();
  renderGroups();
  renderPath();
  renderTeams();
}

function renderFocus() {
  const team = teamByName[selectedTeam];
  const next = matches.find(match => match.stage === "Group" && match.teams.includes(team.name));
  const standing = getStandings(team.group).find(row => row.name === team.name);

  els.focus.innerHTML = `
    <div class="flag" aria-hidden="true">${team.flag}</div>
    <div class="focus-copy">
      <p class="eyebrow">Selected path</p>
      <h2>${team.name}</h2>
      <div class="pill-row">
        <span class="pill">Group ${team.group}</span>
        <span class="pill">FIFA #${team.ranking}</span>
        <span class="pill">${standing.points} pts</span>
        <span class="pill">${standing.rankLabel}</span>
        <span class="pill">${team.best}</span>
      </div>
    </div>
    <div class="focus-next">
      <b>Next match</b>
      <p>${next ? `${formatDate(next.date)} vs ${next.teams.find(name => name !== team.name)} on ${next.channel}` : "Knockout slot pending"}</p>
    </div>
  `;
}

function renderSchedule() {
  const filtered = matches.filter(match => {
    const searchable = [
      match.stage, match.group, match.channel, match.venue, match.round,
      ...match.teams,
      ...match.teams.map(name => teamByName[name] ? `fifa ${teamByName[name].ranking} #${teamByName[name].ranking}` : "")
    ].join(" ").toLowerCase();
    const stageOk = stageFilter === "all" || (stageFilter === "Knockout" ? match.stage !== "Group" : match.stage === "Group");
    const teamOk = !selectedTeamOnly || match.teams.includes(selectedTeam);
    return stageOk && teamOk && (!searchTerm || searchable.includes(searchTerm));
  }).sort(compareMatches);

  els.scheduleCount.textContent = `Showing ${filtered.length} of ${matches.length} matches`;

  if (!filtered.length) {
    els.matchList.innerHTML = `<div class="empty">No matches match the current filter.</div>`;
    return;
  }

  els.matchList.innerHTML = filtered.map(match => {
    const teamLine = match.teams.map(name => {
      const team = teamByName[name];
      if (!team) return `<span>${name}</span>`;
      return `<span class="team-chip" data-tip="${escapeAttr(`${team.name}: FIFA #${team.ranking}. ${team.best}. Group ${team.group}.`)}">${team.flag} ${team.name}</span>`;
    }).join(`<span class="muted">vs</span>`);

    return `
      <article class="match-card">
        <div class="date-box">
          <span>${formatMonthDay(match.date)}</span>
          <b>${formatTime(match.date)}</b>
          <span>ET</span>
        </div>
        <div class="matchup">
          <div class="teams-line">${teamLine}</div>
          <div class="meta-line">
            <span>${match.round}</span>
            <span>${match.venue}</span>
            <span>${match.status}</span>
          </div>
        </div>
        <div class="match-actions">
          <span class="channel">${match.channel}</span>
          <button class="details-toggle" aria-label="Toggle match details">+</button>
        </div>
        <div class="match-detail">
          <div class="detail-box"><b>Broadcast</b>${match.channel} in English. Updateable per-match channel field.</div>
          <div class="detail-box"><b>Context</b>${match.note}</div>
          <div class="detail-box"><b>Stage impact</b>${match.impact}</div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".details-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".match-card");
      card.classList.toggle("open");
      button.textContent = card.classList.contains("open") ? "−" : "+";
    });
  });
}

function renderGroups() {
  els.groups.innerHTML = Object.keys(groups).map(group => {
    const rows = getStandings(group).filter(row => matchesSearch(row.name, group));
    if (!rows.length && searchTerm) return "";
    return `
      <details class="group-card" open>
        <summary>
          <span>Group ${group}</span>
          <span class="pill">${rows.length || 4} teams</span>
        </summary>
        <table class="standings">
          <thead>
            <tr><th>Team</th><th>Rk</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr>
          </thead>
          <tbody>
            ${rows.map(row => `
              <tr>
                <td><span class="team-chip" data-tip="${escapeAttr(`${row.name}: FIFA #${row.ranking}. ${row.best}`)}">${row.flag} ${row.name}</span></td>
                <td>${row.ranking}</td><td>${row.played}</td><td>${row.won}</td><td>${row.drawn}</td><td>${row.lost}</td><td>${row.gd}</td><td><b>${row.points}</b></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </details>
    `;
  }).join("") || `<div class="empty">No groups match the current search.</div>`;
}

function renderPath() {
  const team = teamByName[selectedTeam];
  const standing = getStandings(team.group).find(row => row.name === team.name);
  const paths = getPathCopy(team.group);
  const teamMatches = matches.filter(match => match.teams.includes(team.name));
  const optimal = getOptimalPath(team, paths);
  const branches = [
    {
      label: "Runner-up branch",
      status: "Alternate",
      text: paths.runnerUp,
      tone: "branch"
    },
    {
      label: "Third-place branch",
      status: "Risk path",
      text: paths.third,
      tone: "risk"
    }
  ];

  els.route.innerHTML = `
    <p class="eyebrow">Route card</p>
    <h2>${team.flag} ${team.name}</h2>
      <div class="pill-row">
        <span class="pill">Current: ${standing.rankLabel}</span>
        <span class="pill">FIFA #${team.ranking}</span>
        <span class="pill">${team.best}</span>
      </div>
    <div class="route-steps">
      <div class="route-step"><b>Optimal path</b><span>Win Group ${team.group}, avoid third-place uncertainty, and enter the Round of 32 through the cleanest bracket slot.</span></div>
      <div class="route-step"><b>Group target</b><span>Finish top two for automatic Round of 32 entry. Third place can still advance if ranked among the best eight third-place teams.</span></div>
      <div class="route-step"><b>Remaining group games</b><span>${teamMatches.map(match => `${formatMonthDay(match.date)} ${formatTime(match.date)} vs ${match.teams.find(name => name !== team.name)}`).join("; ")}</span></div>
    </div>
  `;

  els.bracket.innerHTML = `
    <div class="path-workbench" aria-label="${team.name} route flow">
      <div class="workbench-bar">
        <span class="traffic-dot blue"></span>
        <span class="traffic-dot gold"></span>
        <span class="traffic-dot green"></span>
        <span class="workbench-title">path/${team.id}.cup-route</span>
        <span class="workbench-badge">Optimal: Group winner</span>
      </div>
      <div class="flow-grid">
        ${optimal.map((node, index) => `
          <section class="flow-stage ${index === 1 ? "decision-stage" : ""}">
            <div class="path-node ${node.tone}">
              <span class="node-kicker">${node.kicker}</span>
              <b>${node.title}</b>
              <p>${node.text}</p>
              <span class="node-meta">${node.meta}</span>
            </div>
            ${index === 1 ? `
              <div class="branch-stack">
                ${branches.map(branch => `
                  <div class="path-node ${branch.tone}">
                    <span class="node-kicker">${branch.status}</span>
                    <b>${branch.label}</b>
                    <p>${branch.text}</p>
                    <span class="node-meta">Diverges from optimal group-winner route</span>
                  </div>
                `).join("")}
              </div>
            ` : ""}
          </section>
        `).join("")}
      </div>
    </div>
  `;
}

function renderTeams() {
  const filtered = allTeams
    .filter(team => matchesSearch(team.name, team.group, team.best, `fifa ${team.ranking}`, `#${team.ranking}`))
    .sort(compareTeams);
  els.teamGrid.innerHTML = filtered.map(team => {
    const standing = getStandings(team.group).find(row => row.name === team.name);
    return `
      <article class="team-card" data-tip="${escapeAttr(`${team.name}: FIFA #${team.ranking}. ${team.best}. Select this team to highlight its path.`)}">
        <div class="flag">${team.flag}</div>
        <h3>${team.name}</h3>
        <div class="pill-row">
          <span class="pill">Group ${team.group}</span>
          <span class="pill">FIFA #${team.ranking}</span>
          <span class="pill">${standing.points} pts</span>
          <span class="pill">${team.best}</span>
        </div>
      </article>
    `;
  }).join("") || `<div class="empty">No teams match the current search.</div>`;

  document.querySelectorAll(".team-card").forEach(card => {
    card.addEventListener("click", () => {
      const name = card.querySelector("h3").textContent;
      selectedTeam = name;
      els.select.value = name;
      renderAll();
    });
  });
}

function buildGroupMatches() {
  let id = 1;
  return Object.entries(groups).flatMap(([group, list], groupIndex) => {
    const groupTeams = list.map(team => team[0]);
    return matchPairs.flatMap((roundPairs, roundIndex) =>
      roundPairs.map((pair, pairIndex) => {
        const date = makeDate(groupDates[group][roundIndex], groupIndex, roundIndex, pairIndex);
        const teams = [groupTeams[pair[0]], groupTeams[pair[1]]];
        return {
          id: `G${id++}`,
          stage: "Group",
          round: `Group ${group}, Matchday ${roundIndex + 1}`,
          group,
          teams,
          date,
          venue: venues[(groupIndex * 2 + roundIndex + pairIndex) % venues.length],
          channel: pickChannel(teams, roundIndex, pairIndex),
          status: "Scheduled",
          note: buildMatchContext(teams, group),
          impact: "Three points for a win, one for a draw. Top two advance; eight third-place teams also qualify."
        };
      })
    );
  });
}

function buildKnockoutMatches() {
  const dates = [
    ["Round of 32", "2026-06-28", 16],
    ["Round of 16", "2026-07-04", 8],
    ["Quarter-final", "2026-07-09", 4],
    ["Semi-final", "2026-07-14", 2],
    ["Third-place match", "2026-07-18", 1],
    ["Final", "2026-07-19", 1]
  ];
  let id = 73;
  return dates.flatMap(([round, startDate, count], roundIndex) =>
    Array.from({ length: count }, (_, index) => ({
      id: `K${id++}`,
      stage: "Knockout",
      round,
      group: "",
      teams: [`${round} slot ${index * 2 + 1}`, `${round} slot ${index * 2 + 2}`],
      date: makeDate(startDate, index, roundIndex, 0),
      venue: venues[(index + roundIndex * 3) % venues.length],
      channel: round === "Final" || round === "Semi-final" ? "FOX" : index % 3 === 0 ? "FOX" : "FS1",
      status: "Pending qualifiers",
      note: "Team names populate as the bracket is resolved.",
      impact: "Single-elimination match. Extra time and penalties decide tied knockout games."
    }))
  );
}

function getStandings(group) {
  return groups[group].map(([name, flag, best, ranking], index) => {
    const played = 0;
    const points = 0;
    return {
      name,
      flag,
      best,
      ranking,
      played,
      won: 0,
      drawn: 0,
      lost: 0,
      gd: 0,
      points,
      rankLabel: index < 2 ? "Auto-advance zone" : index === 2 ? "Third-place bubble" : "Needs points",
      sort: index
    };
  }).sort((a, b) => b.points - a.points || a.sort - b.sort);
}

function compareMatches(a, b) {
  if (scheduleSortMode === "az") return matchSortName(a).localeCompare(matchSortName(b));
  if (scheduleSortMode === "za") return matchSortName(b).localeCompare(matchSortName(a));
  if (scheduleSortMode === "rank") return averageMatchRank(a) - averageMatchRank(b) || new Date(a.date) - new Date(b.date);
  return new Date(a.date) - new Date(b.date);
}

function compareTeams(a, b) {
  if (teamSortMode === "za") return b.name.localeCompare(a.name);
  if (teamSortMode === "rank") return a.ranking - b.ranking || a.name.localeCompare(b.name);
  return a.name.localeCompare(b.name);
}

function compareStandingRows(a, b) {
  return b.points - a.points || a.sort - b.sort;
}

function matchSortName(match) {
  return match.teams.map(name => name.replace(/^(Round of 32|Round of 16|Quarter-final|Semi-final|Third-place match|Final) slot /, "zz slot ")).sort().join(" ");
}

function averageMatchRank(match) {
  const ranks = match.teams.map(name => teamByName[name]?.ranking).filter(Boolean);
  return ranks.length ? ranks.reduce((total, rank) => total + rank, 0) / ranks.length : 999;
}

function getOptimalPath(team, paths) {
  return [
    {
      kicker: "Input",
      title: `${team.flag} ${team.name}`,
      text: `Group ${team.group}, FIFA #${team.ranking}. Current model starts before results are entered.`,
      meta: "Selected team",
      tone: "start"
    },
    {
      kicker: "Decision",
      title: `Win Group ${team.group}`,
      text: "Optimal route assumes first place in the group: maximum points target, direct Round of 32 entry, no best-third ranking dependency.",
      meta: "Main route continues right",
      tone: "decision"
    },
    {
      kicker: "Round of 32",
      title: "Preferred knockout slot",
      text: paths.winner,
      meta: "Group-winner path",
      tone: "optimal"
    },
    {
      kicker: "Round of 16",
      title: "Survive first knockout",
      text: "Opponent becomes known after adjacent Round of 32 results. Keep route highlighted as results populate.",
      meta: "Single elimination",
      tone: "optimal"
    },
    {
      kicker: "Quarter-final",
      title: "Last-eight checkpoint",
      text: "A quarter-final would match or exceed many teams' historical best. Pressure and travel load start to matter here.",
      meta: "Four wins from the cup at kickoff",
      tone: "optimal"
    },
    {
      kicker: "Semi-final",
      title: "Final-four gate",
      text: "Win here to reach the final; lose and the path drops into the third-place match.",
      meta: "Divergence: final or bronze game",
      tone: "optimal"
    },
    {
      kicker: "Final",
      title: "Cup match",
      text: "July 19 at New York/New Jersey. This is the end of the optimal path.",
      meta: "Lift trophy",
      tone: "finish"
    }
  ];
}

function buildMatchContext(teams, group) {
  const [firstName, secondName] = teams;
  const first = teamByName[firstName];
  const second = teamByName[secondName];
  const exactFact = getMatchupFact(firstName, secondName);
  const facts = exactFact ? [exactFact] : [];
  const champions = teams.filter(name => /Winner/.test(teamByName[name].best));
  const debuts = teams.filter(name => teamByName[name].best === "Debut");
  const rankingGap = Math.abs(first.ranking - second.ranking);

  if (champions.length === 2) {
    facts.push(`${firstName} and ${secondName} are both former world champions, so Group ${group} gets a heavyweight historical matchup.`);
  } else if (champions.length === 1) {
    facts.push(`${champions[0]} bring champion pedigree into a Group ${group} test against a side looking for a statement result.`);
  }

  if (debuts.length) {
    facts.push(`${debuts.join(" and ")} ${debuts.length === 1 ? "are" : "are"} making a World Cup debut, which adds a first-chapter feel to this fixture.`);
  }

  if (confederations[firstName] === confederations[secondName]) {
    facts.push(`This is an intra-${confederations[firstName]} matchup, so familiarity and regional styles could matter as much as ranking.`);
  }

  if (rankingGap >= 40) {
    const favorite = first.ranking < second.ranking ? first : second;
    const underdog = first.ranking < second.ranking ? second : first;
    facts.push(`The ranking gap is wide: ${favorite.name} are FIFA #${favorite.ranking}, while ${underdog.name} are FIFA #${underdog.ranking}.`);
  } else if (rankingGap <= 5) {
    facts.push(`Only ${rankingGap} FIFA ranking places separate them, making this one of the tighter Group ${group} paper matchups.`);
  }

  facts.push(`${firstName}'s best World Cup result is ${first.best}; ${secondName}'s is ${second.best}.`);

  return facts.slice(0, 3).join(" ");
}

function getMatchupFact(first, second) {
  return matchupFacts[`${first}|${second}`] || matchupFacts[`${second}|${first}`] || "";
}

function getPathCopy(group) {
  const map = {
    A: ["plays a third-place team from C, E, F, H, I, or J", "plays runner-up of Group B", "may play winner of Group C, E, or F"],
    B: ["plays a third-place team from E, F, G, I, or J", "plays runner-up of Group A", "may play winner of Group D or E"],
    C: ["plays runner-up of Group F", "plays winner of Group F", "may play winner of Group A, E, or I"],
    D: ["plays a third-place team from B, E, F, I, or J", "plays runner-up of Group G", "may play winner of Group E, I, or K"],
    E: ["plays a third-place team from A, B, C, D, or F", "plays runner-up of Group I", "may play winner of Group A, B, D, G, K, or L"],
    F: ["plays runner-up of Group C", "plays winner of Group C", "may play winner of Group A, B, D, E, or I"],
    G: ["plays a third-place team from A, E, H, I, or J", "plays runner-up of Group D", "may play winner of Group B or I"],
    H: ["plays runner-up of Group J", "plays winner of Group J", "may play winner of Group A, G, I, or L"],
    I: ["plays a third-place team from C, D, F, G, or H", "plays runner-up of Group E", "may play winner of Group C, D, E, F, G, H, J, or L"],
    J: ["plays runner-up of Group H", "plays winner of Group H", "may play winner of Group B, D, G, H, or L"],
    K: ["plays a third-place team from D, E, I, J, or L", "plays runner-up of Group L", "may play winner of Group L"],
    L: ["plays a third-place team from E, H, I, J, or K", "plays runner-up of Group K", "may play winner of Group K"]
  };
  const [winner, runnerUp, third] = map[group];
  return { winner, runnerUp, third };
}

function pickChannel(teams, roundIndex, pairIndex) {
  const foxTeams = new Set(["United States", "Mexico", "Canada", "Argentina", "Brazil", "England", "France", "Spain", "Germany", "Portugal"]);
  return teams.some(team => foxTeams.has(team)) || roundIndex === 2 && pairIndex === 0 ? "FOX" : "FS1";
}

function makeDate(date, groupIndex, roundIndex, pairIndex) {
  const hours = [12, 15, 18, 21];
  const hour = hours[(groupIndex + roundIndex + pairIndex) % hours.length];
  return `${date}T${String(hour).padStart(2, "0")}:00:00-04:00`;
}

function formatDate(date) {
  return `${formatMonthDay(date)} at ${formatTime(date)} ET`;
}

function formatMonthDay(date) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(date));
}

function formatTime(date) {
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" }).format(new Date(date));
}

function matchesSearch(...values) {
  if (!searchTerm) return true;
  return values.join(" ").toLowerCase().includes(searchTerm);
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeAttr(value) {
  return value.replace(/"/g, "&quot;");
}
