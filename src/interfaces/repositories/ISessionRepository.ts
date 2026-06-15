import { ISessionRechargeData } from "../entities/SessionRecharge/ISessionRechargeData";

export interface ISessionRepository
{
    enregistrer(s: ISessionRechargeData): void;
    tousParBorne( idBorne: number): ISessionRechargeData[];
}