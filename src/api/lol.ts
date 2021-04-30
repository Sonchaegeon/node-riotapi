import axios, { AxiosInstance } from 'axios';
import { ILolArg } from '../interfaces';
import { IGetChampionMasteries } from '../interfaces/response/champion-mastery-v4';
import { IGetSummoners } from '../interfaces/response/summoner-v4';

export default class Lol {
  private api: AxiosInstance;

  constructor({ apiKey, region }: ILolArg) {
    this.api = axios.create({
      baseURL: `https://${region}.api.riotgames.com`,
      params: { api_key: apiKey },
    });
  }

  // Summoner-v4
  public async getSummonerByName(summonerName: string): Promise<IGetSummoners> {
    const { data } = await this.api.get(
      `/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}`,
    );
    return data;
  }

  public async getSummonerByAccount(
    encryptedAccountId: string,
  ): Promise<IGetSummoners> {
    const { data } = await this.api.get(
      `/lol/summoner/v4/summoners/by-account/${encryptedAccountId}`,
    );
    return data;
  }

  public async getSummonerByPuuid(
    encryptedPUUID: string,
  ): Promise<IGetSummoners> {
    const { data } = await this.api.get(
      `/lol/summoner/v4/summoners/by-puuid/${encryptedPUUID}`,
    );
    return data;
  }

  public async getSummoner(
    encryptedSummonerId: string,
  ): Promise<IGetSummoners> {
    const { data } = await this.api.get(
      `/lol/summoner/v4/summoners/${encryptedSummonerId}`,
    );
    return data;
  }

  // Champion-mastery-v4
  public async getChampionMasteriesBySummoner(
    encryptedSummonerId: string,
  ): Promise<IGetChampionMasteries[]> {
    const { data } = await this.api.get(
      `/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}`,
    );
    return data;
  }
}
