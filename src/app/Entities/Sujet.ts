import { Encadrant } from "./Encadrant.Entities";
import { Etudiant } from "./Etudiant.Entities";
import { Stage } from "./Stage";

export class Sujet {
  constructor(
    public id?: number,
    public description?: string,
    public status?:number,
    public etudiant?:Etudiant,
    public stage?:Stage ,
  ) {}
}
