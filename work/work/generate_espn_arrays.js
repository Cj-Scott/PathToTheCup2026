const fs = require("fs");

const data = JSON.parse(fs.readFileSync("work/espn-scoreboard.json", "utf8"));
const groups = {
  A: ["Mexico", "South Africa", "South Korea", "Czechia"],
  B: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"],
  C: ["Brazil", "Morocco", "Haiti", "Scotland"],
  D: ["United States", "Paraguay", "Australia", "Turkey"],
  E: ["Germany", "Curacao", "Ivory Coast", "Ecuador"],
  F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
  G: ["Belgium", "Egypt", "Iran", "New Zealand"],
  H: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
  I: ["France", "Senegal", "Iraq", "Norway"],
  J: ["Argentina", "Algeria", "Austria", "Jordan"],
  K: ["Portugal", "DR Congo", "Uzbekistan", "Colombia"],
  L: ["England", "Croatia", "Ghana", "Panama"]
};
const groupByTeam = {};
Object.entries(groups).forEach(([group, teams]) => {
  teams.forEach(team => {
    groupByTeam[team] = group;
  });
});
const aliases = {
  "Bosnia-Herzegovina": "Bosnia and Herzegovina",
  "Congo DR": "DR Congo",
  "Curaçao": "Curacao",
  "Türkiye": "Turkey"
};
const canon = name => aliases[name] || name;
const quote = value => JSON.stringify(value);

function getVenue(event) {
  const venue = event.competitions[0].venue;
  const city = venue.address?.city;
  const country = venue.address?.country;
  return `${venue.fullName}${city ? ` - ${city}${country ? `, ${country}` : ""}` : ""}`;
}

function getChannels(event) {
  return event.competitions[0].broadcasts?.flatMap(broadcast => broadcast.names || []) || [];
}

function getTeams(event) {
  const competitors = event.competitions[0].competitors;
  return [
    canon(competitors.find(team => team.homeAway === "home")?.team.displayName),
    canon(competitors.find(team => team.homeAway === "away")?.team.displayName)
  ];
}

function getRound(index) {
  if (index < 16) return "Round of 32";
  if (index < 24) return "Round of 16";
  if (index < 28) return "Quarter-final";
  if (index < 30) return "Semi-final";
  if (index === 30) return "Third-place match";
  return "Final";
}

let output = "const officialGroupFixtures = [\n";
data.events.slice(0, 72).forEach((event, index) => {
  const [home, away] = getTeams(event);
  const channels = getChannels(event);
  const group = groupByTeam[home] || groupByTeam[away];
  const date = new Date(event.date).toISOString().replace(".000Z", "Z");
  output += `  [${quote(group)}, ${quote(home)}, ${quote(away)}, ${quote(date)}, ${quote(channels[0])}, ${quote(getVenue(event))}, ${JSON.stringify(channels)}]${index === 71 ? "" : ","}\n`;
});
output += "];\n\nconst knockoutScheduleUtc = [\n";
data.events.slice(72).forEach((event, index) => {
  const [home, away] = getTeams(event);
  const channels = getChannels(event);
  const date = new Date(event.date).toISOString().replace(".000Z", "Z");
  output += `  [${quote(getRound(index))}, ${quote(date)}, ${quote(channels[0])}, ${quote(getVenue(event))}, ${JSON.stringify(channels)}, ${quote(home)}, ${quote(away)}]${index === 31 ? "" : ","}\n`;
});
output += "];";

process.stdout.write(output);
