import Riot from '../riot';

const riot = new Riot({
  apiKey: '',
});

async function getSummonerByName() {
  const summonerInfo = await riot.getSummonerByName('대덕sw마이스터고');
  console.log(summonerInfo);
}

getSummonerByName();
