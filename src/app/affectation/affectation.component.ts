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


}
