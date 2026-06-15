import { ISessionRepository } from "../interfaces/repositories/ISessionRepository";
import { ISessionRechargeData } from "../interfaces/entities/SessionRecharge/ISessionRechargeData";

export class SessionRepository implements ISessionRepository {
  public constructor(
    private readonly sessionRechargeData: ISessionRechargeData,
  ) {}

  public enregistrer(s: ISessionRechargeData): void {
    console.log("Enregistrement de la session de recharge : ", s);
  }

  public tousParBorne(idBorne: number): ISessionRechargeData[] {
    console.log("Récupération de toutes les sessions de recharge pour la borne : ", idBorne);
    return [this.sessionRechargeData];
  } 
}
