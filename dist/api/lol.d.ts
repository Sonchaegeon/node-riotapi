import { ILolArg } from '../interfaces';
import { IGetChampionMasteries } from '../interfaces/response/champion-mastery-v4';
import { IGetChampionRotations } from '../interfaces/response/champion-v3';
import { IGetSummoners } from '../interfaces/response/summoner-v4';
export default class Lol {
    private api;
    constructor({ apiKey, region }: ILolArg);
    getSummonerByName(summonerName: string): Promise<IGetSummoners>;
    getSummonerByAccount(encryptedAccountId: string): Promise<IGetSummoners>;
    getSummonerByPuuid(encryptedPUUID: string): Promise<IGetSummoners>;
    getSummoner(encryptedSummonerId: string): Promise<IGetSummoners>;
    getChampionMasteriesBySummoner(encryptedSummonerId: string): Promise<IGetChampionMasteries[]>;
    getChampionMasteriesBySummonerAndChampionId(encryptedSummonerId: string, championId: number): Promise<IGetChampionMasteries>;
    getChampionScoresBySumonner(encryptedSummonerId: string): Promise<number>;
    getChampionRotations(): Promise<IGetChampionRotations>;
}
