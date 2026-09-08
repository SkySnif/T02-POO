import type { IBaseEntityData } from '#/shared/Domain/interfaces/IBaseEntityData.js';

// Interface pour HeureCreuse
export interface IHeureCreuseData extends IBaseEntityData {
    baseMontant: number;
    heureDebut: number;
    heureFin: number;
}