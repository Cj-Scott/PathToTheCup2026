const fs = require("fs");

const app = fs.readFileSync("app.js", "utf8");
const espn = JSON.parse(fs.readFileSync("work/espn-scoreboard.json", "utf8")).events;
const officialGroupFixtures = Function(`return ${app.match(/const officialGroupFixtures = (\[[\s\S]*?\]);/)[1]}`)();
const knockoutScheduleUtc = Function(`return ${app.match(/const knockoutScheduleUtc = (\[[\s\S]*?\]);/)[1]}`)();

const aliases = {
  "Bosnia-Herzegovina": "Bosnia and Herzegovina",
  "Congo DR": "DR Congo",
  "Curaçao": "Curacao",
  "Türkiye": "Turkey"
};
const canon = name => aliases[name] || name;
const iso = date => new Date(date).toISOString();

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

const appMatches = officialGroupFixtures.map(item => ({
  date: item[3],
  teams: [item[1], item[2]],
  channel: item[4],
  venue: item[5],
  channels: item[6]
})).concat(knockoutScheduleUtc.map(item => ({
  date: item[1],
  teams: [item[5], item[6]],
  channel: item[2],
  venue: item[3],
  channels: item[4]
})));

const mismatches = [];
appMatches.forEach((match, index) => {
  const event = espn[index];
  const expected = {
    date: iso(event.date),
    teams: getTeams(event),
    channel: getChannels(event)[0],
    venue: getVenue(event),
    channels: getChannels(event)
  };
  const actual = {
    date: iso(match.date),
    teams: match.teams,
    channel: match.channel,
    venue: match.venue,
    channels: match.channels
  };
  Object.keys(expected).forEach(key => {
    if (JSON.stringify(actual[key]) !== JSON.stringify(expected[key])) {
      mismatches.push({
        match: index + 1,
        field: key,
        app: actual[key],
        espn: expected[key],
        espnName: event.name
      });
    }
  });
});

console.log(JSON.stringify({
  appTotal: appMatches.length,
  espnTotal: espn.length,
  mismatches
}, null, 2));
