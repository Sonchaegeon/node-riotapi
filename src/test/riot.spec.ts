import { Riot, Lol } from '..';

describe('node-riotapi', () => {
  const apiKey = (process.env.API_KEY as unknown) as string;

  const lol = new Lol({
    apiKey,
    region: 'kr',
  });

  const riot = new Riot({
    apiKey,
    region: 'asia',
  });

  describe('Summoner-v4', () => {
    describe('summoner.getSummonerByName', () => {
      it('should be return summoner', async () => {
        const summonerInfo = await lol.getSummonerByName('대덕sw마이스터고');
        expect(summonerInfo).toBeDefined();
        expect(summonerInfo.name).toBe('대덕SW마이스터고');
        expect(summonerInfo.profileIconId).toBe(23);
      });
    });

    describe('summoner.getSummonerByAccount', () => {
      it('should be return summoner', async () => {
        const summonerInfo = await lol.getSummonerByAccount(
          '5S842iiXcGAN5T7xQMSskgrUhKBLX8Oz-n9hv492cTDBvZY',
        );
        expect(summonerInfo).toBeDefined();
        expect(summonerInfo.name).toBe('대덕SW마이스터고');
        expect(summonerInfo.profileIconId).toBe(23);
      });
    });

    describe('summoner.getSummonerByPuuid', () => {
      it('should be return summoner', async () => {
        const summonerInfo = await lol.getSummonerByPuuid(
          'SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q',
        );
        expect(summonerInfo).toBeDefined();
        expect(summonerInfo.name).toBe('대덕SW마이스터고');
        expect(summonerInfo.profileIconId).toBe(23);
      });
    });

    describe('summoner.getSummoner', () => {
      it('should be return summoner', async () => {
        const summonerInfo = await lol.getSummoner(
          'zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU',
        );
        expect(summonerInfo).toBeDefined();
        expect(summonerInfo.name).toBe('대덕SW마이스터고');
        expect(summonerInfo.profileIconId).toBe(23);
      });
    });
  });

  describe('Account-v1', () => {
    describe('account.getAccountByPuuid', () => {
      it('should be return account', async () => {
        const accountInfo = await riot.getAccountByPuuid(
          'SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q',
        );
        expect(accountInfo).toBeDefined();
        expect(accountInfo.gameName).toBe('대덕SW마이스터고');
        expect(accountInfo.puuid).toBe(
          'SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q',
        );
        expect(accountInfo.tagLine).toBe('KR1');
      });
    });

    describe('account.getAccountByRiotId', () => {
      it('should be return account', async () => {
        const accountInfo = await riot.getAccountByRiotId(
          '대덕sw마이스터고',
          'KR1',
        );
        expect(accountInfo).toBeDefined();
        expect(accountInfo.gameName).toBe('대덕SW마이스터고');
        expect(accountInfo.puuid).toBe(
          'SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q',
        );
        expect(accountInfo.tagLine).toBe('KR1');
      });
    });
  });

  describe('Champion-mastery-v4', () => {
    describe('champion-mastery.getChampionMasteriesBySummoner', () => {
      it('should be return champion-mastery', async () => {
        const championMasteryInfo = await lol.getChampionMasteriesBySummoner(
          'zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU',
        );
        expect(championMasteryInfo).toBeDefined();
        expect(championMasteryInfo).toBeInstanceOf(Array);
      });
    });

    describe('champion-mastery.getChampionMasteriesBySummonerAndChampionId', () => {
      it('should be return champion-mastery', async () => {
        const championMasteryInfo = await lol.getChampionMasteriesBySummonerAndChampionId(
          'zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU',
          245,
        );
        expect(championMasteryInfo).toBeDefined();
        expect(championMasteryInfo).toBeInstanceOf(Object);
      });
    });
  });
});
