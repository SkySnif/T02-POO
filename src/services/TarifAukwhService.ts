import { ITarif } from "../interfaces/entities/Tarif/ITarif";
import { ISessionRechargeData } from "../interfaces/entities/SessionRecharge/ISessionRechargeData";

export class TarifAukwhService implements ITarif {
    private readonly prixParKwk;

    public constructor(prixParKwk: number) {
        this.prixParKwk = prixParKwk;
    }

    public calculerCout( s: ISessionRechargeData): number {
        console.log(`Calcul du coût de la session de recharge au kwh la session : ${s.id} - cout du kwh : ${this.prixParKwk} - energie consommée : ${s.energieKwh}`);
        return s.energieKwh * this.prixParKwk;
    }
}