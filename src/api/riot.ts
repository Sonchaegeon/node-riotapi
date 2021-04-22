import axios, { AxiosInstance } from 'axios';
import { IRiotArg } from '../interfaces';
import { IGetAccounts } from '../interfaces/response/account-v1';

export default class Riot {
  private api: AxiosInstance;

  constructor({ apiKey, region }: IRiotArg) {
    this.api = axios.create({
      baseURL: `https://${region}.api.riotgames.com`,
      params: { api_key: apiKey },
    });
  }

  // Account-v1
  public async getAccountByPuuid(puuid: string): Promise<IGetAccounts> {
    const { data } = await this.api.get(
      `/riot/account/v1/accounts/by-puuid/${puuid}`,
    );
    return data;
  }
}
