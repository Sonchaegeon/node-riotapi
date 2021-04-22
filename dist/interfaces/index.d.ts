declare type ContinentRegion = 'asia' | 'americas' | 'esports' | 'europe';
declare type Region = 'br1' | 'eun1' | 'euw1' | 'kr' | 'jp1' | 'la1' | 'la2' | 'na1' | 'oc1' | 'ru' | 'tr1';
interface IRiotArg {
    apiKey: string;
    region: ContinentRegion;
}
interface ILolArg {
    apiKey: string;
    region: Region;
}
export { IRiotArg, ILolArg };
