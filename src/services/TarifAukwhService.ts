import { ITarif, ITarifData } from "../interfaces/entities/Tarif/index";
import { ISessionRechargeData } from "../interfaces/entities/SessionRecharge/ISessionRechargeData";

export class TarifAukwhService implements ITarif {
    private readonly tarifData: ITarifData;

    public constructor(tarifData: ITarifData) {
        this.tarifData = { ...tarifData};
    }

    public calculerCout( s: ISessionRechargeData): number {
        const prixParKwk = this.getMontant(s);

        console.log(`[TARIF KWH] Calcul du coût de la session de recharge au kwh la session : ${s.id} - cout du kwh : ${prixParKwk} - energie consommée : ${s.energieKwh}`);
        return s.energieKwh * prixParKwk;
    }

    private getMontant(s: ISessionRechargeData) : number
    {
        let montant = 0;

        // Vérifie si l'heure creuse est définie dans le tarif
        if ( this.tarifData.HeureCreuse)
        {
            // Heure creuse définie, vérifie si la session de recharge a une heure de chargement
            if ( s.heureChargement && this.isHeureCreuse(s.heureChargement) )
            {
                console.log("[TARIF KWH] Heure de chargement et heure creuse définies, utilisation du tarif d'heure creuse.");
                montant = this.tarifData.HeureCreuse.BaseMontant;
            }
            else
            {
                console.log("[TARIF KWH] Heure de chargement non définie ou non comprise dans l'heure creuse, utilisation du tarif de base.");
                montant = this.tarifData.BaseMontant;
            }
        }
        else
        {
            console.log("[TARIF KWH] Pas d'heure creuse définie dans le tarif, utilisation du tarif de base.");
            montant = this.tarifData.BaseMontant;
        }

        return montant;
    }

    private isHeureCreuse(heureChargement: Date): boolean
    {
        // vérifie si l'heure creuse est définie dans le tarif
        if ( !this.tarifData.HeureCreuse )
            return false;

        // Extrait les données de l'heure creuse du tarif
        const heureDebut = this.tarifData.HeureCreuse.HeureDebut;
        const heureFin = this.tarifData.HeureCreuse.HeureFin;

        // Recupére l'heure de la date de chargement
        const heureActuelle = heureChargement.getHours();
        
        if (heureDebut < heureFin) {
            // Cas où l'heure creuse ne traverse pas minuit
            return heureActuelle >= heureDebut && heureActuelle < heureFin;
        } else {
            // Cas où l'heure creuse traverse minuit
            return heureActuelle >= heureDebut || heureActuelle < heureFin;
        }
    }
}