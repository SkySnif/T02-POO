import { ITarif } from "../Tarif/ITarif";

export interface ISessionRechargeData 
{
    id: string;
    energieKwh: number;
    tarif: ITarif;
}