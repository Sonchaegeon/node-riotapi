import Riot from '../riot';

const riot = new Riot({
  apiKey: 'RGAPI-7d85968f-3386-481d-a88e-33cebb64130a',
});

async function getSummonerByName() {
  const summonerInfo = await riot.getSummonerByName('대덕sw마이스터고');
  console.log(summonerInfo);
}

async function getSummonerByAccount() {
  const summonerInfo = await riot.getSummonerByAccount(
    '5S842iiXcGAN5T7xQMSskgrUhKBLX8Oz-n9hv492cTDBvZY',
  );
  console.log(summonerInfo);
}

getSummonerByAccount();
