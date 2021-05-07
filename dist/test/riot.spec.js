"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe('node-riotapi', () => {
    const apiKey = 'RGAPI-d751d5f4-3199-4baa-9d77-c6a69c93afce';
    const lol = new __1.Lol({
        apiKey,
        region: 'kr',
    });
    const riot = new __1.Riot({
        apiKey,
        region: 'asia',
    });
    describe('Summoner-v4', () => {
        describe('summoner.getSummonerByName', () => {
            it('should be return summoner', () => __awaiter(void 0, void 0, void 0, function* () {
                const summonerInfo = yield lol.getSummonerByName('대덕sw마이스터고');
                expect(summonerInfo).toBeDefined();
                expect(summonerInfo.name).toBe('대덕SW마이스터고');
                expect(summonerInfo.profileIconId).toBe(23);
            }));
        });
        describe('summoner.getSummonerByAccount', () => {
            it('should be return summoner', () => __awaiter(void 0, void 0, void 0, function* () {
                const summonerInfo = yield lol.getSummonerByAccount('5S842iiXcGAN5T7xQMSskgrUhKBLX8Oz-n9hv492cTDBvZY');
                expect(summonerInfo).toBeDefined();
                expect(summonerInfo.name).toBe('대덕SW마이스터고');
                expect(summonerInfo.profileIconId).toBe(23);
            }));
        });
        describe('summoner.getSummonerByPuuid', () => {
            it('should be return summoner', () => __awaiter(void 0, void 0, void 0, function* () {
                const summonerInfo = yield lol.getSummonerByPuuid('SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q');
                expect(summonerInfo).toBeDefined();
                expect(summonerInfo.name).toBe('대덕SW마이스터고');
                expect(summonerInfo.profileIconId).toBe(23);
            }));
        });
        describe('summoner.getSummoner', () => {
            it('should be return summoner', () => __awaiter(void 0, void 0, void 0, function* () {
                const summonerInfo = yield lol.getSummoner('zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU');
                expect(summonerInfo).toBeDefined();
                expect(summonerInfo.name).toBe('대덕SW마이스터고');
                expect(summonerInfo.profileIconId).toBe(23);
            }));
        });
    });
    describe('Account-v1', () => {
        describe('account.getAccountByPuuid', () => {
            it('should be return account', () => __awaiter(void 0, void 0, void 0, function* () {
                const accountInfo = yield riot.getAccountByPuuid('SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q');
                expect(accountInfo).toBeDefined();
                expect(accountInfo.gameName).toBe('조물조물맨');
                expect(accountInfo.puuid).toBe('SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q');
                expect(accountInfo.tagLine).toBe('1002');
            }));
        });
        describe('account.getAccountByRiotId', () => {
            it('should be return account', () => __awaiter(void 0, void 0, void 0, function* () {
                const accountInfo = yield riot.getAccountByRiotId('조물조물맨', '1002');
                expect(accountInfo).toBeDefined();
                expect(accountInfo.gameName).toBe('조물조물맨');
                expect(accountInfo.puuid).toBe('SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q');
                expect(accountInfo.tagLine).toBe('1002');
            }));
        });
    });
    describe('Champion-mastery-v4', () => {
        describe('champion-mastery.getChampionMasteriesBySummoner', () => {
            it('should be return champion-mastery', () => __awaiter(void 0, void 0, void 0, function* () {
                const championMasteryInfo = yield lol.getChampionMasteriesBySummoner('zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU');
                expect(championMasteryInfo).toBeDefined();
                expect(championMasteryInfo).toBeInstanceOf(Array);
            }));
        });
        describe('champion-mastery.getChampionMasteriesBySummonerAndChampionId', () => {
            it('should be return champion-mastery', () => __awaiter(void 0, void 0, void 0, function* () {
                const championMasteryInfo = yield lol.getChampionMasteriesBySummonerAndChampionId('zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU', 245);
                expect(championMasteryInfo).toBeDefined();
                expect(championMasteryInfo).toBeInstanceOf(Object);
            }));
        });
        describe('champion-mastery.getChampionScoresBySumonner', () => {
            it('should be return champion-score', () => __awaiter(void 0, void 0, void 0, function* () {
                const championScoreInfo = yield lol.getChampionScoresBySumonner('zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU');
                expect(championScoreInfo).toBeDefined();
                expect(championScoreInfo).toBeGreaterThanOrEqual(290);
            }));
        });
    });
    describe('Champion-v3', () => {
        describe('champion-getChampionRotations', () => {
            it('should be return champion-rotations', () => __awaiter(void 0, void 0, void 0, function* () {
                const championRotationInfo = yield lol.getChampionRotations();
                expect(championRotationInfo).toBeDefined();
                expect(championRotationInfo.freeChampionIds).toBeInstanceOf(Array);
                expect(championRotationInfo.freeChampionIdsForNewPlayers).toBeInstanceOf(Array);
            }));
        });
    });
});
