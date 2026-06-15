import { ITarif, ITarifData } from "../interfaces/entities/Tarif/index";
import { ISessionRechargeData } from "../interfaces/entities/SessionRecharge/ISessionRechargeData";

export class TarifForfaitService implements ITarif {
    private readonly tarifData: ITarifData;

    public constructor(tarifData: ITarifData) { 
        this.tarifData = { ...tarifData };
    }

    public calculerCout( s: ISessionRechargeData): number {
        
        const montant = this.tarifData.BaseMontant;
        
        console.log(`[TARIF FORFAIT]Calcul du coût de la session de recharge au forfait la session : ${s.id} - montant : ${montant} - energie consommée : ${s.energieKwh}`);
        return montant;
    }
}