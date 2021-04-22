# node-riotapi

> 본 라이브러리는 Node.js 환경에서 이용할 수 있는 Riot 오픈 API 라이브러리입니다.

[![Latest Stable Version](https://img.shields.io/npm/v/node-riotapi.svg)](https://www.npmjs.com/package/node-riotapi) [![License](https://img.shields.io/npm/l/node-riotapi.svg)](https://www.npmjs.com/package/node-riotapi) [![NPM Downloads](https://img.shields.io/npm/dt/node-riotapi.svg)](https://www.npmjs.com/package/node-riotapi)

## 설치

```bash
npm install node-riotapi
```

[API key](https://developer.riotgames.com/)가 필요합니다!

## 지역

| PLATFORM |          HOST          |  REGION  |            HOST            |
| :------: | :--------------------: | :------: | :------------------------: |
|    BR    | br1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|   EUN    | eun1.api.riotgames.com |   ASIA   |   asia.api.riotgames.com   |
|   EUW    | euw1.api.riotgames.com |  EUROPE  |  europe.api.riotgames.com  |
|    JP    | jp1.api.riotgames.com  |
|    KR    |  kr.api.riotgames.com  |
|   LAN    | la1.api.riotgames.com  |
|   LAS    | la2.api.riotgames.com  |
|    NA    | na1.api.riotgames.com  |
|   OCE    | oc1.api.riotgames.com  |
|    TR    | tr1.api.riotgames.com  |
|    RU    |  ru.api.riotgames.com  |

## 예시

```typescript
import { Lol } from 'node-riotapi';

const lol = new Lol({ apiKey: 'API key를 넣어주세요!', region: 'kr' });

async function getSummonerByName() {
  const summonerInfo = await lol.getSummonerByName('대덕sw마이스터고');
  console.log(summonerInfo);
}

getSummonerByName();
```
