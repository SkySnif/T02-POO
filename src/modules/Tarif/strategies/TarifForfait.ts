import type { ITarifData } from "../interfaces/index.js";
import type { ISessionRechargeData } from '#/modules/SessionRecharge/interfaces/entities/ISessionRechargeData.js';

import { TarifBase } from "./TarifBase.js";

export class TarifForfait extends TarifBase {
    constructor(tarifData: ITarifData) {
        super(tarifData);
    }


    public calculerCout(s: ISessionRechargeData): number {
        return this.getMontant(s);
    }
}