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
class Riot {
    constructor({ apiKey, region }) {
        this.key = apiKey;
        this.region = region;
        this.api = axios_1.default.create({
            baseURL: 'https://kr.api.riotgames.com',
            params: { api_key: apiKey },
        });
    }
    getSummonersById(summonerName) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.api.get(`/lol/summoner/v4/summoners/by-name/${summonerName}`);
            return data;
        });
    }
}
exports.default = Riot;
//# sourceMappingURL=riot.js.map