import { ITarif, ITarifData } from "./interfaces/entities/Tarif/index";
import { SessionRechargeService } from "./services/SessionRechargeService";

import { ISessionRechargeData } from "./interfaces/entities/SessionRecharge/ISessionRechargeData";
import { TarifAukwhService } from "./services/TarifAukwhService";
import { TarifForfaitService } from "./services/TarifForfaitService";

console.log( "----- Start recharge borne");
console.log( "");

// Chargement sans heure creuse
const sessionRechargeBasicData: ISessionRechargeData= {
    energieKwh: 30,
}

// Chargement pendant heure creuse
const sessionRechargeHeureCreuseData: ISessionRechargeData= {
    energieKwh: 30,
    heureChargement: new Date("2024-06-15T02:00:00")
}

const tarifAukwhBasicData: ITarifData = 
{
    BaseMontant: 0.25
}

const tarifAukwhHeureCreuseData: ITarifData = 
{
    BaseMontant: 0.25,
    HeureCreuse: {
        BaseMontant: 0.15,
        HeureDebut: 22,
        HeureFin: 6
    }
}

const tarifForfaitBasicData: ITarifData = 
{
    BaseMontant: 5
}

const tarifForfaitHeureCreuseData: ITarifData = 
{
    BaseMontant: 5,
    HeureCreuse: {
        BaseMontant: 3,
        HeureDebut: 22,
        HeureFin: 6
    }
}

// Tarif basic sans heure creuse
const tarifAukwhBasic: ITarif = new TarifAukwhService(tarifAukwhBasicData);
const tarifForfaitBasic: ITarif = new TarifForfaitService(tarifForfaitBasicData);

// Tarif basic sans heure creuse
const tarifAukwHeureCreuse: ITarif = new TarifAukwhService(tarifAukwhHeureCreuseData);
const tarifForfaitHeureCreuse: ITarif = new TarifForfaitService(tarifForfaitHeureCreuseData);


console.log( `----- Tarif basic`);

// 1 - Tarif au Kwh sans heure creuse
sessionRechargeBasicData.tarif = tarifAukwhBasic;
const sessionRechargeAuKwhBasic = new SessionRechargeService(sessionRechargeBasicData);
const coutAuKwh = sessionRechargeAuKwhBasic.count();
console.log( `le cout basic au kwh est ${coutAuKwh}`);

// 2 - Tarif au forfait sans heure creuse
sessionRechargeBasicData.tarif = tarifForfaitBasic;
const sessionRechargeForfaitBasic = new SessionRechargeService(sessionRechargeBasicData);
const coutForfait = sessionRechargeForfaitBasic.count();
console.log( `le cout basic au forfait est de ${coutForfait}`);

console.log( "");
console.log( `----- Tarif heure creuse mais sans heure de chargement`);

// 3 - Tarif sans heure de chargement
sessionRechargeBasicData.tarif = tarifAukwHeureCreuse;
const sessionRechargeAuKwhBasicHeureCreuse = new SessionRechargeService(sessionRechargeBasicData);
const coutAuKwhBasicHeureCreuse = sessionRechargeAuKwhBasicHeureCreuse.count();
console.log( `le cout basic au kwh est ${coutAuKwhBasicHeureCreuse}`);

// 4 - Tarif au forfait sans heure de chargement
sessionRechargeBasicData.tarif = tarifForfaitHeureCreuse;
const sessionRechargeForfaitBasicHeureCreuse = new SessionRechargeService(sessionRechargeBasicData);
const coutForfaitBasicHeureCreuse = sessionRechargeForfaitBasicHeureCreuse.count();
console.log( `le cout basic au forfait est de ${coutForfaitBasicHeureCreuse}`);


console.log( "");
console.log( "Hello");
console.log( `----- Tarif heure creuse avec heure de chargement`);

// 5 - Tarif au heure creuse
// **********************************************************************************************************************************
const sessionRechargeAuKwhHeureCreuse = new SessionRechargeService(sessionRechargeHeureCreuseData);

// /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
// La modification de l'objet data après initialisation de l'objet est lié en reference.
// Une modification à posteriori de l'objet data est changé dans l'objet déjà instancié meme si la data est en readonly
sessionRechargeHeureCreuseData.tarif = tarifAukwHeureCreuse;
// /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
// **********************************************************************************************************************************

const coutAuKwhHeureCreuse = sessionRechargeAuKwhHeureCreuse.count();
console.log( `le cout en heure creuse au kwh est ${coutAuKwhHeureCreuse}`);

// 6 - Tarif au forfait sans heure creuse
sessionRechargeHeureCreuseData.tarif = tarifForfaitHeureCreuse;
const sessionRechargeForfaitHeureCreuse = new SessionRechargeService(sessionRechargeHeureCreuseData);
const coutForfaitHeureCreuse = sessionRechargeForfaitHeureCreuse.count();
console.log( `le cout en heure creuse au forfait est de ${coutForfaitHeureCreuse} - Pas de calcul heure creuse implémenté`);

console.log( "");
console.log( "----- Stop recharge borne");

