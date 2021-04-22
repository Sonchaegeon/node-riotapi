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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Lol {
    constructor({ apiKey, region }) {
        this.api = axios_1.default.create({
            baseURL: `https://${region}.api.riotgames.com`,
            params: { api_key: apiKey },
        });
    }
    // Summoner-v4
    getSummonerByName(summonerName) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.api.get(`/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}`);
            return data;
        });
    }
    getSummonerByAccount(encryptedAccountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.api.get(`/lol/summoner/v4/summoners/by-account/${encryptedAccountId}`);
            return data;
        });
    }
    getSummonerByPuuid(encryptedPUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.api.get(`/lol/summoner/v4/summoners/by-puuid/${encryptedPUUID}`);
            return data;
        });
    }
    getSummoner(encryptedSummonerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.api.get(`/lol/summoner/v4/summoners/${encryptedSummonerId}`);
            return data;
        });
    }
}
exports.default = Lol;
