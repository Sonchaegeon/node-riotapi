import { Riot, Lol } from '..';

const apiKey = 'RGAPI-9401e89e-758b-4c52-9a6b-7e2de0758e25';

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

getSummonerByName();
getAccountByPuuid();
