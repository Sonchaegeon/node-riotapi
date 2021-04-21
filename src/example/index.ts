import Riot from '../riot';

const riot = new Riot({
  apiKey: '',
  region: 'KR',
});

async function getSummonerById() {
  const summonerInfo = await riot.getSummonerById('hide on bush');
  console.log(summonerInfo);
}

getSummonerById();
