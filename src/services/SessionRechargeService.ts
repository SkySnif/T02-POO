import { ITarif } from "../interfaces/entities/Tarif/ITarif";
import { ISessionRecharge } from "../interfaces/entities/SessionRecharge/ISessionRecharge";
import { ISessionRechargeData } from "../interfaces/entities/SessionRecharge/ISessionRechargeData";

export class SessionRechargeService implements ISessionRecharge
{

private readonly id: string;
private readonly energieKwh: number;
private readonly tarif: ITarif;

private readonly sessionRechargeData: ISessionRechargeData;

  public constructor(
    energieKwh: number,
    tarif: ITarif,
    id: string = this.getId() // default value getId
  ){
    // basic data
    this.id=id;
    this.energieKwh=energieKwh;
    this.tarif=tarif;

    // Set the data for session recharge
    this.sessionRechargeData = {
        id: this.id,
        energieKwh: this.energieKwh,
        tarif: this.tarif
    };
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
