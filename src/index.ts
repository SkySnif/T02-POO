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
const sessionRechargeauKwhBasic = new SessionRechargeService(sessionRechargeBasicData, tarifAukwhBasic);
const coutAuKwh = sessionRechargeauKwhBasic.count();
console.log( `le cout basic au kwh est ${coutAuKwh}`);

// 2 - Tarif au forfait sans heure creuse
const sessionRechargeForfaitBasic = new SessionRechargeService(sessionRechargeBasicData, tarifForfaitBasic);
const coutForfait = sessionRechargeForfaitBasic.count();
console.log( `le cout basic au forfait est de ${coutForfait}`);

console.log( "");
console.log( `----- Tarif sans heure creuse mais sans heure de chargement`);

// 3 - Tarif sans heure de chargement
const sessionRechargeauKwhBasicHeureCreuse = new SessionRechargeService(sessionRechargeBasicData, tarifAukwHeureCreuse);
const coutAuKwhBasicHeureCreuse = sessionRechargeauKwhBasicHeureCreuse.count();
console.log( `le cout basic au kwh est ${coutAuKwhBasicHeureCreuse}`);

// 4 - Tarif au forfait sans heure creuse
const sessionRechargeForfaitBasicHeureCreuse = new SessionRechargeService(sessionRechargeBasicData, tarifForfaitHeureCreuse);
const coutForfaitBasicHeureCreuse = sessionRechargeForfaitBasicHeureCreuse.count();
console.log( `le cout basic au forfait est de ${coutForfaitBasicHeureCreuse}`);

console.log( "");
console.log( `----- Tarif  heure creuse avec heure de chargement`);

// 3 - Tarif au heure creuse
const sessionRechargeauKwhHeureCreuse = new SessionRechargeService(sessionRechargeHeureCreuseData, tarifAukwHeureCreuse);
const coutAuKwhHeureCreuse = sessionRechargeauKwhHeureCreuse.count();
console.log( `le cout basic au kwh est ${coutAuKwhHeureCreuse}`);

// 4 - Tarif au forfait sans heure creuse
const sessionRechargeForfaitHeureCreuse = new SessionRechargeService(sessionRechargeHeureCreuseData, tarifForfaitHeureCreuse);
const coutForfaitHeureCreuse = sessionRechargeForfaitHeureCreuse.count();
console.log( `le cout basic au forfait est de ${coutForfaitHeureCreuse}`);

console.log( "");
console.log( "----- Stop recharge borne");

