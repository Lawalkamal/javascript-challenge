const teamDolphin = 96 + 108 + 89;
const teamKoala = 88 + 91 + 100

const scoreDolphin =  teamDolphin / 3;
const scoreKoala = teamKoala / 3;

if (scoreDolphin > scoreKoala) {
  console.log (`Dolphins win the trophy`);
} else if (scoreKoala > scoreDolphin) {
  console.log (`Koalas win the trophy`);
} else if (scoreKoala === scoreDolphin) {
  console.log (`Both team wins`)
}