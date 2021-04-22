import Riot from '../riot';

describe('node-riotapi', () => {
  const riot = new Riot({
    apiKey: '',
  });

  describe('summoner.getSummonerByName', () => {
    it('should be return summoner', async () => {
      const summonerInfo = await riot.getSummonerByName('대덕sw마이스터고');
      expect(summonerInfo).toBeDefined();
      expect(summonerInfo.name).toBe('대덕SW마이스터고');
      expect(summonerInfo.profileIconId).toBe(23);
    });
  });
});
