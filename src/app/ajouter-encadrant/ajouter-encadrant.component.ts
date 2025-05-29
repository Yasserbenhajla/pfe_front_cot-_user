import { Specialite } from './../Entities/Specialite.Entites';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Encadrant } from '../Entities/Encadrant.Entities';
import { CrudService } from '../service/crud.service';
import { Qualite } from '../Entities/Qualite.Entites';
import { SaveEncadrant } from '../Entities/SaveEncadrant';


@Component({
  selector: 'app-ajouter-encadrant',
  templateUrl: './ajouter-encadrant.component.html',
  styleUrls: ['./ajouter-encadrant.component.css']
})
export class AjouterEncadrantComponent {
  messageCommande = "";
  passwordVisible: boolean = false;
  encadrantForm: FormGroup;
  listequalite:Qualite[]
  listespecialite:Specialite[]
  constructor(private services: CrudService, private router: Router, private fb: FormBuilder) {
    let formControls = {
      nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8,15}$")]),
      qualite: new FormControl('', [Validators.required]),
      specialite: new FormControl('', [Validators.required]),

    };
    this.encadrantForm = this.fb.group(formControls);
  }

  get nom() { return this.encadrantForm.get('nom'); }
  get prenom() { return this.encadrantForm.get('prenom'); }
  get email() { return this.encadrantForm.get('email'); }
  get password() { return this.encadrantForm.get('password'); }
  get tel() { return this.encadrantForm.get('tel'); }
  get qualite() { return this.encadrantForm.get('qualite'); }
  get specialite() { return this.encadrantForm.get('specialite'); }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  addNewEncadrant() {
     let data = this.encadrantForm.value;
     let datas = this.services.userDetails();
     console.log(data);
     let model: SaveEncadrant= new SaveEncadrant();
     console.log(model);
     model.id = null;
     model.nom = data.nom;
     model.prenom = data.prenom;
     model.email= data.email;
     model.password= data.password;
     model.tel= data.tel;
     model.idQualite = data.qualite;
     model.idSpecialite= data.specialite;

     if (
      data.nom == 0 ||
      data.prenom == 0 ||
      data.email== 0 ||
      data.password== 0 ||
      data.tel== 0 ||
      datas.qualite== 0 ||
       data.specialite == 0

     ) {
       this.messageCommande = `<div class="alert
       alert-danger" role="alert">
       remplir votre champ
     </div>`;
     } else {
       this.services.addEncadrant(model).subscribe(
         (res) => {
           console.log(res);

           this.router.navigate(['/loginEncadrant']);
         },
         (err) => {}
       );
       setTimeout(() => {
         this.messageCommande = '';
       }, 3000);
     }
   }



  ngOnInit(): void {
    this.services.getQualite().subscribe((qualite) => {
      this.listequalite = qualite;

      console.log(qualite);
    });

    this.services.getSpecialite().subscribe((Specialite) => {
      this.listespecialite = Specialite;

      console.log(Specialite);
    });
  }

}
