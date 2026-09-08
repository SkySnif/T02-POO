import type { IBaseEntityData } from '#/shared/Domain/interfaces/IBaseEntityData.js';

import type { IHeureCreuseData } from "#/modules/Tarif/Domain/interfaces/entities/IHeureCreuseData.js";

import type { TarifType } from "#/modules/Tarif/Domain/enums/TarifType.js"; 

export interface ITarifData extends IBaseEntityData {
    nom: string;
    description?: string;

    baseMontant: number;
    heureCreuse?: IHeureCreuseData

    estActif: boolean;
    type: TarifType;
}