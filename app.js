const groups = {
  A: [
    ["Mexico", "MEX", "Quarter-finals (1970, 1986)", 15],
    ["South Africa", "RSA", "Group stage", 61],
    ["South Korea", "KOR", "Fourth place (2002)", 22],
    ["Czechia", "CZE", "Runner-up as Czechoslovakia (1934, 1962)", 44]
  ],
  B: [
    ["Canada", "CAN", "Group stage", 27],
    ["Bosnia and Herzegovina", "BIH", "Group stage (2014)", 71],
    ["Qatar", "QAT", "Group stage (2022)", 51],
    ["Switzerland", "SUI", "Quarter-finals (1934, 1938, 1954)", 17]
  ],
  C: [
    ["Brazil", "BRA", "Winner (1958, 1962, 1970, 1994, 2002)", 5],
    ["Morocco", "MAR", "Fourth place (2022)", 11],
    ["Haiti", "HAI", "Group stage (1974)", 84],
    ["Scotland", "SCO", "Group stage", 36]
  ],
  D: [
    ["United States", "USA", "Third place (1930)", 14],
    ["Paraguay", "PAR", "Quarter-finals (2010)", 39],
    ["Australia", "AUS", "Round of 16 (2006, 2022)", 26],
    ["Turkey", "TUR", "Third place (2002)", 25]
  ],
  E: [
    ["Germany", "GER", "Winner (1954, 1974, 1990, 2014)", 9],
    ["Curacao", "CUW", "Debut", 82],
    ["Ivory Coast", "CIV", "Group stage", 42],
    ["Ecuador", "ECU", "Round of 16 (2006)", 23]
  ],
  F: [
    ["Netherlands", "NED", "Runner-up (1974, 1978, 2010)", 7],
    ["Japan", "JPN", "Round of 16", 18],
    ["Sweden", "SWE", "Runner-up (1958)", 43],
    ["Tunisia", "TUN", "Group stage", 40]
  ],
  G: [
    ["Belgium", "BEL", "Third place (2018)", 8],
    ["Egypt", "EGY", "Group stage", 34],
    ["Iran", "IRN", "Group stage", 20],
    ["New Zealand", "NZL", "Group stage", 86]
  ],
  H: [
    ["Spain", "ESP", "Winner (2010)", 1],
    ["Cape Verde", "CPV", "Debut", 68],
    ["Saudi Arabia", "KSA", "Round of 16 (1994)", 60],
    ["Uruguay", "URU", "Winner (1930, 1950)", 16]
  ],
  I: [
    ["France", "FRA", "Winner (1998, 2018)", 3],
    ["Senegal", "SEN", "Quarter-finals (2002)", 19],
    ["Iraq", "IRQ", "Group stage (1986)", 58],
    ["Norway", "NOR", "Round of 16 (1998)", 29]
  ],
  J: [
    ["Argentina", "ARG", "Winner (1978, 1986, 2022)", 2],
    ["Algeria", "ALG", "Round of 16 (2014)", 35],
    ["Austria", "AUT", "Third place (1954)", 24],
    ["Jordan", "JOR", "Debut", 66]
  ],
  K: [
    ["Portugal", "POR", "Third place (1966)", 6],
    ["DR Congo", "COD", "Group stage as Zaire (1974)", 56],
    ["Uzbekistan", "UZB", "Debut", 50],
    ["Colombia", "COL", "Quarter-finals (2014)", 13]
  ],
  L: [
    ["England", "ENG", "Winner (1966)", 4],
    ["Croatia", "CRO", "Runner-up (2018)", 10],
    ["Ghana", "GHA", "Quarter-finals (2010)", 72],
    ["Panama", "PAN", "Group stage (2018)", 30]
  ]
};

const countryFlagCodes = {
  Mexico: "mx",
  "South Africa": "za",
  "South Korea": "kr",
  Czechia: "cz",
  Canada: "ca",
  "Bosnia and Herzegovina": "ba",
  Qatar: "qa",
  Switzerland: "ch",
  Brazil: "br",
  Morocco: "ma",
  Haiti: "ht",
  Scotland: "gb-sct",
  "United States": "us",
  Paraguay: "py",
  Australia: "au",
  Turkey: "tr",
  Germany: "de",
  Curacao: "cw",
  "Ivory Coast": "ci",
  Ecuador: "ec",
  Netherlands: "nl",
  Japan: "jp",
  Sweden: "se",
  Tunisia: "tn",
  Belgium: "be",
  Egypt: "eg",
  Iran: "ir",
  "New Zealand": "nz",
  Spain: "es",
  "Cape Verde": "cv",
  "Saudi Arabia": "sa",
  Uruguay: "uy",
  France: "fr",
  Senegal: "sn",
  Iraq: "iq",
  Norway: "no",
  Argentina: "ar",
  Algeria: "dz",
  Austria: "at",
  Jordan: "jo",
  Portugal: "pt",
  "DR Congo": "cd",
  Uzbekistan: "uz",
  Colombia: "co",
  England: "gb-eng",
  Croatia: "hr",
  Ghana: "gh",
  Panama: "pa"
};

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
  list.map(([name, code, best, ranking], seed) => ({
    id: slug(name),
    name,
    code,
    flagCode: countryFlagCodes[name] || "",
    best,
    ranking,
    group,
    seed: seed + 1,
    rankBias: seed + index * 0.01
  }))
);

const teamByName = Object.fromEntries(allTeams.map(team => [team.name, team]));

function renderTeamName(teamOrName) {
  const team = typeof teamOrName === "string" ? teamByName[teamOrName] : teamOrName;
  if (!team) return escapeHtml(String(teamOrName || ""));
  return `<span class="team-name" title="${escapeAttr(team.name)}"><span class="team-name-full">${escapeHtml(team.name)}</span><span class="team-name-abbr">${escapeHtml(team.code)}</span>${renderTeamFlag(team)}</span>`;
}

function renderTeamFlag(team) {
  if (!team?.flagCode) return "";
  const code = escapeAttr(team.flagCode);
  return ` <img class="country-flag" src="https://flagcdn.com/${code}.svg" alt="" loading="lazy">`;
}

function formatTeamPlain(name) {
  return name || "";
}

const officialGroupFixtures = [
  ["A", "Mexico", "South Africa", "2026-06-11T19:00:00Z", "FOX", "Estadio Banorte - Mexico City, Mexico", ["FOX","Tele","Peacock"]],
  ["A", "South Korea", "Czechia", "2026-06-12T02:00:00Z", "FS1", "Estadio Akron - Guadalajara, Mexico", ["FS1","Tele","Peacock"]],
  ["B", "Canada", "Bosnia and Herzegovina", "2026-06-12T19:00:00Z", "FOX", "BMO Field - Toronto, Canada", ["FOX","Tele","Peacock"]],
  ["D", "United States", "Paraguay", "2026-06-13T01:00:00Z", "FOX", "SoFi Stadium - Inglewood, California, USA", ["FOX","Tele","Peacock"]],
  ["B", "Qatar", "Switzerland", "2026-06-13T19:00:00Z", "FOX", "Levi's Stadium - Santa Clara, California, USA", ["FOX","Tele","Peacock"]],
  ["C", "Brazil", "Morocco", "2026-06-13T22:00:00Z", "FOX", "MetLife Stadium - East Rutherford, New Jersey, USA", ["FOX","Tele","Peacock"]],
  ["C", "Haiti", "Scotland", "2026-06-14T01:00:00Z", "FOX", "Gillette Stadium - Foxborough, Massachusetts, USA", ["FOX","Tele","Peacock"]],
  ["D", "Australia", "Turkey", "2026-06-14T04:00:00Z", "FS1", "BC Place - Vancouver, Canada", ["FS1","Tele","Peacock"]],
  ["E", "Germany", "Curacao", "2026-06-14T17:00:00Z", "FOX", "NRG Stadium - Houston, Texas, USA", ["FOX","Tele","Peacock"]],
  ["F", "Netherlands", "Japan", "2026-06-14T20:00:00Z", "FOX", "AT&T Stadium - Arlington, Texas, USA", ["FOX","Tele","Peacock"]],
  ["E", "Ivory Coast", "Ecuador", "2026-06-14T23:00:00Z", "FS1", "Lincoln Financial Field - Philadelphia, Pennsylvania, USA", ["FS1","Tele","Peacock"]],
  ["F", "Sweden", "Tunisia", "2026-06-15T02:00:00Z", "FS1", "Estadio BBVA - Guadalupe, Mexico", ["FS1","Tele","Peacock"]],
  ["H", "Spain", "Cape Verde", "2026-06-15T16:00:00Z", "FOX", "Mercedes-Benz Stadium - Atlanta, Georgia, USA", ["FOX","Tele","Peacock"]],
  ["G", "Belgium", "Egypt", "2026-06-15T19:00:00Z", "FOX", "Lumen Field - Seattle, Washington, USA", ["FOX","Tele","Peacock"]],
  ["H", "Saudi Arabia", "Uruguay", "2026-06-15T22:00:00Z", "FS1", "Hard Rock Stadium - Miami Gardens, Florida, USA", ["FS1","Tele","Peacock"]],
  ["G", "Iran", "New Zealand", "2026-06-16T01:00:00Z", "FS1", "SoFi Stadium - Inglewood, California, USA", ["FS1","Tele","Peacock"]],
  ["I", "France", "Senegal", "2026-06-16T19:00:00Z", "FOX", "MetLife Stadium - East Rutherford, New Jersey, USA", ["FOX","Tele","Peacock"]],
  ["I", "Iraq", "Norway", "2026-06-16T22:00:00Z", "FOX", "Gillette Stadium - Foxborough, Massachusetts, USA", ["FOX","Tele","Peacock"]],
  ["J", "Argentina", "Algeria", "2026-06-17T01:00:00Z", "FOX", "GEHA Field at Arrowhead Stadium - Kansas City, Missouri, USA", ["FOX","Tele","Peacock"]],
  ["J", "Austria", "Jordan", "2026-06-17T04:00:00Z", "FS1", "Levi's Stadium - Santa Clara, California, USA", ["FS1","Tele","Peacock"]],
  ["K", "Portugal", "DR Congo", "2026-06-17T17:00:00Z", "FOX", "NRG Stadium - Houston, Texas, USA", ["FOX","Tele","Peacock"]],
  ["L", "England", "Croatia", "2026-06-17T20:00:00Z", "FOX", "AT&T Stadium - Arlington, Texas, USA", ["FOX","Tele","Peacock"]],
  ["L", "Ghana", "Panama", "2026-06-17T23:00:00Z", "FS1", "BMO Field - Toronto, Canada", ["FS1","Tele","Peacock"]],
  ["K", "Uzbekistan", "Colombia", "2026-06-18T02:00:00Z", "FS1", "Estadio Banorte - Mexico City, Mexico", ["FS1","Tele","Peacock"]],
  ["A", "Czechia", "South Africa", "2026-06-18T16:00:00Z", "FOX", "Mercedes-Benz Stadium - Atlanta, Georgia, USA", ["FOX","Tele","Peacock"]],
  ["B", "Switzerland", "Bosnia and Herzegovina", "2026-06-18T19:00:00Z", "FOX", "SoFi Stadium - Inglewood, California, USA", ["FOX","Tele","Peacock"]],
  ["B", "Canada", "Qatar", "2026-06-18T22:00:00Z", "FS1", "BC Place - Vancouver, Canada", ["FS1","Tele","Peacock"]],
  ["A", "Mexico", "South Korea", "2026-06-19T01:00:00Z", "FOX", "Estadio Akron - Guadalajara, Mexico", ["FOX","Tele","Peacock"]],
  ["D", "United States", "Australia", "2026-06-19T19:00:00Z", "FOX", "Lumen Field - Seattle, Washington, USA", ["FOX","Tele","Peacock"]],
  ["C", "Scotland", "Morocco", "2026-06-19T22:00:00Z", "FOX", "Gillette Stadium - Foxborough, Massachusetts, USA", ["FOX","Tele","Peacock"]],
  ["C", "Brazil", "Haiti", "2026-06-20T00:30:00Z", "FOX", "Lincoln Financial Field - Philadelphia, Pennsylvania, USA", ["FOX","Tele","Peacock"]],
  ["D", "Turkey", "Paraguay", "2026-06-20T03:00:00Z", "FS1", "Levi's Stadium - Santa Clara, California, USA", ["FS1","Tele","Peacock"]],
  ["F", "Netherlands", "Sweden", "2026-06-20T17:00:00Z", "FOX", "NRG Stadium - Houston, Texas, USA", ["FOX","Tele","Peacock"]],
  ["E", "Germany", "Ivory Coast", "2026-06-20T20:00:00Z", "FOX", "BMO Field - Toronto, Canada", ["FOX","Tele","Peacock"]],
  ["E", "Ecuador", "Curacao", "2026-06-21T00:00:00Z", "FS1", "GEHA Field at Arrowhead Stadium - Kansas City, Missouri, USA", ["FS1","Tele","Peacock"]],
  ["F", "Tunisia", "Japan", "2026-06-21T04:00:00Z", "FS1", "Estadio BBVA - Guadalupe, Mexico", ["FS1","Tele","Peacock"]],
  ["H", "Spain", "Saudi Arabia", "2026-06-21T16:00:00Z", "FOX", "Mercedes-Benz Stadium - Atlanta, Georgia, USA", ["FOX","Tele","Peacock"]],
  ["G", "Belgium", "Iran", "2026-06-21T19:00:00Z", "FS1", "SoFi Stadium - Inglewood, California, USA", ["FS1","Tele","Peacock"]],
  ["H", "Uruguay", "Cape Verde", "2026-06-21T22:00:00Z", "FS1", "Hard Rock Stadium - Miami Gardens, Florida, USA", ["FS1","Tele","Peacock"]],
  ["G", "New Zealand", "Egypt", "2026-06-22T01:00:00Z", "FS1", "BC Place - Vancouver, Canada", ["FS1","Tele","Peacock"]],
  ["J", "Argentina", "Austria", "2026-06-22T17:00:00Z", "FOX", "AT&T Stadium - Arlington, Texas, USA", ["FOX","Tele","Peacock"]],
  ["I", "France", "Iraq", "2026-06-22T21:00:00Z", "FOX", "Lincoln Financial Field - Philadelphia, Pennsylvania, USA", ["FOX","Tele","Peacock"]],
  ["I", "Norway", "Senegal", "2026-06-23T00:00:00Z", "FOX", "MetLife Stadium - East Rutherford, New Jersey, USA", ["FOX","Tele","Peacock"]],
  ["J", "Jordan", "Algeria", "2026-06-23T03:00:00Z", "FS1", "Levi's Stadium - Santa Clara, California, USA", ["FS1","Tele","Peacock"]],
  ["K", "Portugal", "Uzbekistan", "2026-06-23T17:00:00Z", "FOX", "NRG Stadium - Houston, Texas, USA", ["FOX","Tele","Peacock"]],
  ["L", "England", "Ghana", "2026-06-23T20:00:00Z", "FOX", "Gillette Stadium - Foxborough, Massachusetts, USA", ["FOX","Tele","Peacock"]],
  ["L", "Panama", "Croatia", "2026-06-23T23:00:00Z", "FOX", "BMO Field - Toronto, Canada", ["FOX","Tele","Peacock"]],
  ["K", "Colombia", "DR Congo", "2026-06-24T02:00:00Z", "FS1", "Estadio Akron - Guadalajara, Mexico", ["FS1","Tele","Peacock"]],
  ["B", "Bosnia and Herzegovina", "Qatar", "2026-06-24T19:00:00Z", "FS1", "Lumen Field - Seattle, Washington, USA", ["FS1","Tele","Peacock"]],
  ["B", "Switzerland", "Canada", "2026-06-24T19:00:00Z", "FOX", "BC Place - Vancouver, Canada", ["FOX","Tele","Peacock"]],
  ["C", "Morocco", "Haiti", "2026-06-24T22:00:00Z", "FS1", "Mercedes-Benz Stadium - Atlanta, Georgia, USA", ["FS1","Tele","Peacock"]],
  ["C", "Scotland", "Brazil", "2026-06-24T22:00:00Z", "FOX", "Hard Rock Stadium - Miami Gardens, Florida, USA", ["FOX","Tele","Peacock"]],
  ["A", "Czechia", "Mexico", "2026-06-25T01:00:00Z", "FOX", "Estadio Banorte - Mexico City, Mexico", ["FOX","Tele","Peacock"]],
  ["A", "South Africa", "South Korea", "2026-06-25T01:00:00Z", "FS1", "Estadio BBVA - Guadalupe, Mexico", ["FS1","Tele","Peacock"]],
  ["E", "Curacao", "Ivory Coast", "2026-06-25T20:00:00Z", "FS1", "Lincoln Financial Field - Philadelphia, Pennsylvania, USA", ["FS1","Tele","Peacock"]],
  ["E", "Ecuador", "Germany", "2026-06-25T20:00:00Z", "FOX", "MetLife Stadium - East Rutherford, New Jersey, USA", ["FOX","Tele","Peacock"]],
  ["F", "Japan", "Sweden", "2026-06-25T23:00:00Z", "FS1", "AT&T Stadium - Arlington, Texas, USA", ["FS1","Tele","Peacock"]],
  ["F", "Tunisia", "Netherlands", "2026-06-25T23:00:00Z", "FOX", "GEHA Field at Arrowhead Stadium - Kansas City, Missouri, USA", ["FOX","Tele","Peacock"]],
  ["D", "Paraguay", "Australia", "2026-06-26T02:00:00Z", "FS1", "Levi's Stadium - Santa Clara, California, USA", ["FS1","Tele","Peacock"]],
  ["D", "Turkey", "United States", "2026-06-26T02:00:00Z", "FOX", "SoFi Stadium - Inglewood, California, USA", ["FOX","Tele","Peacock"]],
  ["I", "Norway", "France", "2026-06-26T19:00:00Z", "FOX", "Gillette Stadium - Foxborough, Massachusetts, USA", ["FOX","Tele","Peacock"]],
  ["I", "Senegal", "Iraq", "2026-06-26T19:00:00Z", "FS1", "BMO Field - Toronto, Canada", ["FS1","Tele","Peacock"]],
  ["H", "Cape Verde", "Saudi Arabia", "2026-06-27T00:00:00Z", "FS1", "NRG Stadium - Houston, Texas, USA", ["FS1","Tele","Peacock"]],
  ["H", "Uruguay", "Spain", "2026-06-27T00:00:00Z", "FOX", "Estadio Akron - Guadalajara, Mexico", ["FOX","Tele","Peacock"]],
  ["G", "Egypt", "Iran", "2026-06-27T03:00:00Z", "FS1", "Lumen Field - Seattle, Washington, USA", ["FS1","Tele","Peacock"]],
  ["G", "New Zealand", "Belgium", "2026-06-27T03:00:00Z", "FOX", "BC Place - Vancouver, Canada", ["FOX","Tele","Peacock"]],
  ["L", "Croatia", "Ghana", "2026-06-27T21:00:00Z", "FS1", "Lincoln Financial Field - Philadelphia, Pennsylvania, USA", ["FS1","Tele","Peacock"]],
  ["L", "Panama", "England", "2026-06-27T21:00:00Z", "FOX", "MetLife Stadium - East Rutherford, New Jersey, USA", ["FOX","Tele","Peacock"]],
  ["K", "Colombia", "Portugal", "2026-06-27T23:30:00Z", "FOX", "Hard Rock Stadium - Miami Gardens, Florida, USA", ["FOX","Tele","Peacock"]],
  ["K", "DR Congo", "Uzbekistan", "2026-06-27T23:30:00Z", "FS1", "Mercedes-Benz Stadium - Atlanta, Georgia, USA", ["FS1","Tele","Peacock"]],
  ["J", "Algeria", "Austria", "2026-06-28T02:00:00Z", "FS1", "GEHA Field at Arrowhead Stadium - Kansas City, Missouri, USA", ["FS1","Tele","Peacock"]],
  ["J", "Jordan", "Argentina", "2026-06-28T02:00:00Z", "FOX", "AT&T Stadium - Arlington, Texas, USA", ["FOX","Tele","Peacock"]]
];

