import axios, { AxiosInstance } from 'axios';
import { IRiotArg } from './interfaces';
import { IGetSummonersByNameRes } from './interfaces/response/summoner-v4';

export default class Riot {
  private api: AxiosInstance;

  constructor({ apiKey }: IRiotArg) {
    this.api = axios.create({
      baseURL: 'https://kr.api.riotgames.com',
      params: { api_key: apiKey },
    });
  }

  public async getSummonerByName(
    summonerName: string,
  ): Promise<IGetSummonersByNameRes> {
    const { data } = await this.api.get(
      `/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}`,
    );
    return data;
  }
}
