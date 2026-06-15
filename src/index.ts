import { ITarif } from "./interfaces/entities/Tarif/ITarif";
import { SessionRechargeService } from "./services/SessionRechargeService";

import { ISessionRechargeData } from "./interfaces/entities/SessionRecharge/ISessionRechargeData";
import { TarifAukwhService } from "./services/TarifAukwhService";

console.log( "Start recharge borne");

const tarifAukwh: ITarif = new TarifAukwhService(0.25);
const tarifForfait: ITarif = new TarifAukwhService(5);

const KwhRecharge: number = 30;

const sessionRechargeauKwh = new SessionRechargeService(KwhRecharge, tarifAukwh);
const coutAuKwh = sessionRechargeauKwh.count();

const sessionRechargeForfait = new SessionRechargeService(KwhRecharge, tarifForfait);
const coutForfait = sessionRechargeForfait.count();

console.log( `le cout au kwh est ${coutAuKwh}`);
console.log( `le cout au forfait est de ${coutForfait}`);

console.log( "Stop recharge borne");

