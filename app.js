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
    best,
    ranking,
    group,
    seed: seed + 1,
    rankBias: seed + index * 0.01
  }))
);

const teamByName = Object.fromEntries(allTeams.map(team => [team.name, team]));

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
let selectedTeam = "United States";
let stageFilter = "all";
let searchTerm = "";
let selectedTeamOnly = false;
let scheduleSortMode = "date";
let teamSortMode = "az";
let showPreviousGames = false;
let scheduleVisibleCount = 15;
let scoreSyncStatus = "Scores pending refresh API";
let timezoneMode = localStorage.getItem("timezoneMode") || "local";
let stadiumLeafletMap = null;
let stadiumMarkersLayer = null;
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
  sort: document.querySelector("#sortSelect"),
  timezone: document.querySelector("#timezoneSelect"),
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
  stadiumMap: document.querySelector("#stadiumMap"),
  stadiumMapNote: document.querySelector("#stadiumMapNote")
};

init();

function init() {
  document.documentElement.lang = navigator.language || "en";
  updatePageTimestamp();
  els.select.innerHTML = [...allTeams]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(team => `<option value="${team.name}">${team.code} - ${team.name} - FIFA #${team.ranking}</option>`)
    .join("");
  els.select.value = selectedTeam;
  els.timezone.value = timezoneMode;

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
  refreshScores();
}

function switchView(view) {
  document.querySelectorAll(".tab").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  document.querySelectorAll(".view").forEach(section => section.classList.toggle("active", section.id === `${view}View`));
}

