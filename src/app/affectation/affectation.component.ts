import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Affectation } from '../Entities/Affectation';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent {
  listAffectation:Affectation[]
  constructor(private service:CrudService,private router:Router){}
  ngOnInit():void{
    this.service.getAffectation().subscribe(affectation=>{
      this.listAffectation=affectation
    })
  }

  // Utility method to get initials from names
  getInitials(nom: string, prenom: string): string {
    if (!nom && !prenom) return '??';
    const nomInitial = nom ? nom.charAt(0).toUpperCase() : '';
    const prenomInitial = prenom ? prenom.charAt(0).toUpperCase() : '';
    return nomInitial + prenomInitial;
  }

  // Get CSS class for level badge
  getLevelClass(niveau: string): string {
    if (!niveau) return '';
    const niveauLower = niveau.toLowerCase();
    if (niveauLower.includes('licence')) return 'licence';
    if (niveauLower.includes('master')) return 'master';
    if (niveauLower.includes('doctorat')) return 'doctorat';
    return 'licence'; // default
  }

  // Track by function for better performance
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

}
