import { Encadrant } from "./Encadrant.Entities";
import { Etudiant } from "./Etudiant.Entities";

export class RapportEncadrant {
  constructor(
    public id ?:number ,
    public rapportEncadrant ?:string ,
    public description ?:string ,
    public etudiant?:Etudiant,
    public encadrant?:Encadrant,

  ){

  }
}
