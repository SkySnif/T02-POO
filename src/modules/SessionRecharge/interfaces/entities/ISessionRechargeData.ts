import type { ITarif } from "../../Tarif/interfaces/entities/ITarif.js";
import type { IBaseEntityData } from "../../../shared/Domain/interfaces/IBaseEntityData.js";

export interface ISessionRechargeData extends IBaseEntityData
{
    energieKwh: number;
    tarif?: ITarif;
    heureChargement?: Date;
}