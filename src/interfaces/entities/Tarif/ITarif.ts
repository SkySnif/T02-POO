import { ISessionRechargeData } from "../SessionRecharge/ISessionRechargeData";


export interface ITarif
{
    calculerCout(s: ISessionRechargeData): number
}
