import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-gerer-profil',
  templateUrl: './gerer-profil.component.html',
  styleUrls: ['./gerer-profil.component.css']
})
export class GererProfilComponent {
userDetails: any;
  

  constructor(private service: CrudService) {
    this.userDetails = this.service.userDetails();
  }
}