const knockoutScheduleUtc = [
  ["Round of 32", "2026-06-28T19:00:00Z", "FOX", "SoFi Stadium - Inglewood, California, USA", ["FOX","Tele","Peacock"], "Group A 2nd Place", "Group B 2nd Place"],
  ["Round of 32", "2026-06-29T17:00:00Z", "FOX", "NRG Stadium - Houston, Texas, USA", ["FOX","Tele","Peacock"], "Group C Winner", "Group F 2nd Place"],
  ["Round of 32", "2026-06-29T20:30:00Z", "FOX", "Gillette Stadium - Foxborough, Massachusetts, USA", ["FOX","Tele","Peacock"], "Group E Winner", "Third Place Group A/B/C/D/F"],
  ["Round of 32", "2026-06-30T01:00:00Z", "FOX", "Estadio BBVA - Guadalupe, Mexico", ["FOX","Tele","Peacock"], "Group F Winner", "Group C 2nd Place"],
  ["Round of 32", "2026-06-30T17:00:00Z", "FOX", "AT&T Stadium - Arlington, Texas, USA", ["FOX","Tele","Peacock"], "Group E 2nd Place", "Group I 2nd Place"],
  ["Round of 32", "2026-06-30T21:00:00Z", "FOX", "MetLife Stadium - East Rutherford, New Jersey, USA", ["FOX","Tele","Peacock"], "Group I Winner", "Third Place Group C/D/F/G/H"],
  ["Round of 32", "2026-07-01T01:00:00Z", "FOX", "Estadio Banorte - Mexico City, Mexico", ["FOX","Tele","Peacock"], "Group A Winner", "Third Place Group C/E/F/H/I"],
  ["Round of 32", "2026-07-01T16:00:00Z", "FOX", "Mercedes-Benz Stadium - Atlanta, Georgia, USA", ["FOX","Tele","Peacock"], "Group L Winner", "Third Place Group E/H/I/J/K"],
  ["Round of 32", "2026-07-01T20:00:00Z", "FS1", "Lumen Field - Seattle, Washington, USA", ["FS1","Tele","Peacock"], "Group G Winner", "Third Place Group A/E/H/I/J"],
  ["Round of 32", "2026-07-02T00:00:00Z", "FOX", "Levi's Stadium - Santa Clara, California, USA", ["FOX","Tele","Peacock"], "Group D Winner", "Third Place Group B/E/F/I/J"],
  ["Round of 32", "2026-07-02T19:00:00Z", "FOX", "SoFi Stadium - Inglewood, California, USA", ["FOX","Tele","Peacock"], "Group H Winner", "Group J 2nd Place"],
  ["Round of 32", "2026-07-02T23:00:00Z", "FOX", "BMO Field - Toronto, Canada", ["FOX","Tele","Peacock"], "Group K 2nd Place", "Group L 2nd Place"],
  ["Round of 32", "2026-07-03T03:00:00Z", "FS1", "BC Place - Vancouver, Canada", ["FS1","Tele","Peacock"], "Group B Winner", "Third Place Group E/F/G/I/J"],
  ["Round of 32", "2026-07-03T18:00:00Z", "FOX", "AT&T Stadium - Arlington, Texas, USA", ["FOX","Tele","Peacock"], "Group D 2nd Place", "Group G 2nd Place"],
  ["Round of 32", "2026-07-03T22:00:00Z", "FOX", "Hard Rock Stadium - Miami Gardens, Florida, USA", ["FOX","Tele","Peacock"], "Group J Winner", "Group H 2nd Place"],
  ["Round of 32", "2026-07-04T01:30:00Z", "FOX", "GEHA Field at Arrowhead Stadium - Kansas City, Missouri, USA", ["FOX","Tele","Peacock"], "Group K Winner", "Third Place Group D/E/I/J/L"],
  ["Round of 16", "2026-07-04T17:00:00Z", "FOX", "NRG Stadium - Houston, Texas, USA", ["FOX","Tele","Peacock"], "Round of 32 1 Winner", "Round of 32 3 Winner"],
  ["Round of 16", "2026-07-04T21:00:00Z", "FOX", "Lincoln Financial Field - Philadelphia, Pennsylvania, USA", ["FOX","Tele","Peacock"], "Round of 32 2 Winner", "Round of 32 5 Winner"],
  ["Round of 16", "2026-07-05T20:00:00Z", "FOX", "MetLife Stadium - East Rutherford, New Jersey, USA", ["FOX","Tele","Peacock"], "Round of 32 4 Winner", "Round of 32 6 Winner"],
  ["Round of 16", "2026-07-06T00:00:00Z", "FOX", "Estadio Banorte - Mexico City, Mexico", ["FOX","Tele","Peacock"], "Round of 32 7 Winner", "Round of 32 8 Winner"],
  ["Round of 16", "2026-07-06T19:00:00Z", "FOX", "AT&T Stadium - Arlington, Texas, USA", ["FOX","Tele","Peacock"], "Round of 32 11 Winner", "Round of 32 12 Winner"],
  ["Round of 16", "2026-07-07T00:00:00Z", "FOX", "Lumen Field - Seattle, Washington, USA", ["FOX","Tele","Peacock"], "Round of 32 9 Winner", "Round of 32 10 Winner"],
  ["Round of 16", "2026-07-07T16:00:00Z", "FOX", "Mercedes-Benz Stadium - Atlanta, Georgia, USA", ["FOX","Tele","Peacock"], "Round of 32 14 Winner", "Round of 32 16 Winner"],
  ["Round of 16", "2026-07-07T20:00:00Z", "FOX", "BC Place - Vancouver, Canada", ["FOX","Tele","Peacock"], "Round of 32 13 Winner", "Round of 32 15 Winner"],
  ["Quarter-final", "2026-07-09T20:00:00Z", "FOX", "Gillette Stadium - Foxborough, Massachusetts, USA", ["FOX","Tele","Peacock"], "Round of 16 1 Winner", "Round of 16 2 Winner"],
  ["Quarter-final", "2026-07-10T19:00:00Z", "FOX", "SoFi Stadium - Inglewood, California, USA", ["FOX","Tele","Peacock"], "Round of 16 5 Winner", "Round of 16 6 Winner"],
  ["Quarter-final", "2026-07-11T21:00:00Z", "FOX", "Hard Rock Stadium - Miami Gardens, Florida, USA", ["FOX","Tele","Peacock"], "Round of 16 3 Winner", "Round of 16 4 Winner"],
  ["Quarter-final", "2026-07-12T01:00:00Z", "FOX", "GEHA Field at Arrowhead Stadium - Kansas City, Missouri, USA", ["FOX","Tele","Peacock"], "Round of 16 7 Winner", "Round of 16 8 Winner"],
  ["Semi-final", "2026-07-14T19:00:00Z", "FOX", "AT&T Stadium - Arlington, Texas, USA", ["FOX","Tele","Peacock"], "Quarterfinal 1 Winner", "Quarterfinal 2 Winner"],
  ["Semi-final", "2026-07-15T19:00:00Z", "FOX", "Mercedes-Benz Stadium - Atlanta, Georgia, USA", ["FOX","Tele","Peacock"], "Quarterfinal 3 Winner", "Quarterfinal 4 Winner"],
  ["Third-place match", "2026-07-18T21:00:00Z", "FOX", "Hard Rock Stadium - Miami Gardens, Florida, USA", ["FOX","Tele","Peacock"], "Semifinal 1 Loser", "Semifinal 2 Loser"],
  ["Final", "2026-07-19T19:00:00Z", "FOX", "MetLife Stadium - East Rutherford, New Jersey, USA", ["FOX","Tele","Peacock"], "Semifinal 1 Winner", "Semifinal 2 Winner"]
];

const matches = buildGroupMatches().concat(buildKnockoutMatches());
const stadiumLocations = {
  "AT&T Stadium": { lat: 32.7473, lon: -97.0945, city: "Arlington, Texas" },
  "BC Place": { lat: 49.2768, lon: -123.1119, city: "Vancouver, Canada" },
  "BMO Field": { lat: 43.6332, lon: -79.4186, city: "Toronto, Canada" },
  "Estadio Akron": { lat: 20.6819, lon: -103.4621, city: "Guadalajara, Mexico" },
  "Estadio Banorte": { lat: 19.3029, lon: -99.1505, city: "Mexico City, Mexico" },
  "Estadio BBVA": { lat: 25.6682, lon: -100.2448, city: "Guadalupe, Mexico" },
  "GEHA Field at Arrowhead Stadium": { lat: 39.0489, lon: -94.4839, city: "Kansas City, Missouri" },
  "Gillette Stadium": { lat: 42.0909, lon: -71.2643, city: "Foxborough, Massachusetts" },
  "Hard Rock Stadium": { lat: 25.9580, lon: -80.2389, city: "Miami Gardens, Florida" },
  "Levi's Stadium": { lat: 37.4030, lon: -121.9700, city: "Santa Clara, California" },
  "Lincoln Financial Field": { lat: 39.9008, lon: -75.1675, city: "Philadelphia, Pennsylvania" },
  "Lumen Field": { lat: 47.5952, lon: -122.3316, city: "Seattle, Washington" },
  "Mercedes-Benz Stadium": { lat: 33.7554, lon: -84.4008, city: "Atlanta, Georgia" },
  "MetLife Stadium": { lat: 40.8135, lon: -74.0745, city: "East Rutherford, New Jersey" },
  "NRG Stadium": { lat: 29.6847, lon: -95.4107, city: "Houston, Texas" },
  "SoFi Stadium": { lat: 33.9535, lon: -118.3392, city: "Inglewood, California" }
};
const scoreApi = {
  provider: "proxy",
  url: window.PATH_TO_CUP_SCORE_API_URL || "api/scores",
  footballDataUrl: "https://api.football-data.org/v4/competitions/WC/matches",
  espnUrl: "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260611-20260719&limit=200"
};
const oddsApi = {
  url: window.PATH_TO_CUP_ODDS_API_URL || "",
  key: window.PATH_TO_CUP_ODDS_API_KEY || localStorage.getItem("oddsApiKey") || "",
  sportKey: window.PATH_TO_CUP_ODDS_SPORT_KEY || localStorage.getItem("oddsSportKey") || "soccer_fifa_world_cup",
  bookmakers: window.PATH_TO_CUP_ODDS_BOOKMAKERS || "caesars,betmgm,draftkings,fanduel,williamhill_us,bovada",
  baseUrl: "https://api.the-odds-api.com/v4/sports"
};
const polymarketApi = {
  url: window.PATH_TO_CUP_POLYMARKET_API_URL || "https://gamma-api.polymarket.com/events?active=true&closed=false&limit=200&order=volume&ascending=false",
  enabled: window.PATH_TO_CUP_POLYMARKET_ENABLED !== false
};
let selectedTeam = "United States";
let stageFilter = "all";
let searchTerm = "";
let selectedTeamOnly = false;
let scheduleSortMode = "date";
let teamSortMode = "az";
let showPreviousGames = false;
let scheduleVisibleCount = 15;
let scoreSyncStatus = "Scores pending refresh API";
let oddsSyncStatus = "Odds not configured";
let oddsDiagnostic = "No odds request has completed yet";
const diagnostics = {
  score: "No score refresh has completed yet",
  espn: "ESPN not checked yet",
  polymarket: "Polymarket not checked yet",
  odds: "No odds refresh has completed yet",
  matching: "No odds matching has run yet"
};
let oddsSourceMode = localStorage.getItem("oddsSourceMode") || "auto";
let timezoneMode = localStorage.getItem("timezoneMode") || "local";
let stadiumLeafletMap = null;
let stadiumMarkersLayer = null;
let activeTooltipTarget = null;
let floatingTooltip = null;
const currentMatchWindowMs = 4 * 60 * 60 * 1000;
const schedulePreviewLimit = 15;
const scheduleShowMoreStep = 10;
const hostMapBounds = [[14, -132], [62, -52]];

