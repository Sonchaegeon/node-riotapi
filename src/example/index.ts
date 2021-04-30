import { Riot, Lol } from '..';

const apiKey = (process.env.API_KEY as unknown) as string;

const riot = new Riot({
  apiKey,
  region: 'asia',
});

const lol = new Lol({
  apiKey,
  region: 'kr',
});

// Summoner
async function getSummonerByName() {
  const summonerInfo = await lol.getSummonerByName('대덕sw마이스터고');
  console.log(summonerInfo);
}

async function getSummonerByAccount() {
  const summonerInfo = await lol.getSummonerByAccount(
    '5S842iiXcGAN5T7xQMSskgrUhKBLX8Oz-n9hv492cTDBvZY',
  );
  console.log(summonerInfo);
}

async function getSummonerByPuuid() {
  const summonerInfo = await lol.getSummonerByPuuid(
    'SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q',
  );
  console.log(summonerInfo);
}

async function getSummoner() {
  const summonerInfo = await lol.getSummoner(
    'zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU',
  );
  console.log(summonerInfo);
}

// Account
async function getAccountByPuuid() {
  const accountInfo = await riot.getAccountByPuuid(
    'SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q',
  );
  console.log(accountInfo);
}

async function getAccountByRiotId() {
  const accountInfo = await riot.getAccountByRiotId('대덕sw마이스터고', 'KR1');
  console.log(accountInfo);
}

// Champion-mastery
async function getChampionMasteriesBySummoner() {
  const championMasteryInfo = await lol.getChampionMasteriesBySummoner(
    'zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU',
  );
  console.log(championMasteryInfo);
}

async function getChampionMasteriesBySummonerAndChampionId() {
  const championMasteryInfo = await lol.getChampionMasteriesBySummonerAndChampionId(
    'zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU',
    245,
  );
  console.log(championMasteryInfo);
}

getChampionMasteriesBySummonerAndChampionId();