function renderAll() {
  updateTimezoneLabels();
  renderFocus();
  renderSchedule();
  renderGroups();
  renderPath();
  renderTeams();
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
      <h2>${team.name}</h2>
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
    const timeOk = showPreviousGames || isCurrentOrFutureMatch(match);
    return stageOk && teamOk && timeOk && (!searchTerm || searchable.includes(searchTerm));
  }).sort(compareMatches);

  const visible = filtered.slice(0, scheduleVisibleCount);
  const hiddenCount = Math.max(filtered.length - visible.length, 0);
  els.scheduleCount.textContent = `Showing ${visible.length} of ${filtered.length} filtered matches (${matches.length} total) - ${scoreSyncStatus}`;
  updateShowMoreControls(hiddenCount);
  renderStadiumMap(filtered);

  if (!filtered.length) {
    els.matchList.innerHTML = `<div class="empty">No matches match the current filter.</div>`;
    return;
  }

  els.matchList.innerHTML = visible.map(match => {
    const teamLine = match.teams.map(name => {
      const team = teamByName[name];
      if (!team) return `<span>${name}</span>`;
      return `<span class="team-chip" data-tip="${escapeAttr(`${team.name}: FIFA #${team.ranking}. ${team.best}. Group ${team.group}.`)}"><span class="inline-code">${team.code}</span> ${team.name}</span>`;
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
        </div>
        <div class="match-actions">
          ${scoreLine ? `<span class="score-pill">${scoreLine}</span>` : ""}
          <span class="channel" data-tip="${escapeAttr(`ESPN listed channels: ${formatChannelList(match)}`)}">${match.channel}</span>
          <button class="details-toggle" aria-label="Toggle match details">+</button>
        </div>
        <div class="match-detail">
          <div class="detail-box"><b>Broadcast</b>Primary: ${match.channel}. ESPN listed: ${formatChannelList(match)}.</div>
          <div class="detail-box"><b>Score source</b>${match.scoreUpdatedAt ? `Updated from external API at ${formatSyncTime(match.scoreUpdatedAt)}.` : "No live score returned for this fixture yet."}</div>
          <div class="detail-box"><b>Stage impact</b>${match.impact}</div>
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
  return `${formatMonthDay(match.date)} ${formatTime(match.date)} - ${match.teams.join(" vs ")} at ${getTimezoneLabel()}`;
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
                <td><span class="team-chip" data-tip="${escapeAttr(`${row.name}: FIFA #${row.ranking}. ${row.best}`)}"><span class="inline-code">${row.code}</span> ${row.name}</span></td>
                <td>${row.ranking}</td><td>${row.played}</td><td>${row.won}</td><td>${row.drawn}</td><td>${row.lost}</td><td>${row.gd}</td><td><b>${row.points}</b></td><td><span class="mini-status ${row.status.key}">${row.status.short}</span></td>
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
  const status = getTeamStatus(team.name);
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
    <h2>${team.code} ${team.name}</h2>
      <div class="pill-row">
        <span class="pill">Current: ${standing.rankLabel}</span>
        <span class="pill">FIFA #${team.ranking}</span>
        <span class="pill status-pill ${status.key}">${status.label}</span>
        <span class="pill">${team.best}</span>
      </div>
    <div class="route-steps">
      ${status.key === "eliminated" ? `<div class="route-step eliminated"><b>Eliminated</b><span>${team.name}'s path is closed based on the available score data.</span></div>` : ""}
      <div class="route-step"><b>Optimal path</b><span>Win Group ${team.group}, avoid third-place uncertainty, and enter the Round of 32 through the cleanest bracket slot.</span></div>
      <div class="route-step"><b>Group target</b><span>Finish top two for automatic Round of 32 entry. Third place can still advance if ranked among the best eight third-place teams.</span></div>
      <div class="route-step"><b>Remaining group games</b><span>${teamMatches.map(match => `${formatMonthDay(match.date)} ${formatTime(match.date)} vs ${match.teams.find(name => name !== team.name)}`).join("; ")}</span></div>
    </div>
  `;

  els.bracket.innerHTML = `
    <div class="path-workbench ${status.key}" aria-label="${team.name} route flow">
      <div class="workbench-bar">
        <span class="traffic-dot blue"></span>
        <span class="traffic-dot gold"></span>
        <span class="traffic-dot green"></span>
        <span class="workbench-title">path/${team.id}.cup-route</span>
        <span class="workbench-badge ${status.key}">${status.key === "eliminated" ? "Path closed" : `Optimal: Group winner - ${status.label}`}</span>
      </div>
      <div class="flow-grid">
        ${optimal.map((node, index) => `
          <section class="flow-stage ${index === 1 ? "decision-stage" : ""}">
            <div class="path-node ${node.tone} ${status.key}">
              <span class="node-kicker">${node.kicker}</span>
              <b>${node.title}</b>
              <p>${node.text}</p>
              <span class="node-meta">${status.key === "eliminated" ? "Closed" : node.meta}</span>
            </div>
            ${index === 1 ? `
              <div class="branch-stack">
                ${branches.map(branch => `
                  <div class="path-node ${branch.tone} ${status.key}">
                    <span class="node-kicker">${branch.status}</span>
                    <b>${branch.label}</b>
                    <p>${branch.text}</p>
                    <span class="node-meta">${status.key === "eliminated" ? "Closed" : "Diverges from optimal group-winner route"}</span>
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
    const status = getTeamStatus(team.name);
    return `
      <article class="team-card ${status.key}" data-tip="${escapeAttr(`${team.name}: ${status.label}. FIFA #${team.ranking}. ${team.best}. Select this team to highlight its path.`)}">
        <div class="flag code-badge">${team.code}</div>
        <h3>${team.name}</h3>
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
      const name = card.querySelector("h3").textContent;
      selectedTeam = name;
      els.select.value = name;
      renderAll();
    });
  });
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

function getStandings(group) {
  const rows = groups[group].map(([name, code, best, ranking], index) => ({
      name,
      code,
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
      const home = rowByName[homeName];
      const away = rowByName[awayName];
      if (!home || !away) return;
      const homeGoals = Number(match.score.home);
      const awayGoals = Number(match.score.away);
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

function getRawGroupStandings(group) {
  const rows = groups[group].map(([name, code, best, ranking], index) => ({
    name,
    code,
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
  getGroupMatches(group).filter(hasResultScore).forEach(match => {
    const [homeName, awayName] = match.teams;
    const home = rowByName[homeName];
    const away = rowByName[awayName];
    if (!home || !away) return;
    const homeGoals = Number(match.score.home);
    const awayGoals = Number(match.score.away);
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
  });
  rows.forEach(row => row.gd = row.gf - row.ga);
  return rows.sort(compareStandingTableRows).map((row, index) => ({ ...row, rank: index + 1 }));
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
    renderSchedule();
    const updates = await fetchScoreUpdates();
    const result = applyScoreUpdates(updates);
    scoreSyncStatus = formatScoreSyncStatus(result);
  } catch (error) {
    scoreSyncStatus = "Scores unavailable";
    console.warn("Score refresh failed:", error);
  }
  renderAll();
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
  return normalizeEspnScores(payload);
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
      homeScore: hasResult ? home?.score : null,
      awayScore: hasResult ? away?.score : null,
      status,
      updatedAt: new Date().toISOString()
    };
  });
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
  if (!update.date || !isKnownTeamName(update.homeTeam) || !isKnownTeamName(update.awayTeam)) return null;
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
  if (!isKnownTeamName(update.homeTeam) || !isKnownTeamName(update.awayTeam)) return false;
  const teams = [canonicalTeamName(update.homeTeam), canonicalTeamName(update.awayTeam)];
  if (!hasPlaceholderTeam(match) && match.teams.every((team, index) => team === teams[index])) return false;
  if (!hasPlaceholderTeam(match) && !teamsMatchIgnoringOrder(match.teams, teams)) return false;
  match.teams = teams;
  match.note = match.stage === "Group" ? buildMatchContext(teams, match.group) : "Fixture teams updated from the external API as the bracket was resolved.";
  return true;
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
      title: `${team.code} ${team.name}`,
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
