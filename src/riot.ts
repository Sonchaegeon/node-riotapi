import axios, { AxiosInstance } from 'axios';
import { IRiotArg } from './interfaces';

export default class Riot {
  private key: string;
  private api: AxiosInstance;
  private region: string;

  constructor({ apiKey, region }: IRiotArg) {
    this.key = apiKey;
    this.region = region;
    this.api = axios.create({
      baseURL: 'https://kr.api.riotgames.com',
      params: { api_key: apiKey },
    });
  }

  public async getSummonersById(summonerName: string) {
    const { data } = await this.api.get(
      `/lol/summoner/v4/summoners/by-name/${summonerName}`,
    );
    return data;
  }
}
