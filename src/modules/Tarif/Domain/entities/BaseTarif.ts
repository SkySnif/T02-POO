// modules/Tarif/Domain/entities/TarifBase.ts

import { BaseEntity } from "#/shared/Domain/Base/BaseEntity.js"

import type { ITarif } from '../interfaces/entities/ITarif.js';
import type { ITarifData } from '../interfaces/entities/ITarifData.js';

import type { ISessionRechargeData } from "#/modules/SessionRecharge/interfaces/entities/ISessionRechargeData.js";
import type { IHeureCreuseData } from '../interfaces/entities/IHeureCreuseData.js';
import { TarifType } from '../enums/TarifType.js';

/**
 * BaseTarif = Stratégie abstraite
 * Mutualise la logique des heures creuses
 */
export abstract class BaseTarif extends BaseEntity<ITarifData> implements ITarif {
    protected readonly nom: string;
    protected readonly description?: string;
    protected readonly estActif: boolean;
    protected readonly type: TarifType;
    protected readonly baseMontant: number;
    protected readonly heureCreuse?: IHeureCreuseData;

    constructor(data: ITarifData) {
        super(data);
        this.nom = data.nom;
        this.description = data.description;
        this.estActif = data.estActif ?? true;
        this.type = data.type;
        this.baseMontant = data.baseMontant;
        this.heureCreuse = data.heureCreuse;
    }

    // ===== Méthode abstraite =====
    public abstract calculerCout(sessionData: ISessionRechargeData): number;

    // ===== Logique partagée =====
    protected getMontantApplicable(sessionData: ISessionRechargeData): number {
        if (this.heureCreuse && sessionData.heureChargement) {
            if (this.isHeureCreuse(sessionData.heureChargement)) {
                return this.heureCreuse.baseMontant;
            }
        }
        return this.baseMontant;
    }

    protected isHeureCreuse(heureChargement: Date): boolean {
        if (!this.heureCreuse) return false;
        const heure = heureChargement.getHours();
        const { heureDebut, heureFin } = this.heureCreuse;
        return heureDebut < heureFin 
            ? heure >= heureDebut && heure < heureFin
            : heure >= heureDebut || heure < heureFin;
    }

    // ===== Getters =====
    public getNom(): string { return this.nom; }
    public getDescription(): string | undefined { return this.description; }
    public getEstActif(): boolean { return this.estActif; }
    public getType(): TarifType { return this.type; }
    public getBaseMontant(): number { return this.baseMontant; }
    public getHeureCreuse(): IHeureCreuseData | undefined { return this.heureCreuse; }

    public toData(): ITarifData {
        return {
            id: this.id,
            nom: this.nom,
            description: this.description,
            estActif: this.estActif,
            type: this.type,
            baseMontant: this.baseMontant,
            heureCreuse: this.heureCreuse,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
