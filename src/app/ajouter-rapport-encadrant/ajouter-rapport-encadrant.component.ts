import { RapportEncadrant } from './../Entities/RapportEncadrant';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Encadrant } from '../Entities/Encadrant.Entities';
import { SaveRapport } from '../Entities/SaveRapport';
import { CrudService } from '../service/crud.service';
import { SaveRapportEncadrant } from '../Entities/SaveRapportEncadrant';
import { Etudiant } from '../Entities/Etudiant.Entities';

@Component({
  selector: 'app-ajouter-rapport-encadrant',
  templateUrl: './ajouter-rapport-encadrant.component.html',
  styleUrls: ['./ajouter-rapport-encadrant.component.css']
})
export class AjouterRapportEncadrantComponent {
 messageCommande = '';
  imgURL: any;
  rapportEncadrantForm: FormGroup;
  userFile: any;
  public imagePath: any;
  listeEtudiant: Etudiant[];



  public message!: string;

  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    let formControls = {
      rapportEncadrant: new FormControl('', [Validators.required, Validators.minLength(4)]),
      etudiant: new FormControl('', [Validators.required]),



    };
    this.rapportEncadrantForm = this.fb.group(formControls);

  }

  get rapportEncadrant() {
    return this.rapportEncadrantForm.get('rapportEncadrant');
  }
  get etudiant() {
    return this.rapportEncadrantForm.get('etudiant');
  }


  addNewRapportEncadrant() {
    let data = this.rapportEncadrantForm.value;
    let datas = this.services.EncadrantDetails();
    console.log(data);
    let model: SaveRapportEncadrant = new SaveRapportEncadrant();
    console.log(model);
    model.id = null;
    model.rapportEncadrant = this.imgURL;
    model.description = data.description ;
    model.idEtudiant= data.etudiant;
    model.idEncadrant = datas.id;

    if (
      data.rapportEncadrant == 0 ||
      data.description == 0 ||
      data.idEtudiant == 0 ||
      data.idEncadrant == 0

    ) {
      this.messageCommande = `<div class="alert
      alert-danger" role="alert">
      remplir votre champ
    </div>`;
    } else {
      this.services.addRapportEncadrant(model).subscribe(
        (res) => {
          console.log(res);

          this.router.navigate(['/listeRapportEncadrant']);
        },
        (err) => {}
      );
      setTimeout(() => {
        this.messageCommande = '';
      }, 3000);
    }
  }
   ngOnInit(): void {
    this.services.getEtudiant().subscribe((etudiant) => {
      this.listeEtudiant = etudiant;
      console.log(etudiant);
    });
  }



  OnSelectFile(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.userFile=file;
      var mimeType=event.target.files[0].type;
      var reader=new FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file)
      reader.onload=(_event)=>{
        this.imgURL=reader.result;
        console.log(this.imgURL)
      };
    }

  }


}

