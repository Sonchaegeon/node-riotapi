import { ILolArg } from '../interfaces';
import { IGetSummoners } from '../interfaces/response/summoner-v4';
export default class Lol {
    private api;
    constructor({ apiKey, region }: ILolArg);
    getSummonerByName(summonerName: string): Promise<IGetSummoners>;
    getSummonerByAccount(encryptedAccountId: string): Promise<IGetSummoners>;
    getSummonerByPuuid(encryptedPUUID: string): Promise<IGetSummoners>;
    getSummoner(encryptedSummonerId: string): Promise<IGetSummoners>;
}
