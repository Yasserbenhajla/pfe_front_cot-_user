import { Etudiant } from "./Etudiant.Entities";

export class RapportFinal {
  constructor(
    public id ?:number ,
    public rapportFinal ?:string ,
    public etudiant?:Etudiant,


  ){

  }
}
