
import { TypeStage } from './../Entities/TypeStage';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

import { SaveStage } from '../Entities/SaveStage';

@Component({
  selector: 'app-ajouter-stage',
  templateUrl: './ajouter-stage.component.html',
  styleUrls: ['./ajouter-stage.component.css']
})
export class AjouterStageComponent {
  messageCommande = '';
  stageForm: FormGroup;
  listeTypeStage:TypeStage[];

  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    const formControls = {
      intitule: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required]),
      lieu: new FormControl('', [Validators.required]),
      pays: new FormControl('', [Validators.required]),
      technologieOutil: new FormControl('', [Validators.required]),
      nomEntreprise: new FormControl('', [Validators.required]),
      dateDeb: new FormControl('', [Validators.required]),
      dateFin: new FormControl('', [Validators.required]),
      typeDeStage: new FormControl('', [Validators.required]),

    };
    this.stageForm = this.fb.group(formControls);
  }


  get intitule() { return this.stageForm.get('intitule'); }
  get description() { return this.stageForm.get('description'); }
  get lieu() { return this.stageForm.get('lieu'); }
  get pays() { return this.stageForm.get('pays'); }
  get technologieOutil() { return this.stageForm.get('technologieOutil'); }
  get dateDeb() { return this.stageForm.get('dateDeb'); }
  get nomEntreprise() { return this.stageForm.get('nomEntreprise'); }
  get dateFin() { return this.stageForm.get('dateFin'); }
  get typeDeStage() { return this.stageForm.get('typeDeStage'); }


  addNewStage() {
  let data = this.stageForm.value;
  let datas = this.services.userDetails();

  if (this.stageForm.invalid) {
    this.messageCommande = `
      <div class="alert alert-danger" role="alert">
        Veuillez remplir tous les champs correctement avant de soumettre.
      </div>`;
    return;
  }

  let model: SaveStage = new SaveStage();
  model.id = null;
  model.intitule = data.intitule;
  model.description = data.description;
  model.lieu = data.lieu;
  model.pays = data.pays;
  model.technologieOutil = data.technologieOutil;
  model.nomEntreprise = data.nomEntreprise;
  model.dateDeb = data.dateDeb;
  model.dateFin = data.dateFin;
  model.typeDeStageId = data.typeDeStage;
  model.etudiantId = datas.id;

  this.services.addStage(model).subscribe(
    (res) => {
      console.log(res);
      this.messageCommande = `
        <div class="alert alert-success" role="alert">
          Stage ajouté avec succès !
        </div>`;

      // Redirection après 2.5s
      setTimeout(() => {
        this.messageCommande = '';
        this.router.navigate(['/listeStage']);
      }, 2500);
    },
    (err) => {
      this.messageCommande = `
        <div class="alert alert-danger" role="alert">
          Une erreur est survenue lors de l'ajout du stage.
        </div>`;
    }
  );
}


  ngOnInit(): void {
    this.services.getTypeStage().subscribe((typeStage) => {
      this.listeTypeStage = typeStage;
      console.log(typeStage);
    });
  }
}

