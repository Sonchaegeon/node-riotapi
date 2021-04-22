import Riot from '../riot';

describe('node-riotapi', () => {
  const riot = new Riot({
    apiKey: 'RGAPI-7d85968f-3386-481d-a88e-33cebb64130a',
  });

  describe('summoner.getSummonerByName', () => {
    it('should be return summoner', async () => {
      const summonerInfo = await riot.getSummonerByName('대덕sw마이스터고');
      expect(summonerInfo).toBeDefined();
      expect(summonerInfo.name).toBe('대덕SW마이스터고');
      expect(summonerInfo.profileIconId).toBe(23);
    });
  });

  describe('summoner.getSummonerByAccount', () => {
    it('should be return summoner', async () => {
      const summonerInfo = await riot.getSummonerByAccount(
        '5S842iiXcGAN5T7xQMSskgrUhKBLX8Oz-n9hv492cTDBvZY',
      );
      expect(summonerInfo).toBeDefined();
      expect(summonerInfo.name).toBe('대덕SW마이스터고');
      expect(summonerInfo.profileIconId).toBe(23);
    });
  });

  describe('summoner.getSummonerByPuuid', () => {
    it('should be return summoner', async () => {
      const summonerInfo = await riot.getSummonerByPuuid(
        'SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q',
      );
      expect(summonerInfo).toBeDefined();
      expect(summonerInfo.name).toBe('대덕SW마이스터고');
      expect(summonerInfo.profileIconId).toBe(23);
    });
  });
});
