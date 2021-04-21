import { IRiotArg } from './interfaces';
export default class Riot {
    private key;
    private api;
    private region;
    constructor({ apiKey, region }: IRiotArg);
    getSummonerById(summonerName: string): Promise<any>;
}
