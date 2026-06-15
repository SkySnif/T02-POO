import { ITarif } from "../interfaces/entities/Tarif/ITarif";
import { ISessionRechargeData } from "../interfaces/entities/SessionRecharge/ISessionRechargeData";

export class TarifForfaitService implements ITarif {
    private readonly montant;

    public constructor(montant: number) { 
        this.montant = montant;
    }

    public calculerCout( s: ISessionRechargeData): number {
        console.log(`Calcul du coût de la session de recharge au forfait la session : ${s.id} - montant : ${this.montant} - energie consommée : ${s.energieKwh}`);
        return this.montant;
    }
}