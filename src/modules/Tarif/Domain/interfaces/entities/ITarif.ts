import type { IBaseEntity } from '#/shared/Domain/interfaces/IBaseEntity.js';

// Type
import type { ITarifData } from "#/modules/Tarif/Domain/interfaces/entities/ITarifData.js";
import type { IHeureCreuseData } from "#/modules/Tarif/Domain/interfaces/entities/IHeureCreuseData.js";

// Enum
import type { TarifType } from "#/modules/Tarif/Domain/enums/TarifType.js"; 

import type { ISessionRechargeData } from "#/modules/SessionRecharge/interfaces/entities/ISessionRechargeData.js";

/**
 * ITarif = La stratégie de calcul
 * C'est un Tarif qui peut être appliqué à une SessionRecharge
 */
export interface ITarif extends IBaseEntity<ITarifData> {
    // ===== Méthode principale =====
    calculerCout(sessionData: ISessionRechargeData): number;
    
    // ===== Getters =====
    getNom(): string;
    getDescription(): string | undefined;
    getEstActif(): boolean;
    getType(): TarifType;
    getBaseMontant(): number;
    getHeureCreuse(): IHeureCreuseData | undefined;
}
