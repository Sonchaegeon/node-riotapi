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
const apiKey = 'RGAPI-d751d5f4-3199-4baa-9d77-c6a69c93afce';
const riot = new __1.Riot({
    apiKey,
    region: 'asia',
});
const lol = new __1.Lol({
    apiKey,
    region: 'kr',
});
// Summoner
function getSummonerByName() {
    return __awaiter(this, void 0, void 0, function* () {
        const summonerInfo = yield lol.getSummonerByName('대덕sw마이스터고');
        console.log(summonerInfo);
    });
}
function getSummonerByAccount() {
    return __awaiter(this, void 0, void 0, function* () {
        const summonerInfo = yield lol.getSummonerByAccount('5S842iiXcGAN5T7xQMSskgrUhKBLX8Oz-n9hv492cTDBvZY');
        console.log(summonerInfo);
    });
}
function getSummonerByPuuid() {
    return __awaiter(this, void 0, void 0, function* () {
        const summonerInfo = yield lol.getSummonerByPuuid('SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q');
        console.log(summonerInfo);
    });
}
function getSummoner() {
    return __awaiter(this, void 0, void 0, function* () {
        const summonerInfo = yield lol.getSummoner('zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU');
        console.log(summonerInfo);
    });
}
// Account
function getAccountByPuuid() {
    return __awaiter(this, void 0, void 0, function* () {
        const accountInfo = yield riot.getAccountByPuuid('SHNBy0tWOTMK5Z0TBLcZ4y9HVkitJejOzVo_uVeqXQPomBjWKu3NIiekWAF59nBGQiTBK9xp8fYR7Q');
        console.log(accountInfo);
    });
}
function getAccountByRiotId() {
    return __awaiter(this, void 0, void 0, function* () {
        const accountInfo = yield riot.getAccountByRiotId('대덕sw마이스터고', 'KR1');
        console.log(accountInfo);
    });
}
// Champion-mastery
function getChampionMasteriesBySummoner() {
    return __awaiter(this, void 0, void 0, function* () {
        const championMasteryInfo = yield lol.getChampionMasteriesBySummoner('zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU');
        console.log(championMasteryInfo);
    });
}
function getChampionMasteriesBySummonerAndChampionId() {
    return __awaiter(this, void 0, void 0, function* () {
        const championMasteryInfo = yield lol.getChampionMasteriesBySummonerAndChampionId('zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU', 245);
        console.log(championMasteryInfo);
    });
}
function getChampionScoresBySumonner() {
    return __awaiter(this, void 0, void 0, function* () {
        const championMasteryInfo = yield lol.getChampionScoresBySumonner('zTzeGkZR7C9RwzW_9xVMC2068P3HKJManaUwgZVisQ1iBBU');
        console.log(championMasteryInfo);
    });
}
// Champion-v3
function getChampionRotations() {
    return __awaiter(this, void 0, void 0, function* () {
        const championRotationInfo = yield lol.getChampionRotations();
        console.log(championRotationInfo);
    });
}
getChampionRotations();