const els = {
  search: document.querySelector("#searchInput"),
  updatedStamp: document.querySelector("#updatedStamp"),
  select: document.querySelector("#teamSelect"),
  focus: document.querySelector("#focusPanel"),
  matchList: document.querySelector("#matchList"),
  scheduleCount: document.querySelector("#scheduleCount"),
  teamsRemainingStat: document.querySelector("#teamsRemainingStat"),
  groupsRemainingStat: document.querySelector("#groupsRemainingStat"),
  matchesRemainingStat: document.querySelector("#matchesRemainingStat"),
  sort: document.querySelector("#sortSelect"),
  timezone: document.querySelector("#timezoneSelect"),
  scheduleOddsSource: document.querySelector("#scheduleOddsSourceSelect"),
  pathOddsSource: document.querySelector("#pathOddsSourceSelect"),
  scheduleOddsSourceControl: document.querySelector("#scheduleOddsSourceControl"),
  pathOddsSourceControl: document.querySelector("#pathOddsSourceControl"),
  timezoneStat: document.querySelector("#timezoneStat"),
  teamSort: document.querySelector("#teamSortSelect"),
  selectedTeamOnly: document.querySelector("#selectedTeamOnly"),
  showPreviousGames: document.querySelector("#showPreviousGames"),
  showMoreMatches: document.querySelector("#showMoreMatches"),
  showMoreMatchesBottom: document.querySelector("#showMoreMatchesBottom"),
  clearFilters: document.querySelector("#clearFilters"),
  groups: document.querySelector("#groupsGrid"),
  teamGrid: document.querySelector("#teamGrid"),
  route: document.querySelector("#routePanel"),
  bracket: document.querySelector("#bracket"),
  bracketScroll: document.querySelector("#bracketScroll"),
  bracketScrollInner: document.querySelector("#bracketScrollInner"),
  stadiumMap: document.querySelector("#stadiumMap"),
  stadiumMapNote: document.querySelector("#stadiumMapNote"),
  diagnostics: document.querySelector("#diagnosticsGrid")
};

let syncingBracketScroll = false;

init();

