import { ITarif } from "../interfaces/entities/Tarif/ITarif";
import { ISessionRecharge } from "../interfaces/entities/SessionRecharge/ISessionRecharge";
import { ISessionRechargeData } from "../interfaces/entities/SessionRecharge/ISessionRechargeData";

export class SessionRechargeService implements ISessionRecharge
{
  private readonly sessionRechargeData: ISessionRechargeData;
  private readonly tarif: ITarif;

  public constructor(
    sessionRechargeData: ISessionRechargeData,
    tarif: ITarif
  ){
    // Set the data for session recharge
    this.sessionRechargeData = sessionRechargeData;

    // Add Id if not existing (to Fill but not nescary at all)
    if ( !this.sessionRechargeData.id )  
      this.sessionRechargeData.id = this.getId()

    this.tarif = tarif;
  }

/**
 * Count tarif for a session recharge.
 *
 * @public
 * @returns {number} 
 */
  public count(): number {
    return this.tarif.calculerCout(this.sessionRechargeData);
  } 

  private getId(): string {
    // Return a fake number
    return `SessionRecharge_${Math.floor(Math.random() * 1000)}`;
  }
}
