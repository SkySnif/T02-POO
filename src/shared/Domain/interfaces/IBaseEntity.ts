import type { IBaseEntityData } from '#/shared/Domain/interfaces/IBaseEntityData.js';

/**
 * Contrat générique d'une entité du domaine.
 * Toute entité doit exposer ses champs de base et savoir se sérialiser.
 */
export interface IBaseEntity<T extends IBaseEntityData = IBaseEntityData> {
  getId(): string;
  getCreatedAt(): Date | undefined;
  getUpdatedAt(): Date | undefined;
  toData(): T;
}
