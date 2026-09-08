import type { ITarifData } from "../interfaces/index.js";
import type { ISessionRechargeData } from '#/modules/SessionRecharge/interfaces/entities/ISessionRechargeData.js';

import { TarifBase } from "./TarifBase.js";

export class TarifAukwh extends TarifBase {
    constructor(tarifData: ITarifData) {
        super(tarifData);
    }

    public calculerCout(s: ISessionRechargeData): number {
        const prix = this.getMontant(s);
        return s.energieKwh * prix;
    }
}