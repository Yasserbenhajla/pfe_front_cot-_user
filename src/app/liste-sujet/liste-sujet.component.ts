import { Component } from '@angular/core';
import { Sujet } from '../Entities/Sujet';
import { Router } from '@angular/router';
import { Rapport } from '../Entities/Rapport.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-sujet',
  templateUrl: './liste-sujet.component.html',
  styleUrls: ['./liste-sujet.component.css']
})
export class ListeSujetComponent {
listeSujet:Sujet[]= [];;

  constructor(private service:CrudService,private router:Router ) { }


  ngOnInit(): void {
    this.service.getAllSujetByEtudiant().subscribe((data:Sujet[])=>{
      console.log(data)
      this.listeSujet=data;
    })
  }
}
