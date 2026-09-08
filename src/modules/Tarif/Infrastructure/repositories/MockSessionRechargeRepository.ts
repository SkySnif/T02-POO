import type { ISessionRepository } from "../../SessionRecharge/interfaces/ISessionRepository";
import type { ISessionRechargeData } from "../../SessionRecharge/interfaces/ISessionRechargeData";

export class MockSessionRechargeRepository implements ISessionRepository {
  private readonly sessionRechargeData: ISessionRechargeData;
  private readonly sessionsRechargeData: ISessionRechargeData[] = [];

  public constructor(
    sessionRechargeData: ISessionRechargeData
  ) {
    this.sessionRechargeData = { ...sessionRechargeData };
  }

  public enregistrer(s: ISessionRechargeData): void {
    console.log("Enregistrement de la session de recharge : ", s);

    // Ajout de la session recharge dans la liste des sessions
    this.sessionsRechargeData.push(s);
  }

  public tousParBorne(idBorne: string): ISessionRechargeData[] {
    console.log(`Récupération de toutes les sessions de recharge pour la borne : ${idBorne}`);

    const sessionsRechargeDataForBorneId = this.sessionsRechargeData.filter(
      (sessionsRechargeData) => sessionsRechargeData.id === idBorne
    );

    return sessionsRechargeDataForBorneId;
  }
}
