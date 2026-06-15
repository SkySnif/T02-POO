
export interface ITarifData
{
    BaseMontant: number;
    HeureCreuse?:
        {   
            BaseMontant: number,
            HeureDebut: number,
            HeureFin: number,
        };
}