function init() {
  document.documentElement.lang = navigator.language || "en";
  updatePageTimestamp();
  setupFloatingTooltips();
  els.select.innerHTML = [...allTeams]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(team => `<option value="${team.name}">${team.code} - ${team.name} - FIFA #${team.ranking}</option>`)
    .join("");
  els.select.value = selectedTeam;
  els.timezone.value = timezoneMode;
  els.scheduleOddsSource.value = oddsSourceMode;
  els.pathOddsSource.value = oddsSourceMode;

  document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelectorAll("[data-filter-stage]").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter-stage]").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      stageFilter = button.dataset.filterStage;
      resetSchedulePreview();
      renderSchedule();
    });
  });

  els.search.addEventListener("input", event => {
    searchTerm = event.target.value.trim().toLowerCase();
    resetSchedulePreview();
    renderAll();
  });

  els.sort.addEventListener("change", event => {
    scheduleSortMode = event.target.value;
    resetSchedulePreview();
    renderSchedule();
  });

  els.timezone.addEventListener("change", event => {
    timezoneMode = event.target.value;
    localStorage.setItem("timezoneMode", timezoneMode);
    renderAll();
  });

  [els.scheduleOddsSource, els.pathOddsSource].forEach(select => {
    select.addEventListener("change", event => {
      oddsSourceMode = event.target.value;
      localStorage.setItem("oddsSourceMode", oddsSourceMode);
      els.scheduleOddsSource.value = oddsSourceMode;
      els.pathOddsSource.value = oddsSourceMode;
      renderSchedule();
      renderPath();
    });
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
    resetSchedulePreview();
    els.selectedTeamOnly.classList.toggle("active", selectedTeamOnly);
    renderSchedule();
  });

  els.showPreviousGames.addEventListener("click", () => {
    showPreviousGames = !showPreviousGames;
    resetSchedulePreview();
    els.showPreviousGames.classList.toggle("active", showPreviousGames);
    els.showPreviousGames.textContent = showPreviousGames ? "Hide previous games" : "Show previous games";
    renderSchedule();
  });

  [els.showMoreMatches, els.showMoreMatchesBottom].forEach(button => {
    button.addEventListener("click", () => {
      scheduleVisibleCount += scheduleShowMoreStep;
      renderSchedule();
    });
  });

  els.bracket.addEventListener("scroll", () => {
    if (syncingBracketScroll || !els.bracketScroll) return;
    syncingBracketScroll = true;
    els.bracketScroll.scrollLeft = els.bracket.scrollLeft;
    syncingBracketScroll = false;
  });

  els.bracketScroll.addEventListener("scroll", () => {
    if (syncingBracketScroll) return;
    syncingBracketScroll = true;
    els.bracket.scrollLeft = els.bracketScroll.scrollLeft;
    syncingBracketScroll = false;
  });

  window.addEventListener("resize", () => {
    drawBracketConnectors();
    syncBracketScroll();
    fitTeamNames();
  });
  window.addEventListener("hashchange", renderHashView);

  els.clearFilters.addEventListener("click", () => {
    searchTerm = "";
    stageFilter = "all";
    selectedTeamOnly = false;
    showPreviousGames = false;
    resetSchedulePreview();
    scheduleSortMode = "date";
    timezoneMode = "local";
    localStorage.setItem("timezoneMode", timezoneMode);
    els.search.value = "";
    els.sort.value = "date";
    els.timezone.value = "local";
    els.selectedTeamOnly.classList.remove("active");
    els.showPreviousGames.classList.remove("active");
    els.showMoreMatches.classList.remove("active");
    els.showMoreMatchesBottom.classList.remove("active");
    els.showPreviousGames.textContent = "Show previous games";
    updateShowMoreControls(0);
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
  renderHashView();
  refreshScores();
}

function setupFloatingTooltips() {
  floatingTooltip = document.createElement("div");
  floatingTooltip.className = "floating-tooltip";
  floatingTooltip.setAttribute("role", "tooltip");
  document.body.append(floatingTooltip);

  const showFromEvent = event => {
    const target = event.target.closest("[data-tip]");
    if (!target || !target.dataset.tip) return;
    showFloatingTooltip(target);
  };

  const hideFromEvent = event => {
    if (!activeTooltipTarget || !activeTooltipTarget.contains(event.target)) return;
    if (event.relatedTarget && activeTooltipTarget.contains(event.relatedTarget)) return;
    hideFloatingTooltip();
  };

  document.addEventListener("pointerover", showFromEvent);
  document.addEventListener("pointerout", hideFromEvent);
  document.addEventListener("mouseover", showFromEvent);
  document.addEventListener("mouseout", hideFromEvent);

  document.addEventListener("focusin", event => {
    const target = event.target.closest("[data-tip]");
    if (!target || !target.dataset.tip) return;
    showFloatingTooltip(target);
  });

  document.addEventListener("focusout", event => {
    if (activeTooltipTarget && activeTooltipTarget.contains(event.target)) hideFloatingTooltip();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") hideFloatingTooltip();
  });

  window.addEventListener("scroll", () => positionFloatingTooltip(), true);
  window.addEventListener("resize", () => positionFloatingTooltip());
}

function showFloatingTooltip(target) {
  activeTooltipTarget = target;
  floatingTooltip.textContent = target.dataset.tip;
  floatingTooltip.classList.add("visible");
  positionFloatingTooltip();
}

function hideFloatingTooltip() {
  activeTooltipTarget = null;
  if (floatingTooltip) floatingTooltip.classList.remove("visible");
}

function positionFloatingTooltip() {
  if (!activeTooltipTarget || !floatingTooltip || !floatingTooltip.classList.contains("visible")) return;
  const rect = activeTooltipTarget.getBoundingClientRect();
  const gap = 10;
  const edge = 10;
  const tooltipRect = floatingTooltip.getBoundingClientRect();
  const width = tooltipRect.width;
  const height = tooltipRect.height;
  const centeredX = rect.left + rect.width / 2 - width / 2;
  const x = Math.max(edge, Math.min(centeredX, window.innerWidth - width - edge));
  let y = rect.top - height - gap;

  if (y < edge) y = rect.bottom + gap;
  if (y + height > window.innerHeight - edge) y = Math.max(edge, window.innerHeight - height - edge);

  floatingTooltip.style.left = `${x}px`;
  floatingTooltip.style.top = `${y}px`;
}

function switchView(view) {
  document.querySelectorAll(".tab").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  document.querySelectorAll(".view").forEach(section => section.classList.toggle("active", section.id === `${view}View`));
  if (view === "path") {
    drawBracketConnectors();
    syncBracketScroll();
  }
  if (view === "diagnostics") renderDiagnostics();
}

function renderHashView() {
  if (window.location.hash === "#diagnostics") switchView("diagnostics");
}

function renderAll() {
  updateTimezoneLabels();
  updateOddsSourceControls();
  updateOverviewStats();
  renderFocus();
  renderSchedule();
  renderGroups();
  renderPath();
  renderTeams();
  renderDiagnostics();
  fitTeamNames();
}

function fitTeamNames() {
  requestAnimationFrame(() => {
    document.querySelectorAll(".view.active .team-name, .topbar .team-name, .hero-grid .team-name").forEach(name => {
      const full = name.querySelector(".team-name-full");
      const abbr = name.querySelector(".team-name-abbr");
      if (!full || !abbr) return;
      name.classList.remove("use-abbr");
      const available = name.getBoundingClientRect().width;
      const required = full.scrollWidth + (name.querySelector(".country-flag")?.offsetWidth || 0) + 8;
      if (available && required > available + 1) name.classList.add("use-abbr");
    });
  });
}

function updateOddsSourceControls() {
  const availability = getOddsSourceAvailability();
  const unavailableText = "Not available from the last refresh. Try refreshing again in 5 min.";
  const labels = {
    auto: "Auto best available",
    sportsbook: "Sportsbook odds",
    polymarket: "Polymarket price",
    fifa: "FIFA projection"
  };

  [els.scheduleOddsSource, els.pathOddsSource].forEach(select => {
    if (!select) return;
    [...select.options].forEach(option => {
      if (option.value === "auto" || option.value === "fifa") {
        option.disabled = false;
        option.textContent = labels[option.value];
        option.title = option.value === "fifa" ? "Always available as a rough ranking-based fallback." : "Uses sportsbook, then Polymarket, then FIFA projection.";
        return;
      }
      const available = availability[option.value];
      option.disabled = !available;
      option.textContent = available ? labels[option.value] : `${labels[option.value]} (unavailable)`;
      option.title = available ? `${labels[option.value]} available from the last refresh.` : unavailableText;
    });
    if (select.options[select.selectedIndex]?.disabled) {
      oddsSourceMode = "auto";
      localStorage.setItem("oddsSourceMode", oddsSourceMode);
      select.value = oddsSourceMode;
    }
  });

  const summary = `Sportsbook: ${availability.sportsbook ? "available" : "not available"}. Polymarket: ${availability.polymarket ? "available" : "not available"}. Unavailable sources may appear greyed out; try refreshing again in 5 min.`;
  [els.scheduleOddsSourceControl, els.pathOddsSourceControl].forEach(control => {
    if (!control) return;
    control.title = summary;
    control.classList.toggle("has-unavailable", !availability.sportsbook || !availability.polymarket);
  });
}

function getOddsSourceAvailability() {
  return matches.reduce((availability, match) => {
    if (match.oddsBySource?.sportsbook) availability.sportsbook = true;
    if (match.oddsBySource?.polymarket) availability.polymarket = true;
    return availability;
  }, { sportsbook: false, polymarket: false, fifa: true });
}

function renderDiagnostics() {
  if (!els.diagnostics) return;
  const availability = getOddsSourceAvailability();
  const sourceCounts = matches.reduce((counts, match) => {
    if (match.oddsBySource?.sportsbook) counts.sportsbook += 1;
    if (match.oddsBySource?.polymarket) counts.polymarket += 1;
    return counts;
  }, { sportsbook: 0, polymarket: 0 });
  const rows = [
    ["Source availability", `Sportsbook: ${availability.sportsbook ? "available" : "not available"} (${sourceCounts.sportsbook} matched). Polymarket: ${availability.polymarket ? "available" : "not available"} (${sourceCounts.polymarket} matched). FIFA projection: always available.`],
    ["Score refresh", diagnostics.score],
    ["ESPN odds", diagnostics.espn],
    ["Polymarket", diagnostics.polymarket],
    ["Odds refresh", diagnostics.odds],
    ["Odds matching", diagnostics.matching],
    ["Current selector", `Mode: ${oddsSourceMode}. Auto priority: sportsbook -> Polymarket -> FIFA projection.`],
    ["Likely causes", "ESPN odds must include moneyline prices and match local teams/times. Polymarket must be browser-accessible and expose a market with both teams as outcomes; futures or Yes/No markets are ignored."]
  ];

  els.diagnostics.innerHTML = rows.map(([title, body]) => `
    <article class="diagnostic-card">
      <b>${escapeHtml(title)}</b>
      <p>${escapeHtml(body)}</p>
    </article>
  `).join("");
}

function updateOverviewStats() {
  const activeTeams = allTeams.filter(team => getTeamStatus(team.name).key !== "eliminated").length;
  const activeGroups = Object.keys(groups).filter(group => getGroupMatches(group).some(isRemainingMatch)).length;
  const remainingMatches = matches.filter(isRemainingMatch).length;

  els.teamsRemainingStat.textContent = activeTeams;
  els.groupsRemainingStat.textContent = activeGroups;
  els.matchesRemainingStat.textContent = remainingMatches;
}

function renderFocus() {
  const team = teamByName[selectedTeam];
  const next = matches.find(match => match.stage === "Group" && match.teams.includes(team.name) && !hasFinalScore(match));
  const standing = getStandings(team.group).find(row => row.name === team.name);
  const status = getTeamStatus(team.name);

  els.focus.innerHTML = `
    <div class="flag code-badge ${status.key}" aria-hidden="true">${team.code}</div>
    <div class="focus-copy">
      <p class="eyebrow">Selected path</p>
      <h2>${renderTeamName(team)}</h2>
      <div class="pill-row">
        <span class="pill">Group ${team.group}</span>
        <span class="pill">FIFA #${team.ranking}</span>
        <span class="pill">${standing.points} pts</span>
        <span class="pill status-pill ${status.key}">${status.label}</span>
        <span class="pill">${standing.rankLabel}</span>
        <span class="pill">${team.best}</span>
      </div>
    </div>
    <div class="focus-next">
      <b>Next match</b>
      <p>${next ? `${formatDate(next.date)} vs ${renderTeamName(next.teams.find(name => name !== team.name))} on ${next.channel}` : "Knockout slot pending"}</p>
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
    const timeOk = showPreviousGames || isCurrentOrFutureMatch(match);
    return stageOk && teamOk && timeOk && (!searchTerm || searchable.includes(searchTerm));
  }).sort(compareMatches);

  const visible = filtered.slice(0, scheduleVisibleCount);
  const hiddenCount = Math.max(filtered.length - visible.length, 0);
  els.scheduleCount.textContent = `Showing ${visible.length} of ${filtered.length} filtered matches (${matches.length} total) - ${scoreSyncStatus}; ${oddsSyncStatus}`;
  updateShowMoreControls(hiddenCount);
  renderStadiumMap(filtered);

  if (!filtered.length) {
    els.matchList.innerHTML = `<div class="empty">No matches match the current filter.</div>`;
    fitTeamNames();
    return;
  }

  els.matchList.innerHTML = visible.map(match => {
    const teamLine = match.teams.map(name => {
      const team = teamByName[name];
      if (!team) return `<span>${name}</span>`;
      return `<span class="team-chip" data-tip="${escapeAttr(`${team.name}: FIFA #${team.ranking}. ${team.best}. Group ${team.group}. ${formatTeamOddsTooltip(match, team.name)}`)}"><span class="inline-code">${team.code}</span> ${renderTeamName(team)}</span>`;
    }).join(`<span class="muted">vs</span>`);
    const timeStatus = getMatchTimeStatus(match);
    const scoreLine = formatScoreLine(match);

    return `
      <article class="match-card">
        <div class="date-box">
          <span>${formatMonthDay(match.date)}</span>
          <b>${formatTime(match.date)}</b>
          <span>${getTimezoneLabel()}</span>
        </div>
        <div class="matchup">
          <div class="teams-line">${teamLine}</div>
          <div class="meta-line">
            <span>${match.round}</span>
            <span>${match.venue}</span>
            <span>${match.status}</span>
            <span class="time-status ${timeStatus.key}">${timeStatus.label}</span>
          </div>
          ${renderWinChanceBar(match)}
        </div>
        <div class="match-actions">
          ${scoreLine ? `<span class="score-pill">${scoreLine}</span>` : ""}
          <span class="channel" data-tip="${escapeAttr(`ESPN listed channels: ${formatChannelList(match)}`)}">${match.channel}</span>
          <button class="details-toggle" aria-label="Toggle match details">+</button>
        </div>
        <div class="match-detail">
          <div class="detail-box"><b>Broadcast</b>Primary: ${match.channel}. ESPN listed: ${formatChannelList(match)}.</div>
          <div class="detail-box"><b>Score source</b>${match.scoreUpdatedAt ? `Updated from external API at ${formatSyncTime(match.scoreUpdatedAt)}.` : "No live score returned for this fixture yet."}</div>
          <div class="detail-box"><b>Stage impact</b>${getStageImpact(match)}</div>
          <div class="detail-box"><b>Context</b>${match.note}</div>
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
  fitTeamNames();
}

function resetSchedulePreview() {
  scheduleVisibleCount = schedulePreviewLimit;
}

function updateShowMoreControls(hiddenCount) {
  const shouldHide = hiddenCount <= 0;
  const nextCount = Math.min(scheduleShowMoreStep, hiddenCount);
  [els.showMoreMatches, els.showMoreMatchesBottom].forEach(button => {
    button.hidden = shouldHide;
    button.classList.toggle("active", !shouldHide);
    button.textContent = shouldHide ? "Show more matches" : `Show ${nextCount} more`;
  });
}

function renderStadiumMap(filteredMatches) {
  const venueGroups = groupMatchesByVenue(filteredMatches);
  destroyLeafletMap();
  els.stadiumMapNote.textContent = venueGroups.length
    ? `${venueGroups.length} stadium${venueGroups.length === 1 ? "" : "s"} from the active schedule filters.`
    : "No stadiums match the active schedule filters.";

  if (!venueGroups.length) {
    els.stadiumMap.innerHTML = `<div class="empty map-empty">No stadiums to map for this filter.</div>`;
    return;
  }

  const list = venueGroups.slice(0, 8).map(group => {
    const next = group.matches[0];
    return `
      <li>
        <b>${group.name}</b>
        <span>${formatMapMatchLabel(next)}</span>
      </li>
    `;
  }).join("");

  els.stadiumMap.innerHTML = `
    <div class="map-viewport" id="stadiumLeafletMap" aria-label="Interactive map focused on Canada, United States, and Mexico"></div>
    <ol class="map-list">${list}</ol>
  `;
  renderLeafletStadiumMap(venueGroups);
}

function destroyLeafletMap() {
  if (stadiumLeafletMap) {
    stadiumLeafletMap.remove();
  }
  stadiumLeafletMap = null;
  stadiumMarkersLayer = null;
}

function groupMatchesByVenue(filteredMatches) {
  const groupsByVenue = new Map();
  filteredMatches.forEach(match => {
    const location = getStadiumLocation(match.venue);
    if (!location) return;
    const name = getVenueName(match.venue);
    if (!groupsByVenue.has(name)) {
      groupsByVenue.set(name, { name, location, matches: [] });
    }
    groupsByVenue.get(name).matches.push(match);
  });
  return [...groupsByVenue.values()]
    .map(group => ({
      ...group,
      matches: group.matches.sort((a, b) => new Date(a.date) - new Date(b.date))
    }))
    .sort((a, b) => new Date(a.matches[0].date) - new Date(b.matches[0].date));
}

function getVenueName(venue) {
  return String(venue || "").split(" - ")[0];
}

function getStadiumLocation(venue) {
  return stadiumLocations[getVenueName(venue)];
}

function formatMapMatchLabel(match) {
  return `${formatMonthDay(match.date)} ${formatTime(match.date)} - ${match.teams.map(formatTeamPlain).join(" vs ")} at ${getTimezoneLabel()}`;
}

function renderLeafletStadiumMap(venueGroups) {
  if (!window.L) {
    document.querySelector("#stadiumLeafletMap").innerHTML = `<div class="empty map-empty">Interactive map tiles could not load.</div>`;
    return;
  }

  stadiumLeafletMap = L.map("stadiumLeafletMap", {
    zoomControl: true,
    scrollWheelZoom: true
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(stadiumLeafletMap);
  stadiumMarkersLayer = L.layerGroup().addTo(stadiumLeafletMap);
  stadiumLeafletMap.fitBounds(hostMapBounds, { padding: [18, 18] });
  updateLeafletMarkers(venueGroups);
  setTimeout(() => stadiumLeafletMap.invalidateSize(), 0);
}

function updateLeafletMarkers(venueGroups) {
  stadiumMarkersLayer.clearLayers();
  venueGroups.forEach(group => {
    const next = group.matches[0];
    const marker = L.marker([group.location.lat, group.location.lon], {
      icon: L.divIcon({
        className: `stadium-marker ${next.status === "Live" ? "live" : ""}`,
        html: `<span>${group.matches.length}</span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -18]
      })
    });
    marker.bindPopup(getStadiumPopup(group));
    marker.bindTooltip(`${group.name}: ${group.matches.length} match${group.matches.length === 1 ? "" : "es"}`);
    marker.addTo(stadiumMarkersLayer);
  });
}

function getStadiumPopup(group) {
  const upcoming = group.matches.slice(0, 4).map(match => `<li>${escapeHtml(formatMapMatchLabel(match))}</li>`).join("");
  return `
    <div class="stadium-popup">
      <b>${escapeHtml(group.name)}</b>
      <span>${escapeHtml(group.location.city)}</span>
      <ol>${upcoming}</ol>
    </div>
  `;
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
            <tr><th>Team</th><th>Rk</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th><th>Status</th></tr>
          </thead>
          <tbody>
            ${rows.map(row => `
              <tr class="${row.status.key}">
                <td><span class="team-chip" data-tip="${escapeAttr(`${row.name}: FIFA #${row.ranking}. ${row.best}`)}"><span class="inline-code">${row.code}</span> ${renderTeamName(row)}</span></td>
                <td>${row.ranking}</td><td>${row.played}</td><td>${row.won}</td><td>${row.drawn}</td><td>${row.lost}</td><td>${row.gd}</td><td><b>${row.points}</b></td><td><span class="mini-status ${row.status.key}">${row.status.short}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </details>
    `;
  }).join("") || `<div class="empty">No groups match the current search.</div>`;
  fitTeamNames();
}

function renderPath() {
  const team = teamByName[selectedTeam];
  const standing = getStandings(team.group).find(row => row.name === team.name);
  const status = getTeamStatus(team.name);
  const paths = getPathCopy(team.group);
  const teamMatches = matches.filter(match => match.teams.includes(team.name));
  const bracketStatus = getBracketStatus(team, status);
  const bracketPath = getSelectedBracketPath(team.name);
  const remainingGroupCopy = teamMatches
    .filter(match => match.stage === "Group" && !hasFinalScore(match))
    .map(match => `${formatMonthDay(match.date)} ${formatTime(match.date)} vs ${formatTeamPlain(match.teams.find(name => name !== team.name))}`)
    .join("; ") || "No remaining group matches.";

  els.route.innerHTML = `
    <div class="route-summary">
      <div>
        <p class="eyebrow">Route card</p>
        <h2><span class="inline-code">${team.code}</span> ${renderTeamName(team)}</h2>
      </div>
      <div class="pill-row">
        <span class="pill">Current: ${standing.rankLabel}</span>
        <span class="pill">FIFA #${team.ranking}</span>
        <span class="pill status-pill ${status.key}">${status.label}</span>
        <span class="pill">${team.best}</span>
      </div>
    </div>
  `;

  els.bracket.innerHTML = `
    <div class="path-workbench ${status.key}" aria-label="Knockout bracket">
      <div class="workbench-bar">
        <span class="traffic-dot blue"></span>
        <span class="traffic-dot gold"></span>
        <span class="traffic-dot green"></span>
        <span class="workbench-title">bracket/knockout.cup-route</span>
        <span class="workbench-badge ${bracketStatus.key}">${bracketStatus.badge}</span>
      </div>
      <div class="bracket-status ${bracketStatus.key}" data-tip="${escapeAttr(getBracketStatusTooltip(team, paths, remainingGroupCopy, status))}"><b>${bracketStatus.message}</b></div>
      <div class="knockout-bracket">
        <svg class="bracket-connectors" aria-hidden="true"></svg>
        ${getKnockoutRounds().map(round => `
          <section class="bracket-round">
            <h3>${round.label}</h3>
            <div class="bracket-stack">
              ${round.matches.map((match, index) => renderBracketMatch(match, selectedTeam, bracketPath, index)).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </div>
  `;
  drawBracketConnectors(bracketPath);
  syncBracketScroll();
  fitTeamNames();
}

function getBracketStatus(team, status) {
  const selectedBracketMatch = getSelectedBracketMatch(team.name);
  if (status.key === "eliminated") {
    return {
      key: "eliminated",
      badge: "Bracket closed",
      message: `${team.name} has been eliminated and is not active in the knockout bracket.`
    };
  }
  if (!selectedBracketMatch) {
    const groupDone = getGroupMatches(team.group).every(hasFinalScore);
    const qualifierText = status.key === "qualified" ? "has qualified, but the exact knockout slot has not been updated by the score feed yet" : "has not locked into the knockout bracket yet";
    return {
      key: groupDone && status.key !== "qualified" ? "eliminated" : "pending",
      badge: "Not locked",
      message: `${team.name} ${qualifierText}.`
    };
  }
  return {
    key: "locked",
    badge: "Team highlighted",
    message: `${team.name} is locked into the ${selectedBracketMatch.round}; its current bracket position is highlighted below.`
  };
}

function getBracketStatusTooltip(team, paths, remainingGroupCopy, status) {
  if (status.key === "eliminated") return `${team.name}'s path is closed based on the available score data.`;
  return `Optimal path: win Group ${team.group} and enter through ${paths.winner}. Group target: finish top two for automatic Round of 32 entry; third place can still advance if ranked among the best eight third-place teams. Remaining group games: ${remainingGroupCopy}`;
}

function getSelectedBracketMatch(teamName) {
  return matches.find(match => match.stage === "Knockout" && getResolvedBracketTeams(match).some(entry => entry.name === teamName));
}

function getKnockoutRounds() {
  const order = ["Round of 32", "Round of 16", "Quarter-final", "Semi-final", "Third-place match", "Final"];
  return order.map(label => ({
    label,
    matches: matches.filter(match => match.stage === "Knockout" && match.round === label)
  }));
}

function renderBracketMatch(match, selectedTeamName, bracketPath, roundIndex) {
  const entries = getResolvedBracketTeams(match);
  const selected = entries.some(entry => entry.name === selectedTeamName);
  const winner = hasFinalScore(match) ? getMatchWinner(match) : "";
  const pathTone = bracketPath.get(match.id) || "";
  return `
    <article class="bracket-match ${selected ? "selected" : ""} ${pathTone} ${match.status === "Final" ? "final" : ""}" style="--slot:${getBracketSlot(match, roundIndex)};" data-match-id="${match.id}" data-tip="${escapeAttr(getBracketMatchTooltip(match, entries))}">
      <div class="bracket-match-head">
        <span>${match.id}</span>
        <span>${formatMonthDay(match.date)} ${formatTime(match.date)}</span>
      </div>
      <div class="bracket-teams">
        ${entries.map((entry, index) => renderBracketTeam(entry, match, index, selectedTeamName, winner)).join("")}
      </div>
      ${renderWinChanceBar(match, "compact")}
      <div class="bracket-meta">
        <span>${match.venue}</span>
        <span>${match.status}</span>
      </div>
    </article>
  `;
}

function getSelectedBracketPath(teamName) {
  const path = new Map();
  let current = getSelectedBracketMatch(teamName);
  let guard = 0;

  while (current && guard < 8) {
    guard += 1;
    const winner = hasFinalScore(current) ? getMatchWinner(current) : "";
    if (hasFinalScore(current) && winner !== teamName) {
      path.set(current.id, "path-eliminated");
      break;
    }
    path.set(current.id, "path-active");
    const nextSlot = getWinnerSlotForMatch(current);
    if (!nextSlot) break;
    current = matches.find(match => match.stage === "Knockout" && matchIncludesSlot(match, nextSlot));
  }

  return path;
}

function getWinnerSlotForMatch(match) {
  const number = getRoundMatchNumber(match);
  if (!number) return "";
  if (match.round === "Round of 32") return `Round of 32 ${number} Winner`;
  if (match.round === "Round of 16") return `Round of 16 ${number} Winner`;
  if (match.round === "Quarter-final") return `Quarterfinal ${number} Winner`;
  if (match.round === "Semi-final") return `Semifinal ${number} Winner`;
  return "";
}

function getLoserSlotForMatch(match) {
  const number = getRoundMatchNumber(match);
  if (match.round === "Semi-final" && number) return `Semifinal ${number} Loser`;
  return "";
}

function getRelationshipTargets(match) {
  return [getWinnerSlotForMatch(match), getLoserSlotForMatch(match)]
    .filter(Boolean)
    .map(slot => {
      const target = matches.find(item => item.stage === "Knockout" && matchIncludesSlot(item, slot));
      return target ? { target, slot } : null;
    })
    .filter(Boolean);
}

function matchIncludesSlot(match, slot) {
  return match.teams.includes(slot) || (match.sourceSlots || []).includes(slot);
}

function getRoundMatchNumber(match) {
  const roundMatches = matches.filter(item => item.stage === "Knockout" && item.round === match.round);
  const index = roundMatches.findIndex(item => item.id === match.id);
  return index >= 0 ? index + 1 : 0;
}

function getBracketSlot(match, index) {
  const number = getRoundMatchNumber(match);
  const slots = {
    "Round of 32": {
      1: 1,
      3: 8,
      2: 15,
      5: 22,
      11: 32,
      12: 39,
      9: 46,
      10: 53,
      4: 67,
      6: 74,
      7: 81,
      8: 88,
      14: 98,
      16: 105,
      13: 112,
      15: 119
    },
    "Round of 16": {
      1: 5,
      2: 19,
      5: 36,
      6: 49,
      3: 70,
      4: 84,
      7: 101,
      8: 115
    },
    "Quarter-final": {
      1: 12,
      2: 43,
      3: 77,
      4: 108
    },
    "Semi-final": {
      1: 28,
      2: 93
    },
    "Final": {
      1: 56
    },
    "Third-place match": {
      1: 69
    }
  };
  return slots[match.round]?.[number] || index * 2 + 1;
}

function syncBracketScroll() {
  if (!els.bracket || !els.bracketScroll || !els.bracketScrollInner) return;
  requestAnimationFrame(() => {
    const scrollWidth = els.bracket.scrollWidth;
    const clientWidth = els.bracket.clientWidth;
    els.bracketScroll.hidden = scrollWidth <= clientWidth + 1;
    els.bracketScrollInner.style.width = `${scrollWidth}px`;
    els.bracketScroll.scrollLeft = els.bracket.scrollLeft;
  });
}

function drawBracketConnectors(path = getSelectedBracketPath(selectedTeam)) {
  const svg = els.bracket?.querySelector(".bracket-connectors");
  const bracket = els.bracket?.querySelector(".knockout-bracket");
  if (!svg || !bracket) return;

  requestAnimationFrame(() => {
    const bracketRect = bracket.getBoundingClientRect();
    if (!bracketRect.width || !bracketRect.height) return;

    const lines = matches
      .filter(match => match.stage === "Knockout")
      .flatMap(match => getRelationshipTargets(match).map(({ target, slot }) => ({ source: match, target, slot })));

    svg.setAttribute("viewBox", `0 0 ${bracket.scrollWidth} ${bracket.scrollHeight}`);
    svg.setAttribute("width", bracket.scrollWidth);
    svg.setAttribute("height", bracket.scrollHeight);
    svg.innerHTML = lines.map(line => renderConnectorPath(line, bracketRect, path)).join("");
  });
}

function renderConnectorPath({ source, target, slot }, bracketRect, path) {
  const sourceEl = els.bracket.querySelector(`[data-match-id="${source.id}"]`);
  const targetEl = els.bracket.querySelector(`[data-match-id="${target.id}"]`);
  if (!sourceEl || !targetEl) return "";

  const sourceRect = sourceEl.getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();
  const x1 = sourceRect.right - bracketRect.left;
  const y1 = sourceRect.top + sourceRect.height / 2 - bracketRect.top;
  const x2 = targetRect.left - bracketRect.left;
  const y2 = targetRect.top + targetRect.height / 2 - bracketRect.top;
  const midX = x1 + Math.max(26, (x2 - x1) / 2);
  const tone = path.get(source.id) || path.get(target.id) || "";
  const loserClass = /Loser/.test(slot) ? "connector-loser" : "";
  const pathData = `M ${x1} ${y1} H ${midX} V ${y2} H ${x2}`;
  return `<path class="bracket-connector ${tone} ${loserClass}" d="${pathData}" />`;
}

function getBracketMatchTooltip(match, entries) {
  return `${match.round} ${match.id}. ${formatDate(match.date)}. ${match.venue}. Broadcast: ${formatChannelList(match)}. ${entries.map(entry => formatTeamPlain(entry.name)).join(" vs ")}. ${formatMatchOddsTooltip(match)}`;
}

function renderBracketTeam(entry, match, index, selectedTeamName, winner) {
  const team = entry.team;
  const score = match.score ? Number(index === 0 ? match.score.home : match.score.away) : "";
  const selected = entry.name === selectedTeamName;
  const lostFinal = hasFinalScore(match) && winner && entry.name !== winner && team;
  const wonFinal = hasFinalScore(match) && winner === entry.name;
  return `
    <div class="bracket-team ${selected ? "selected" : ""} ${wonFinal ? "winner" : ""} ${lostFinal ? "loser" : ""} ${entry.resolved ? "resolved" : "placeholder"}">
      <span>${team ? `<span class="inline-code">${team.code}</span> ${renderTeamName(team)}` : entry.name}</span>
      <b>${score !== "" ? score : ""}</b>
    </div>
  `;
}

function getResolvedBracketTeams(match) {
  const slots = match.sourceSlots || match.teams;
  return match.teams.map((name, index) => {
    const directTeam = teamByName[name];
    if (directTeam) return { name, team: directTeam, resolved: true };
    const slotName = slots[index] || name;
    const resolved = resolveBracketSlot(slotName);
    return resolved ? { name: resolved.name, team: resolved, resolved: true } : { name: slotName, team: null, resolved: false };
  });
}

function resolveBracketSlot(slotName) {
  const groupSlot = String(slotName).match(/^Group ([A-L]) (Winner|2nd Place)$/);
  if (groupSlot) {
    const [, group, place] = groupSlot;
    return getLockedGroupTeam(group, place === "Winner" ? 1 : 2);
  }
  const thirdPlaceSlot = String(slotName).match(/^Third Place Group ([A-L/]+)$/);
  if (thirdPlaceSlot) return getLockedThirdPlaceTeam(thirdPlaceSlot[1].split("/"));
  return null;
}

function getLockedGroupTeam(group, rank) {
  const groupMatches = getGroupMatches(group);
  if (!groupMatches.length || !groupMatches.every(hasFinalScore)) return null;
  const row = getRawGroupStandings(group).find(item => item.rank === rank);
  return row ? teamByName[row.name] : null;
}

function getLockedThirdPlaceTeam(candidateGroups) {
  if (!Object.keys(groups).every(group => getGroupMatches(group).every(hasFinalScore))) return null;
  const qualifiedThirds = Object.keys(groups)
    .map(group => getRawGroupStandings(group).find(item => item.rank === 3))
    .filter(Boolean)
    .sort(compareStandingTableRows)
    .slice(0, 8);
  const match = qualifiedThirds.find(row => candidateGroups.includes(row.group));
  return match ? teamByName[match.name] : null;
}

function renderTeams() {
  const filtered = allTeams
    .filter(team => matchesSearch(team.name, team.group, team.best, `fifa ${team.ranking}`, `#${team.ranking}`))
    .sort(compareTeams);
  els.teamGrid.innerHTML = filtered.map(team => {
    const standing = getStandings(team.group).find(row => row.name === team.name);
    const status = getTeamStatus(team.name);
    return `
      <article class="team-card ${status.key}" data-team-name="${escapeAttr(team.name)}" data-tip="${escapeAttr(`${team.name}: ${status.label}. FIFA #${team.ranking}. ${team.best}. Select this team to highlight its path.`)}">
        <div class="flag code-badge">${team.code}</div>
        <h3>${renderTeamName(team)}</h3>
        <div class="pill-row">
          <span class="pill">Group ${team.group}</span>
          <span class="pill">FIFA #${team.ranking}</span>
          <span class="pill">${standing.points} pts</span>
          <span class="pill status-pill ${status.key}">${status.label}</span>
          <span class="pill">${team.best}</span>
        </div>
      </article>
    `;
  }).join("") || `<div class="empty">No teams match the current search.</div>`;

  document.querySelectorAll(".team-card").forEach(card => {
    card.addEventListener("click", () => {
      const name = card.dataset.teamName;
      selectedTeam = name;
      els.select.value = name;
      renderAll();
    });
  });
  fitTeamNames();
}

function buildGroupMatches() {
  const groupMatchCounts = {};
  return officialGroupFixtures.map(([group, home, away, date, channel, venue, channels], index) => {
    groupMatchCounts[group] = (groupMatchCounts[group] || 0) + 1;
    const teams = [home, away];
    const matchday = Math.ceil(groupMatchCounts[group] / 2);
    return {
      id: `G${index + 1}`,
      stage: "Group",
      round: `Group ${group}, Matchday ${matchday}`,
      group,
      teams,
      date,
      venue,
      channel,
      channels,
      status: "Scheduled",
      note: buildMatchContext(teams, group),
      impact: "Three points for a win, one for a draw. Top two advance; eight third-place teams also qualify."
    };
  });
}

function buildKnockoutMatches() {
  const roundCounts = {};
  return knockoutScheduleUtc.map(([round, date, channel, venue, channels, homeSlot, awaySlot], index) => {
    roundCounts[round] = (roundCounts[round] || 0) + 1;
    const matchNumber = roundCounts[round];
    return {
      id: `K${73 + index}`,
      stage: "Knockout",
      round,
      group: "",
      teams: [homeSlot || `${round} entrant ${matchNumber}A`, awaySlot || `${round} entrant ${matchNumber}B`],
      sourceSlots: [homeSlot || `${round} entrant ${matchNumber}A`, awaySlot || `${round} entrant ${matchNumber}B`],
      date,
      venue,
      channel,
      channels,
      status: "Pending qualifiers",
      note: "Team names populate as the bracket is resolved.",
      impact: "Single-elimination match. Extra time and penalties decide tied knockout games."
    };
  });
}

function getStageImpact(match) {
  if (match.stage === "Group") return getGroupStageImpact(match);
  return getKnockoutStageImpact(match);
}

function getGroupStageImpact(match) {
  const matchday = getGroupMatchday(match);
  if (matchday === 3) return getFinalGroupMatchImpact(match);

  const rows = getRawGroupStandings(match.group);
  const [homeName, awayName] = match.teams;
  const home = rows.find(row => row.name === homeName);
  const away = rows.find(row => row.name === awayName);
  const remainingAfter = Math.max(0, 3 - matchday);

  if (hasFinalScore(match)) {
    const winner = getMatchWinner(match);
    if (!winner) return `${formatTeamPlain(homeName)} and ${formatTeamPlain(awayName)} each took a point; both still have ${remainingAfter} group match${remainingAfter === 1 ? "" : "es"} to shape the automatic-advance race.`;
    return `${formatTeamPlain(winner)} banked three points; ${formatTeamPlain(winner === homeName ? awayName : homeName)} now has less margin before the final group matches.`;
  }

  return `${formatTeamPlain(homeName)} enter on ${home?.points || 0} point${home?.points === 1 ? "" : "s"} and ${formatTeamPlain(awayName)} on ${away?.points || 0}; a win is worth three points, while a draw keeps both tied to the third-place bubble math.`;
}

function getFinalGroupMatchImpact(match) {
  const [homeName, awayName] = match.teams;
  if (hasFinalScore(match)) {
    const rows = getRawGroupStandings(match.group);
    return [homeName, awayName].map(name => {
      const row = rows.find(item => item.name === name);
      return `${formatTeamPlain(name)} finished ${ordinal(row?.rank || 0)} in Group ${match.group} with ${row?.points || 0} point${row?.points === 1 ? "" : "s"} (${getGroupOutcomeLabel(row?.rank || 0)}).`;
    }).join(" ");
  }

  const homeScenarios = getFinalGroupScenarios(match, homeName);
  const awayScenarios = getFinalGroupScenarios(match, awayName);
  return `${formatTeamPlain(homeName)}: ${formatScenarioSet(homeScenarios)}. ${formatTeamPlain(awayName)}: ${formatScenarioSet(awayScenarios)}. Goal difference is the first pressure point if teams land level on points.`;
}

function getFinalGroupScenarios(match, teamName) {
  const outcomes = [
    { key: "win", score: teamName === match.teams[0] ? [1, 0] : [0, 1] },
    { key: "draw", score: [0, 0] },
    { key: "loss", score: teamName === match.teams[0] ? [0, 1] : [1, 0] }
  ];
  return outcomes.map(outcome => {
    const rows = simulateGroupTable(match, outcome.score[0], outcome.score[1]);
    const row = rows.find(item => item.name === teamName);
    return { key: outcome.key, rank: row.rank, label: getGroupOutcomeLabel(row.rank) };
  });
}

function simulateGroupTable(match, homeGoals, awayGoals) {
  const rows = getRawGroupStandings(match.group, { excludeMatchId: match.id }).map(row => ({ ...row }));
  const rowByName = Object.fromEntries(rows.map(row => [row.name, row]));
  applyGroupResultToRows(rowByName, match.teams[0], match.teams[1], homeGoals, awayGoals);
  rows.forEach(row => {
    row.gd = row.gf - row.ga;
  });
  return rows.sort(compareStandingTableRows).map((row, index) => ({ ...row, rank: index + 1 }));
}

function formatScenarioSet(scenarios) {
  return scenarios.map(item => `${item.key} -> ${item.label}`).join(", ");
}

function getGroupOutcomeLabel(rank) {
  if (rank <= 2) return "auto-advance";
  if (rank === 3) return "third-place bubble";
  return "likely out";
}

function ordinal(value) {
  if (!value) return "unknown";
  const suffix = value === 1 ? "st" : value === 2 ? "nd" : value === 3 ? "rd" : "th";
  return `${value}${suffix}`;
}

function getGroupMatchday(match) {
  const value = String(match.round || "").match(/Matchday (\d+)/i);
  return value ? Number(value[1]) : 0;
}

function getKnockoutStageImpact(match) {
  if (match.round === "Final") return "Winner lifts the World Cup; loser finishes runner-up.";
  if (match.round === "Third-place match") return "Winner finishes third; loser finishes fourth.";

  const nextSlot = getWinnerSlotForMatch(match);
  const nextMatch = nextSlot ? matches.find(item => item.stage === "Knockout" && item.teams.includes(nextSlot)) : null;
  if (!nextMatch) return "Winner advances; loser is eliminated.";

  const opponentSlot = nextMatch.teams.find(team => team !== nextSlot);
  const projectedOpponent = projectSlotWinner(opponentSlot);
  const nextRound = nextMatch.round.toLowerCase();
  if (projectedOpponent) {
    return `Winner advances to the ${nextRound} and will likely face ${formatTeamPlain(projectedOpponent.name)} (${projectedOpponent.reason}); loser is eliminated.`;
  }
  return `Winner advances to the ${nextRound}; loser is eliminated.`;
}

function projectSlotWinner(slot) {
  if (!slot) return null;
  const directTeam = teamByName[slot];
  if (directTeam) return { name: directTeam.name, reason: "already locked into that slot" };

  const source = matches.find(match => getWinnerSlotForMatch(match) === slot);
  if (!source) return null;
  return projectMatchWinner(source);
}

function projectMatchWinner(match) {
  const [homeName, awayName] = match.teams;
  const selectedOdds = getSelectedOdds(match);
  const favoriteFromOdds = selectedOdds?.favorite && teamByName[selectedOdds.favorite] ? teamByName[selectedOdds.favorite] : null;
  if (favoriteFromOdds) return { name: favoriteFromOdds.name, reason: `favored by ${selectedOdds.source || "listed odds"}` };

  const teams = [teamByName[homeName], teamByName[awayName]].filter(Boolean);
  if (teams.length < 2) return teams[0] ? { name: teams[0].name, reason: "only resolved team in the feeder match" } : null;
  const favorite = teams.sort((a, b) => a.ranking - b.ranking)[0];
  return { name: favorite.name, reason: `FIFA-rank projection, #${favorite.ranking}` };
}

function getStandings(group) {
  const rows = groups[group].map(([name, code, best, ranking], index) => ({
      name,
      code,
      flagCode: countryFlagCodes[name] || "",
      best,
      ranking,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
      sort: index
  }));
  const rowByName = Object.fromEntries(rows.map(row => [row.name, row]));

  matches
    .filter(match => match.stage === "Group" && match.group === group && hasResultScore(match))
    .forEach(match => {
      const [homeName, awayName] = match.teams;
      applyGroupResultToRows(rowByName, homeName, awayName, Number(match.score.home), Number(match.score.away));
    });

  rows.forEach(row => {
    row.gd = row.gf - row.ga;
  });

  return rows
    .sort(compareStandingTableRows)
    .map((row, index) => ({
      ...row,
      rank: index + 1,
      status: getTeamStatus(row.name),
      rankLabel: getGroupRankLabel(row.name, index + 1)
    }));
}

function compareStandingTableRows(a, b) {
  return b.points - a.points || b.gd - a.gd || b.gf - a.gf || a.ranking - b.ranking || a.sort - b.sort;
}

function getGroupRankLabel(teamName, rank) {
  const status = getTeamStatus(teamName);
  if (status.key === "qualified" || status.key === "champion") return "Qualified";
  if (status.key === "eliminated") return "Eliminated";
  if (rank <= 2) return "Auto-advance zone";
  if (rank === 3) return "Third-place bubble";
  return "Needs points";
}

function getTeamStatus(teamName) {
  const knockout = getKnockoutStatus(teamName);
  if (knockout) return knockout;

  const team = teamByName[teamName];
  if (!team) return statusData("alive");
  const rows = getRawGroupStandings(team.group);
  const row = rows.find(item => item.name === teamName);
  const groupDone = getGroupMatches(team.group).every(hasFinalScore);
  const allGroupsDone = Object.keys(groups).every(group => getGroupMatches(group).every(hasFinalScore));
  if (!row) return statusData("alive");

  if (groupDone) {
    if (row.rank <= 2) return statusData("qualified");
    if (row.rank === 3) {
      if (!allGroupsDone) return statusData("bubble");
      const thirdRows = Object.keys(groups).map(group => getRawGroupStandings(group).find(item => item.rank === 3)).sort(compareStandingTableRows);
      return thirdRows.slice(0, 8).some(item => item.name === teamName) ? statusData("qualified") : statusData("eliminated");
    }
    return statusData("eliminated");
  }

  if (row.rank === 4 && row.played >= 2) return statusData("at-risk");
  if (row.rank === 3) return statusData("bubble");
  return statusData("alive");
}

function getKnockoutStatus(teamName) {
  const final = matches.find(match => match.round === "Final" && hasFinalScore(match) && match.teams.includes(teamName));
  if (final) return getMatchWinner(final) === teamName ? statusData("champion") : statusData("eliminated", "Runner-up", "Runner-up");

  const knockoutLoss = matches.find(match => match.stage === "Knockout" && match.round !== "Third-place match" && hasFinalScore(match) && match.teams.includes(teamName) && getMatchWinner(match) !== teamName);
  if (knockoutLoss) return statusData("eliminated");

  const knockoutWin = matches.find(match => match.stage === "Knockout" && hasFinalScore(match) && match.teams.includes(teamName) && getMatchWinner(match) === teamName);
  if (knockoutWin) return statusData("qualified", "Advanced", "Advanced");
  return null;
}

function getRawGroupStandings(group, options = {}) {
  const rows = groups[group].map(([name, code, best, ranking], index) => ({
    name,
    code,
    group,
    flagCode: countryFlagCodes[name] || "",
    best,
    ranking,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    points: 0,
    sort: index
  }));
  const rowByName = Object.fromEntries(rows.map(row => [row.name, row]));
  getGroupMatches(group).filter(match => match.id !== options.excludeMatchId).filter(hasResultScore).forEach(match => {
    const [homeName, awayName] = match.teams;
    applyGroupResultToRows(rowByName, homeName, awayName, Number(match.score.home), Number(match.score.away));
  });
  rows.forEach(row => row.gd = row.gf - row.ga);
  return rows.sort(compareStandingTableRows).map((row, index) => ({ ...row, rank: index + 1 }));
}

function applyGroupResultToRows(rowByName, homeName, awayName, homeGoals, awayGoals) {
  const home = rowByName[homeName];
  const away = rowByName[awayName];
  if (!home || !away) return;
  home.played += 1;
  away.played += 1;
  home.gf += homeGoals;
  home.ga += awayGoals;
  away.gf += awayGoals;
  away.ga += homeGoals;
  if (homeGoals > awayGoals) {
    home.won += 1;
    away.lost += 1;
    home.points += 3;
  } else if (awayGoals > homeGoals) {
    away.won += 1;
    home.lost += 1;
    away.points += 3;
  } else {
    home.drawn += 1;
    away.drawn += 1;
    home.points += 1;
    away.points += 1;
  }
}

function getGroupMatches(group) {
  return matches.filter(match => match.stage === "Group" && match.group === group);
}

function hasScore(match) {
  return match.score && match.score.home != null && match.score.away != null;
}

function hasResultScore(match) {
  return hasScore(match) && !["Scheduled", "Pending qualifiers"].includes(match.status);
}

function hasFinalScore(match) {
  return hasScore(match) && match.status === "Final";
}

function getMatchWinner(match) {
  if (!hasScore(match) || Number(match.score.home) === Number(match.score.away)) return "";
  return Number(match.score.home) > Number(match.score.away) ? match.teams[0] : match.teams[1];
}

function statusData(key, label, short) {
  const labels = {
    alive: ["Alive", "Alive"],
    "at-risk": ["At risk", "Risk"],
    bubble: ["Third-place bubble", "Bubble"],
    qualified: ["Qualified", "Qual."],
    eliminated: ["Eliminated", "Out"],
    champion: ["Champion", "Champ"]
  };
  const fallback = labels[key] || labels.alive;
  return { key, label: label || fallback[0], short: short || fallback[1] };
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
  return match.teams.map(name => isPlaceholderTeam(name) ? `zz ${name}` : name).sort().join(" ");
}

function averageMatchRank(match) {
  const ranks = match.teams.map(name => teamByName[name]?.ranking).filter(Boolean);
  return ranks.length ? ranks.reduce((total, rank) => total + rank, 0) / ranks.length : 999;
}

async function refreshScores() {
  try {
    scoreSyncStatus = "Checking scores...";
    oddsSyncStatus = "Checking odds...";
    renderSchedule();
    const updates = await fetchScoreUpdates();
    const result = applyScoreUpdates(updates);
    const resolvedFixtures = syncResolvedKnockoutFixtures();
    if (resolvedFixtures) result.fixtures += resolvedFixtures;
    diagnostics.score = `${updates.length} score/fixture update${updates.length === 1 ? "" : "s"} received; ${result.scores} score${result.scores === 1 ? "" : "s"}, ${result.fixtures} fixture field${result.fixtures === 1 ? "" : "s"}, and ${result.statuses} status${result.statuses === 1 ? "" : "es"} applied.`;
    scoreSyncStatus = formatScoreSyncStatus(result);
  } catch (error) {
    scoreSyncStatus = "Scores unavailable";
    diagnostics.score = error.message || "Score request failed";
    console.warn("Score refresh failed:", error);
  }
  try {
    const oddsUpdates = await fetchOddsUpdates();
    const oddsResult = applyOddsUpdates(oddsUpdates);
    diagnostics.odds = `${oddsUpdates.length} odds update${oddsUpdates.length === 1 ? "" : "s"} received; ${oddsResult.odds} matched, ${oddsResult.unmatched} unmatched.`;
    oddsSyncStatus = formatOddsSyncStatus(oddsResult);
  } catch (error) {
    oddsDiagnostic = error.message || "Odds request failed";
    oddsSyncStatus = `Odds unavailable: ${oddsDiagnostic}`;
    diagnostics.odds = oddsDiagnostic;
    console.warn("Odds refresh failed:", error);
  }
  renderAll();
}

async function fetchOddsUpdates() {
  const updates = [];
  const diagnosticParts = [];
  try {
    const espnUpdates = await fetchEspnOddsUpdates();
    updates.push(...espnUpdates);
    diagnosticParts.push(`ESPN: ${diagnostics.espn}`);
  } catch (error) {
    const message = error.message || "request failed";
    diagnostics.espn = `Unavailable: ${message}`;
    diagnosticParts.push(`ESPN unavailable: ${message}`);
  }
  if (oddsApi.url) {
    try {
      const response = await fetch(oddsApi.url, { cache: "no-store" });
      if (!response.ok) throw new Error(`Odds API proxy returned ${response.status}`);
      const payload = await response.json();
      const proxyUpdates = normalizeOddsFeed(payload);
      updates.push(...proxyUpdates);
      diagnosticParts.push(`Proxy: ${describeGenericOddsPayload(payload, proxyUpdates)}`);
    } catch (error) {
      diagnosticParts.push(`Proxy unavailable: ${error.message || "request failed"}`);
    }
  } else if (oddsApi.key) {
    try {
      const url = buildOddsApiUrl();
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(`The Odds API returned ${response.status}`);
      const payload = await response.json();
      const apiUpdates = normalizeOddsApiEvents(payload);
      updates.push(...apiUpdates);
      diagnosticParts.push(`Sportsbook: ${describeTheOddsApiPayload(payload, apiUpdates)}`);
    } catch (error) {
      diagnosticParts.push(`Sportsbook unavailable: ${error.message || "request failed"}`);
    }
  } else {
    diagnosticParts.push("Sportsbook: no API key or proxy configured");
  }

  if (polymarketApi.enabled) {
    try {
      const polymarketUpdates = await fetchPolymarketOddsUpdates();
      updates.push(...polymarketUpdates);
      diagnosticParts.push(`Polymarket: ${oddsDiagnostic}`);
    } catch (error) {
      const message = error.message || "request failed";
      diagnostics.polymarket = `Unavailable: ${message}. If this says Failed to fetch in the browser, the likely cause is CORS.`;
      diagnosticParts.push(`Polymarket unavailable: ${message}`);
    }
  }

  if (!updates.length && !diagnosticParts.length) diagnosticParts.push("no odds source configured");
  oddsDiagnostic = diagnosticParts.join("; ");
  return updates;
}

async function fetchPolymarketOddsUpdates() {
  const response = await fetch(polymarketApi.url, { cache: "no-store" });
  if (!response.ok) throw new Error(`Polymarket returned ${response.status}`);
  const payload = await response.json();
  const updates = normalizePolymarketEvents(payload);
  oddsDiagnostic = describePolymarketPayload(payload, updates);
  diagnostics.polymarket = oddsDiagnostic;
  return updates;
}

async function fetchEspnOddsUpdates() {
  const response = await fetch(scoreApi.espnUrl, { cache: "no-store" });
  if (!response.ok) throw new Error(`ESPN scoreboard returned ${response.status}`);
  const payload = await response.json();
  diagnostics.espn = describeEspnPayload(payload);
  return normalizeEspnScores(payload).filter(update => update.odds);
}

function buildOddsApiUrl() {
  const params = new URLSearchParams({
    apiKey: oddsApi.key,
    regions: "us",
    markets: "h2h",
    oddsFormat: "american",
    dateFormat: "iso",
    bookmakers: oddsApi.bookmakers
  });
  params.set("commenceTimeFrom", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
  params.set("commenceTimeTo", new Date("2026-07-20T04:00:00Z").toISOString());
  return `${oddsApi.baseUrl}/${encodeURIComponent(oddsApi.sportKey)}/odds/?${params.toString()}`;
}

function normalizeOddsFeed(payload) {
  const items = Array.isArray(payload) ? payload : payload.matches || payload.games || payload.events || [];
  if (items.some(item => item.bookmakers)) return normalizeOddsApiEvents(items);
  return items.map(item => ({
    id: item.id || item.matchId,
    homeTeam: item.homeTeam || item.home || item.teams?.home,
    awayTeam: item.awayTeam || item.away || item.teams?.away,
    date: item.date || item.utcDate || item.kickoff || item.commence_time,
    odds: normalizeOdds(item.odds || item.probabilities || item.prediction, item.homeTeam || item.home || item.teams?.home, item.awayTeam || item.away || item.teams?.away)
  })).filter(update => update.odds);
}

function normalizeOddsApiEvents(events) {
  return (events || []).map(event => ({
    id: event.id,
    homeTeam: event.home_team,
    awayTeam: event.away_team,
    date: event.commence_time,
    odds: buildConsensusOdds(event)
  })).filter(update => update.odds);
}

function normalizePolymarketEvents(payload) {
  const events = Array.isArray(payload) ? payload : payload.events || payload.data || [];
  return events.flatMap(event => normalizePolymarketEvent(event));
}

function normalizePolymarketEvent(event) {
  const markets = event.markets || [];
  return markets.map(market => {
    const outcomes = parseMaybeJsonArray(market.outcomes || market.outcomeNames || market.tokens);
    const prices = parseMaybeJsonArray(market.outcomePrices || market.prices || market.lastPrices);
    const entries = outcomes.map((outcome, index) => {
      const name = canonicalTeamName(typeof outcome === "string" ? outcome : outcome?.name || outcome?.outcome);
      const price = Number(prices[index] ?? outcome?.price ?? outcome?.lastPrice);
      return name && Number.isFinite(price) ? [name, normalizeProbabilityScale(price)] : null;
    }).filter(Boolean);

    if (entries.length < 2) return null;
    const teams = entries.filter(([name]) => teamByName[name]);
    if (teams.length !== 2) return null;
    const total = teams.reduce((sum, [, probability]) => sum + probability, 0);
    if (!total) return null;
    const probabilities = Object.fromEntries(teams.map(([name, probability]) => [name, probability / total]));
    const favorite = teams.sort((a, b) => b[1] - a[1])[0]?.[0] || "";
    return {
      id: event.id || market.id,
      homeTeam: teams[0][0],
      awayTeam: teams[1][0],
      date: event.startDate || event.start_date || event.endDate || event.end_date || market.endDate || market.end_date,
      odds: {
        favorite,
        probabilities,
        source: "Polymarket market price",
        sourceType: "prediction-market",
        updatedAt: new Date().toISOString()
      }
    };
  }).filter(Boolean);
}

function parseMaybeJsonArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== "string") return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function buildConsensusOdds(event) {
  const snapshots = [];
  (event.bookmakers || []).forEach(bookmaker => {
    const market = (bookmaker.markets || []).find(item => item.key === "h2h");
    if (!market?.outcomes?.length) return;
    const raw = market.outcomes.map(outcome => ({
      name: canonicalTeamName(outcome.name) || normalizeDrawName(outcome.name),
      price: Number(outcome.price),
      probability: americanOddsToProbability(Number(outcome.price))
    })).filter(outcome => outcome.name && Number.isFinite(outcome.probability));
    const total = raw.reduce((sum, outcome) => sum + outcome.probability, 0);
    if (!total) return;
    snapshots.push({
      bookmaker: bookmaker.title || bookmaker.key,
      updatedAt: bookmaker.last_update,
      probabilities: Object.fromEntries(raw.map(outcome => [outcome.name, outcome.probability / total]))
    });
  });
  if (!snapshots.length) return null;

  const probabilities = {};
  snapshots.forEach(snapshot => {
    Object.entries(snapshot.probabilities).forEach(([name, probability]) => {
      probabilities[name] = (probabilities[name] || 0) + probability / snapshots.length;
    });
  });
  const teamEntries = Object.entries(probabilities).filter(([name]) => teamByName[name]);
  const favorite = teamEntries.sort((a, b) => b[1] - a[1])[0]?.[0] || "";
  const updatedTimes = snapshots.map(snapshot => snapshot.updatedAt).filter(Boolean).sort();
  return {
    favorite,
    probabilities,
    source: "The Odds API consensus",
    sourceType: "sportsbook",
    bookmakers: snapshots.map(snapshot => snapshot.bookmaker),
    updatedAt: updatedTimes[updatedTimes.length - 1] || new Date().toISOString()
  };
}

function americanOddsToProbability(price) {
  if (!Number.isFinite(price) || price === 0) return NaN;
  if (price > 1 && price < 20) return 1 / price;
  return price > 0 ? 100 / (price + 100) : Math.abs(price) / (Math.abs(price) + 100);
}

function normalizeDrawName(name) {
  return /^draw$/i.test(String(name || "").trim()) ? "Draw" : "";
}

function applyOddsUpdates(updates) {
  let odds = 0;
  let unmatched = 0;
  const unmatchedSamples = [];
  updates.forEach(update => {
    const match = findMatchForOdds(update);
    if (!match || !update.odds) {
      unmatched += 1;
      if (unmatchedSamples.length < 3) unmatchedSamples.push(`${update.homeTeam || "?"} vs ${update.awayTeam || "?"}${update.date ? ` (${formatMonthDay(update.date)})` : ""}`);
      return;
    }
    attachMatchOdds(match, update.odds);
    odds += 1;
  });
  diagnostics.matching = unmatchedSamples.length ? `${odds} odds update${odds === 1 ? "" : "s"} matched; ${unmatched} unmatched. Samples: ${unmatchedSamples.join("; ")}.` : `${odds} odds update${odds === 1 ? "" : "s"} matched; ${unmatched} unmatched.`;
  return { odds, received: updates.length, unmatched };
}

function attachMatchOdds(match, odds) {
  if (!match || !odds) return;
  const source = getOddsSourceKey(odds);
  match.oddsBySource = { ...(match.oddsBySource || {}), [source]: odds };
  match.odds = getAutoOdds(match);
}

function getOddsSourceKey(odds) {
  if (odds?.sourceType === "prediction-market") return "polymarket";
  return "sportsbook";
}

function getAutoOdds(match) {
  return match.oddsBySource?.sportsbook || match.oddsBySource?.polymarket || null;
}

function findMatchForOdds(update) {
  return matches.find(match => {
    const apiTeams = [canonicalTeamName(update.homeTeam), canonicalTeamName(update.awayTeam)].filter(Boolean);
    if (apiTeams.length !== 2 || !teamsMatchIgnoringOrder(match.teams, apiTeams)) return false;
    if (!update.date && update.odds?.sourceType === "prediction-market") return true;
    if (!update.date) return false;
    const kickoffGap = Math.abs(new Date(match.date).getTime() - new Date(update.date).getTime());
    const allowedGap = update.odds?.sourceType === "prediction-market" ? 7 * 24 * 60 * 60 * 1000 : 12 * 60 * 60 * 1000;
    return !Number.isNaN(kickoffGap) && kickoffGap <= allowedGap;
  });
}

async function fetchScoreUpdates() {
  const token = localStorage.getItem("footballDataToken");
  if (token) {
    const response = await fetch(scoreApi.footballDataUrl, {
      headers: { "X-Auth-Token": token }
    });
    if (!response.ok) throw new Error(`football-data.org returned ${response.status}`);
    const payload = await response.json();
    return normalizeFootballDataScores(payload);
  }

  try {
    const response = await fetch(scoreApi.url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Score API returned ${response.status}`);
    const payload = await response.json();
    return normalizeProxyScores(payload);
  } catch (error) {
    console.warn("Primary score API unavailable, falling back to ESPN:", error);
    return fetchEspnScoreUpdates();
  }
}

async function fetchEspnScoreUpdates() {
  const response = await fetch(scoreApi.espnUrl, { cache: "no-store" });
  if (!response.ok) throw new Error(`ESPN scoreboard returned ${response.status}`);
  const payload = await response.json();
  diagnostics.espn = describeEspnPayload(payload);
  return normalizeEspnScores(payload);
}

function describeEspnPayload(payload) {
  const events = payload.events || [];
  const withOdds = events.filter(event => event.competitions?.[0]?.odds).length;
  const withMoneyline = events.filter(event => event.competitions?.[0]?.odds?.some?.(item => item?.moneyline)).length;
  return `${events.length} events returned; ${withOdds} include odds; ${withMoneyline} include nested moneyline prices.`;
}

function normalizeProxyScores(payload) {
  const items = Array.isArray(payload) ? payload : payload.matches || payload.games || [];
  return items.map(item => ({
    id: item.id || item.matchId,
    homeTeam: item.homeTeam || item.home || item.teams?.home,
    awayTeam: item.awayTeam || item.away || item.teams?.away,
    date: item.date || item.utcDate || item.kickoff || item.startTime || item.startDate,
    venue: item.venue?.fullName || item.venue?.name || item.venue,
    channel: item.channel,
    channels: item.channels || item.broadcasts,
    clock: item.clock,
    displayClock: item.displayClock || item.clockDisplay || item.gameClock,
    statusDetail: item.statusDetail || item.shortDetail || item.detail,
    odds: normalizeOdds(item.odds || item.probabilities || item.prediction, item.homeTeam || item.home || item.teams?.home, item.awayTeam || item.away || item.teams?.away),
    homeScore: item.homeScore ?? item.score?.home ?? item.score?.fullTime?.home,
    awayScore: item.awayScore ?? item.score?.away ?? item.score?.fullTime?.away,
    status: item.status || item.state,
    updatedAt: item.updatedAt || item.lastUpdated || new Date().toISOString()
  }));
}

function normalizeFootballDataScores(payload) {
  return (payload.matches || []).map(item => ({
    homeTeam: item.homeTeam?.name,
    awayTeam: item.awayTeam?.name,
    date: item.utcDate,
    venue: item.venue,
    clock: item.clock,
    displayClock: item.displayClock,
    statusDetail: item.status,
    odds: normalizeOdds(item.odds, item.homeTeam?.name, item.awayTeam?.name),
    homeScore: item.score?.fullTime?.home ?? item.score?.regularTime?.home,
    awayScore: item.score?.fullTime?.away ?? item.score?.regularTime?.away,
    status: item.status,
    updatedAt: item.lastUpdated || new Date().toISOString()
  }));
}

function normalizeEspnScores(payload) {
  return (payload.events || []).map(event => {
    const competition = event.competitions?.[0];
    const competitors = competition?.competitors || [];
    const home = competitors.find(team => team.homeAway === "home");
    const away = competitors.find(team => team.homeAway === "away");
    const status = competition?.status?.type?.name || event.status?.type?.name || competition?.status?.type?.state;
    const hasResult = isResultStatus(status);
    const channels = competition?.broadcasts?.flatMap(broadcast => broadcast.names || []) || [];
    const statusInfo = competition?.status || event.status;
    const odds = normalizeEspnOdds(competition?.odds, home?.team?.displayName, away?.team?.displayName);
    return {
      homeTeam: home?.team?.displayName,
      awayTeam: away?.team?.displayName,
      date: event.date,
      venue: formatEspnVenue(competition?.venue),
      channel: channels[0],
      channels,
      clock: statusInfo?.clock,
      displayClock: statusInfo?.displayClock,
      statusDetail: statusInfo?.type?.shortDetail || statusInfo?.type?.detail || statusInfo?.type?.description,
      odds,
      homeScore: hasResult ? home?.score : null,
      awayScore: hasResult ? away?.score : null,
      status,
      updatedAt: new Date().toISOString()
    };
  });
}

function normalizeEspnOdds(odds, homeName, awayName) {
  const item = Array.isArray(odds) ? odds[0] : odds;
  if (!item) return null;
  return normalizeOdds(item, homeName, awayName);
}

function normalizeOdds(odds, homeName, awayName) {
  if (!odds) return null;
  const moneyline = normalizeMoneylineOdds(odds, homeName, awayName);
  if (moneyline) return moneyline;

  const favoriteName = odds.favorite || odds.favoredTeam || odds.team || odds.winner;
  const favorite = canonicalTeamName(favoriteName);
  if (favorite) return { favorite, source: odds.provider || odds.source || "listed odds", sourceType: "sportsbook", probabilities: normalizeProvidedProbabilities(odds, homeName, awayName) };

  if (odds.homeTeamOdds?.favorite) {
    const projected = canonicalTeamName(homeName);
    return projected ? { favorite: projected, source: odds.provider || "listed odds", sourceType: "sportsbook", probabilities: normalizeProvidedProbabilities(odds, homeName, awayName) } : null;
  }
  if (odds.awayTeamOdds?.favorite) {
    const projected = canonicalTeamName(awayName);
    return projected ? { favorite: projected, source: odds.provider || "listed odds", sourceType: "sportsbook", probabilities: normalizeProvidedProbabilities(odds, homeName, awayName) } : null;
  }

  const homeProbability = Number(odds.homeWinProbability ?? odds.homeProbability ?? odds.home);
  const awayProbability = Number(odds.awayWinProbability ?? odds.awayProbability ?? odds.away);
  if (Number.isFinite(homeProbability) && Number.isFinite(awayProbability) && homeProbability !== awayProbability) {
    const projected = homeProbability > awayProbability ? canonicalTeamName(homeName) : canonicalTeamName(awayName);
    const probabilities = normalizeProvidedProbabilities(odds, homeName, awayName);
    return projected ? { favorite: projected, source: "listed win probability", sourceType: "sportsbook", probabilities } : null;
  }
  return null;
}

function normalizeMoneylineOdds(odds, homeName, awayName) {
  const moneyline = odds?.moneyline;
  if (!moneyline) return null;
  const home = canonicalTeamName(homeName);
  const away = canonicalTeamName(awayName);
  const entries = [];
  const homePrice = parseAmericanOdds(moneyline.home?.close?.odds ?? moneyline.home?.odds ?? moneyline.home);
  const awayPrice = parseAmericanOdds(moneyline.away?.close?.odds ?? moneyline.away?.odds ?? moneyline.away);
  const drawPrice = parseAmericanOdds(moneyline.draw?.close?.odds ?? moneyline.draw?.odds ?? odds.drawOdds?.moneyLine);
  if (home && Number.isFinite(homePrice)) entries.push([home, americanOddsToProbability(homePrice)]);
  if (away && Number.isFinite(awayPrice)) entries.push([away, americanOddsToProbability(awayPrice)]);
  if (Number.isFinite(drawPrice)) entries.push(["Draw", americanOddsToProbability(drawPrice)]);
  const total = entries.reduce((sum, [, probability]) => sum + probability, 0);
  if (!total || entries.length < 2) return null;
  const probabilities = Object.fromEntries(entries.map(([name, probability]) => [name, probability / total]));
  const favorite = [home, away].filter(Boolean).sort((a, b) => (probabilities[b] || 0) - (probabilities[a] || 0))[0] || "";
  return {
    favorite,
    source: odds.provider?.displayName || odds.provider?.name || odds.source || "ESPN listed odds",
    sourceType: "sportsbook",
    probabilities
  };
}

function parseAmericanOdds(value) {
  if (value == null) return NaN;
  const cleaned = String(value).replace(/[^\d+-]/g, "");
  return Number(cleaned);
}

function normalizeProvidedProbabilities(odds, homeName, awayName) {
  const home = canonicalTeamName(homeName);
  const away = canonicalTeamName(awayName);
  const entries = [];
  const homeProbability = Number(odds.homeWinProbability ?? odds.homeProbability ?? odds.home);
  const awayProbability = Number(odds.awayWinProbability ?? odds.awayProbability ?? odds.away);
  const drawProbability = Number(odds.drawProbability ?? odds.draw);
  if (home && Number.isFinite(homeProbability)) entries.push([home, normalizeProbabilityScale(homeProbability)]);
  if (away && Number.isFinite(awayProbability)) entries.push([away, normalizeProbabilityScale(awayProbability)]);
  if (Number.isFinite(drawProbability)) entries.push(["Draw", normalizeProbabilityScale(drawProbability)]);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  return total ? Object.fromEntries(entries.map(([name, value]) => [name, value / total])) : null;
}

function normalizeProbabilityScale(value) {
  return value > 1 ? value / 100 : value;
}

function formatEspnVenue(venue) {
  if (!venue?.fullName) return "";
  const city = venue.address?.city;
  const country = venue.address?.country;
  return `${venue.fullName}${city ? ` - ${city}${country ? `, ${country}` : ""}` : ""}`;
}

function applyScoreUpdates(updates) {
  const result = {
    scores: 0,
    fixtures: 0,
    statuses: 0
  };
  updates.forEach(update => {
    const match = findMatchForScore(update);
    if (!match) return;

    if (updateMatchTeams(match, update)) {
      result.fixtures += 1;
    }

    if (updateMatchVenueAndChannels(match, update)) {
      result.fixtures += 1;
    }

    if (update.homeScore != null && update.awayScore != null) {
      match.score = {
        home: update.homeScore,
        away: update.awayScore
      };
      match.scoreUpdatedAt = update.updatedAt;
      result.scores += 1;
    }

    if (update.odds) attachMatchOdds(match, update.odds);

    const status = formatApiStatus(update.status);
    if (status && shouldApplyStatus(match, status) && match.status !== status) {
      match.status = status;
      result.statuses += 1;
    }

    updateMatchClock(match, update);
  });
  return result;
}

function shouldApplyStatus(match, status) {
  return !(match.stage === "Knockout" && hasPlaceholderTeam(match) && status === "Scheduled");
}

function updateMatchClock(match, update) {
  match.clock = update.clock ?? match.clock;
  match.displayClock = update.displayClock || match.displayClock;
  match.statusDetail = update.statusDetail || match.statusDetail;
}

function formatScoreSyncStatus(result) {
  const parts = [];
  if (result.scores) parts.push(`${result.scores} scores`);
  if (result.fixtures) parts.push(`${result.fixtures} fixtures`);
  if (result.statuses) parts.push(`${result.statuses} statuses`);
  return parts.length ? `Scores refreshed: ${parts.join(", ")} updated` : "Scores refreshed: no updates";
}

function formatOddsSyncStatus(result) {
  if (!hasOddsConfig() && !polymarketApi.enabled) return "Odds not configured: set oddsApiKey or PATH_TO_CUP_ODDS_API_URL";
  if (result.odds) {
    const unmatched = result.unmatched ? `, ${result.unmatched} unmatched` : "";
    return `Odds refreshed: ${result.odds} matches${unmatched} (${oddsDiagnostic})`;
  }
  return `Odds refreshed: 0 matches (${oddsDiagnostic})`;
}

function hasOddsConfig() {
  return Boolean(oddsApi.url || oddsApi.key);
}

function describeGenericOddsPayload(payload, updates) {
  const items = Array.isArray(payload) ? payload : payload.matches || payload.games || payload.events || [];
  return `${items.length} odds item${items.length === 1 ? "" : "s"} returned, ${updates.length} usable update${updates.length === 1 ? "" : "s"}`;
}

function describeTheOddsApiPayload(events, updates) {
  const items = Array.isArray(events) ? events : [];
  const withBookmakers = items.filter(event => event.bookmakers?.length).length;
  const withMoneyline = items.filter(event =>
    (event.bookmakers || []).some(bookmaker =>
      (bookmaker.markets || []).some(market => market.key === "h2h" && market.outcomes?.length)
    )
  ).length;
  if (!items.length) return "The Odds API returned 0 events for the configured sport/date/bookmakers";
  return `${items.length} event${items.length === 1 ? "" : "s"} returned, ${withBookmakers} with bookmakers, ${withMoneyline} with h2h markets, ${updates.length} usable update${updates.length === 1 ? "" : "s"}`;
}

function describePolymarketPayload(payload, updates) {
  const events = Array.isArray(payload) ? payload : payload.events || payload.data || [];
  const markets = events.reduce((total, event) => total + (event.markets?.length || 0), 0);
  return `Polymarket checked ${events.length} event${events.length === 1 ? "" : "s"} / ${markets} market${markets === 1 ? "" : "s"}, ${updates.length} team-outcome match${updates.length === 1 ? "" : "es"} usable`;
}

function formatTeamOddsTooltip(match, teamName) {
  const probability = getTeamWinProbability(match, teamName);
  if (probability == null) return "Win chance: not enough matchup data yet.";
  const draw = getOutcomeProbability(match, "Draw");
  const drawText = draw == null ? "" : ` Draw ${formatPercent(draw)}.`;
  return `Win chance: ${formatPercent(probability)}.${drawText} ${getOddsSourceSummary(match)}`;
}

function formatMatchOddsTooltip(match) {
  const probabilities = getMatchProbabilities(match);
  if (!probabilities) return "Win chance: not enough matchup data yet.";
  const parts = match.teams
    .filter(name => teamByName[name])
    .map(name => `${name} ${formatPercent(probabilities[name] || 0)}`);
  const draw = getOutcomeProbability(match, "Draw");
  if (draw != null) parts.push(`Draw ${formatPercent(draw)}`);
  const selectedOdds = getSelectedOdds(match);
  const books = selectedOdds?.bookmakers?.length ? ` Books: ${selectedOdds.bookmakers.slice(0, 4).join(", ")}${selectedOdds.bookmakers.length > 4 ? "..." : ""}.` : "";
  return `${parts.join(", ")}. ${getOddsSourceSummary(match)}${books}`;
}

function renderWinChanceBar(match, variant = "") {
  const probabilities = getMatchProbabilities(match);
  if (!probabilities) return "";
  const teams = match.teams.filter(name => teamByName[name]);
  if (teams.length !== 2) return "";
  const segments = teams.map((name, index) => ({
    name,
    className: index === 0 ? "team-a" : "team-b",
    probability: probabilities[name] || 0,
    label: teamByName[name]?.code || name
  }));
  const draw = probabilities.Draw;
  if (draw && match.stage === "Group") {
    segments.splice(1, 0, { name: "Draw", className: "draw", probability: draw, label: "Draw" });
  }
  if (!segments.some(segment => segment.probability > 0)) return "";
  return `
    <div class="win-bar ${variant}" data-tip="${escapeAttr(formatMatchOddsTooltip(match))}">
      <div class="win-bar-track">
        ${segments.map(segment => `
          <span class="win-segment ${segment.className}" style="--p:${Math.max(0, Math.min(100, segment.probability * 100)).toFixed(2)}%;" title="${escapeAttr(`${segment.name}: ${formatPercent(segment.probability)}`)}" aria-label="${escapeAttr(`${segment.name}: ${formatPercent(segment.probability)}`)}">
            <span>${escapeHtml(segment.label)} ${formatPercent(segment.probability)}</span>
          </span>
        `).join("")}
      </div>
      <div class="win-bar-labels">
        ${segments.map(segment => `<span class="${segment.className}"><b>${escapeHtml(segment.label)}</b> ${formatPercent(segment.probability)}</span>`).join("")}
      </div>
    </div>
  `;
}

function getTeamWinProbability(match, teamName) {
  const probabilities = getMatchProbabilities(match);
  return probabilities?.[canonicalTeamName(teamName) || teamName] ?? null;
}

function getOutcomeProbability(match, outcomeName) {
  const probability = getMatchProbabilities(match)?.[outcomeName];
  return Number.isFinite(probability) ? probability : null;
}

function getMatchProbabilities(match) {
  const probabilities = getSelectedOdds(match)?.probabilities || (oddsSourceMode === "sportsbook" || oddsSourceMode === "polymarket" ? null : getRankProjectionProbabilities(match));
  return normalizeDisplayedProbabilities(match, probabilities);
}

function getSelectedOdds(match) {
  if (!match) return null;
  if (oddsSourceMode === "sportsbook") return match.oddsBySource?.sportsbook || null;
  if (oddsSourceMode === "polymarket") return match.oddsBySource?.polymarket || null;
  if (oddsSourceMode === "fifa") return null;
  return getAutoOdds(match);
}

function normalizeDisplayedProbabilities(match, probabilities) {
  if (!probabilities) return null;
  if (match.stage === "Group") return probabilities;
  const teams = match.teams.filter(name => teamByName[name]);
  const entries = teams.map(name => [name, Number(probabilities[name]) || 0]);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  if (!total) return null;
  return Object.fromEntries(entries.map(([name, value]) => [name, value / total]));
}

function getRankProjectionProbabilities(match) {
  const teams = match.teams.map(name => teamByName[name]).filter(Boolean);
  if (teams.length !== 2) return null;
  const strengths = teams.map(team => 1 / Math.max(team.ranking, 1));
  const totalStrength = strengths[0] + strengths[1];
  const drawShare = match.stage === "Group" ? 0.24 : 0;
  const winShare = 1 - drawShare;
  return {
    [teams[0].name]: winShare * (strengths[0] / totalStrength),
    [teams[1].name]: winShare * (strengths[1] / totalStrength),
    ...(drawShare ? { Draw: drawShare } : {})
  };
}

function getOddsSourceLabel(match) {
  const selectedOdds = getSelectedOdds(match);
  if (selectedOdds?.source) return selectedOdds.source;
  return "FIFA-rank projection";
}

function getOddsSourceSummary(match) {
  const selectedOdds = getSelectedOdds(match);
  if (selectedOdds?.sourceType === "sportsbook") return `Sportsbook odds from ${getOddsSourceLabel(match)}; reflects listed bookmaker prices.`;
  if (selectedOdds?.sourceType === "prediction-market") return `Polymarket market-implied price; reflects trader pricing, not sportsbook odds.`;
  return "FIFA-rank projection; rough fallback, not betting odds.";
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function findMatchForScore(update) {
  if (update.id) {
    const byId = matches.find(match => match.id === update.id);
    if (byId) return byId;
  }

  return matches.find(match => {
    const [home, away] = match.teams;
    return namesMatch(home, update.homeTeam) && namesMatch(away, update.awayTeam);
  }) || findMatchByKickoffForFixtureUpdate(update);
}

function findMatchByKickoffForFixtureUpdate(update) {
  if (!update.date || !canUpdateFixtureTeams(update)) return null;
  const kickoff = new Date(update.date).getTime();
  if (Number.isNaN(kickoff)) return null;
  const candidates = matches.filter(match =>
    match.stage === "Knockout" &&
    hasPlaceholderTeam(match) &&
    Math.abs(new Date(match.date).getTime() - kickoff) < 60 * 1000
  );
  return candidates.length === 1 ? candidates[0] : null;
}

function updateMatchTeams(match, update) {
  const teams = [resolveApiTeamOrSlot(update.homeTeam, match.teams[0]), resolveApiTeamOrSlot(update.awayTeam, match.teams[1])];
  if (!teams.some(Boolean)) return false;
  if (!hasPlaceholderTeam(match) && !teamsMatchIgnoringOrder(match.teams, teams)) return false;
  if (match.teams.every((team, index) => team === teams[index])) return false;
  match.teams = teams;
  match.note = match.stage === "Group" ? buildMatchContext(teams, match.group) : "Fixture teams updated from the external API as the bracket was resolved.";
  return true;
}

function syncResolvedKnockoutFixtures() {
  let changed = 0;
  matches.filter(match => match.stage === "Knockout" && hasPlaceholderTeam(match)).forEach(match => {
    const entries = getResolvedBracketTeams(match);
    if (entries.length !== 2 || entries.some(entry => !entry.resolved)) return;
    const teams = entries.map(entry => entry.name);
    if (match.teams.every((team, index) => team === teams[index])) return;
    match.teams = teams;
    if (match.status === "Pending qualifiers") match.status = "Scheduled";
    match.note = "Fixture teams updated from locked qualification slots.";
    changed += 1;
  });
  return changed;
}

function canUpdateFixtureTeams(update) {
  return Boolean(canonicalTeamName(update.homeTeam) || canonicalTeamName(update.awayTeam) || isBracketSlotName(update.homeTeam) || isBracketSlotName(update.awayTeam));
}

function resolveApiTeamOrSlot(apiName, currentName) {
  return canonicalTeamName(apiName) || (isBracketSlotName(apiName) ? apiName : currentName);
}

function updateMatchVenueAndChannels(match, update) {
  let changed = false;
  if (update.venue && match.venue !== update.venue) {
    match.venue = update.venue;
    changed = true;
  }
  const channels = normalizeChannels(update.channels || update.channel);
  if (channels.length && channels.join("|") !== (match.channels || []).join("|")) {
    match.channels = channels;
    match.channel = channels[0];
    changed = true;
  }
  return changed;
}

function normalizeChannels(value) {
  if (!value) return [];
  return (Array.isArray(value) ? value : String(value).split(/[,/]/)).map(item => String(item).trim()).filter(Boolean);
}

function hasPlaceholderTeam(match) {
  return match.teams.some(isPlaceholderTeam);
}

function isPlaceholderTeam(name) {
  return /entrant|slot|winner|place|pending/i.test(name);
}

function isBracketSlotName(name) {
  return /^(Group [A-L]|Third Place Group|Round of 32|Round of 16|Quarterfinal|Semifinal)/i.test(String(name || ""));
}

function isKnownTeamName(name) {
  return Boolean(canonicalTeamName(name));
}

function canonicalTeamName(name) {
  if (!name) return "";
  return allTeams.find(team => normalizeTeamName(team.name) === normalizeTeamName(name))?.name || "";
}

function teamsMatchIgnoringOrder(first, second) {
  return first.map(normalizeTeamName).sort().join("|") === second.map(normalizeTeamName).sort().join("|");
}

function namesMatch(localName, apiName) {
  if (!localName || !apiName) return false;
  return normalizeTeamName(localName) === normalizeTeamName(apiName);
}

function normalizeTeamName(name) {
  const aliases = {
    "bosnia herzegovina": "bosnia and herzegovina",
    "cabo verde": "cape verde",
    usa: "united states",
    usmnt: "united states",
    turkiye: "turkey",
    "cote divoire": "ivory coast",
    "cote d ivoire": "ivory coast",
    "czech republic": "czechia",
    "congo dr": "dr congo",
    "congo democratic republic": "dr congo"
  };
  const normalized = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  return aliases[normalized] || normalized;
}

function formatApiStatus(status) {
  if (!status) return "";
  const normalized = String(status || "").toUpperCase();
  if (["SCHEDULED", "TIMED", "STATUS_SCHEDULED", "STATUS_FIRST_PITCH"].includes(normalized)) return "Scheduled";
  if (["LIVE", "IN_PLAY", "IN_PROGRESS", "PAUSED", "HALFTIME", "STATUS_IN_PROGRESS", "STATUS_FIRST_HALF", "STATUS_HALFTIME", "STATUS_SECOND_HALF", "STATUS_EXTRA_TIME", "STATUS_PENALTY_SHOOTOUT"].includes(normalized)) return "Live";
  if (["FINISHED", "FT", "FULL_TIME", "STATUS_FINAL", "STATUS_FULL_TIME"].includes(normalized)) return "Final";
  if (["POSTPONED", "SUSPENDED", "CANCELLED"].includes(normalized)) return normalized[0] + normalized.slice(1).toLowerCase();
  return status;
}

function isResultStatus(status) {
  const normalized = String(status || "").toUpperCase();
  return !["", "SCHEDULED", "TIMED", "STATUS_SCHEDULED", "PRE", "STATUS_FIRST_PITCH"].includes(normalized);
}

function formatScoreLine(match) {
  if (!match.score) return "";
  return `${match.score.home}-${match.score.away}`;
}

function formatChannelList(match) {
  return (match.channels?.length ? match.channels : [match.channel]).filter(Boolean).join(", ");
}

function formatSyncTime(date) {
  return new Intl.DateTimeFormat(getLocale(), {
    hour: "numeric",
    minute: "2-digit",
    timeZone: getDisplayTimeZone()
  }).format(new Date(date));
}

function getOptimalPath(team, paths) {
  return [
    {
      kicker: "Input",
      title: `${team.code} ${formatTeamPlain(team.name)}`,
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

function formatDate(date) {
  return `${formatMonthDay(date)} at ${formatTime(date)} ${getTimezoneLabel()}`;
}

function formatMonthDay(date) {
  return new Intl.DateTimeFormat(getLocale(), {
    month: "short",
    day: "numeric",
    timeZone: getDisplayTimeZone()
  }).format(new Date(date));
}

function formatTime(date) {
  return new Intl.DateTimeFormat(getLocale(), {
    hour: "numeric",
    minute: "2-digit",
    timeZone: getDisplayTimeZone()
  }).format(new Date(date));
}

function getLocale() {
  return navigator.language || "en-US";
}

function getDisplayTimeZone() {
  if (timezoneMode === "utc") return "UTC";
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
}

function getTimezoneLabel() {
  if (timezoneMode === "utc") return "UTC";
  const zone = getDisplayTimeZone();
  const shortName = new Intl.DateTimeFormat(getLocale(), {
    timeZone: zone,
    timeZoneName: "short"
  }).formatToParts(new Date()).find(part => part.type === "timeZoneName")?.value;
  return shortName || "Local";
}

function updateTimezoneLabels() {
  els.timezoneStat.textContent = getTimezoneLabel();
}

function updatePageTimestamp() {
  els.updatedStamp.textContent = `Updated: ${formatPageUpdatedTime(new Date())}`;
}

function formatPageUpdatedTime(date) {
  return new Intl.DateTimeFormat(getLocale(), {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  }).format(date);
}

function isCurrentOrFutureMatch(match) {
  return new Date(match.date).getTime() >= Date.now() - currentMatchWindowMs;
}

function isRemainingMatch(match) {
  return match.status !== "Final" && isCurrentOrFutureMatch(match);
}

function getMatchTimeStatus(match) {
  const start = new Date(match.date).getTime();
  const now = Date.now();
  if (match.status === "Live") return { key: "current", label: formatLiveClock(match) };
  if (match.status === "Final") return { key: "previous", label: match.statusDetail || "Final" };
  if (start < now - currentMatchWindowMs) return { key: "previous", label: "Previous" };
  if (start <= now) return { key: "current", label: "Started within 4h" };
  return { key: "upcoming", label: "Upcoming" };
}

function formatLiveClock(match) {
  return match.displayClock ? `Live ${match.displayClock}` : match.statusDetail || "Live";
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

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}
