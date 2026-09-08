import type { ISessionRechargeData } from "./ISessionRechargeData";

export interface ISessionRechargeDataListResult {
  sessionRecharges: ISessionRepository[];
  total: number;
}

export interface ISessionRepository
{
    enregistrer(s: ISessionRechargeData): void;
    tousParBorne( idBorne: string): ISessionRechargeData[];
}