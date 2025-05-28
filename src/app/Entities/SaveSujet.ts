

export class SaveSujet {
  constructor(
    public id?: number,
    public description?: string,
    public status?: number,
    public idEtudiant?:number,
    public idStage?:number,
  ) {}
}
