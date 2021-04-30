import { IRiotArg } from '../interfaces';
import { IGetAccounts } from '../interfaces/response/account-v1';
export default class Riot {
    private api;
    constructor({ apiKey, region }: IRiotArg);
    getAccountByPuuid(puuid: string): Promise<IGetAccounts>;
    getAccountByRiotId(gameName: string, tagLine: string): Promise<IGetAccounts>;
}
