import { Sujet } from './Sujet';
import { Encadrant } from "./Encadrant.Entities";

export class Affectation {
  constructor(
    public id?: number,
    public sujet?: Sujet,
    public encadrant?: Encadrant
  ) {}
}
