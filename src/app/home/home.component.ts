import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Sujet } from '../Entities/Sujet';
import { TypeStage } from '../Entities/TypeStage';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userDetails: any;
  totalDepartment: number = 0;
  totalTypeStage: number = 0;
  totalSujet: number = 0;
  totalStage: number =0
  totalRapport : number =0
  totalJournal : number =0
  chart: any = [];
  Sujet: Sujet[] = [];
  myGroup: FormGroup;

  constructor(private router: Router, private service: CrudService) {
    this.userDetails = this.service.userDetails();
    this.myGroup = new FormGroup({
      firstName: new FormControl() // Initialize FormControl
    });
  }

  ngOnInit(): void {

    this.service.getSujets().subscribe(sujet => {
      this.totalSujet = sujet.length
    });

    this.service.getTypeStage().subscribe(TypeStage => {
      this.totalTypeStage = TypeStage.length
    });

     this.service.getDepartment().subscribe(Department => {
      this.totalDepartment= Department.length
    });

     this.service.getStage().subscribe(Stage => {
      this.totalStage= Stage.length
    });

       this.service.getRapport().subscribe(Rapport => {
      this.totalRapport= Rapport.length
    });

      this.service.getJournal().subscribe(Journal => {
      this.totalJournal= Journal.length
    });
    // Fetch data and initialize charts

  }
}
