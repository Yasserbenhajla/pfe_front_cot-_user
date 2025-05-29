import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveStage } from '../Entities/SaveStage';
import { TypeStage } from '../Entities/TypeStage';
import { CrudService } from '../service/crud.service';
import { SaveSujet } from '../Entities/SaveSujet';
import { Stage } from '../Entities/Stage';

@Component({
  selector: 'app-ajouter-sujet',
  templateUrl: './ajouter-sujet.component.html',
  styleUrls: ['./ajouter-sujet.component.css']
})
export class AjouterSujetComponent {
messageCommande = '';

  sujetForm: FormGroup;
  listeStage:Stage[];
  public message!: string;
  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.sujetForm = this.fb.group({
      description: new FormControl('', [Validators.required, Validators.minLength(4)]),
       stage: new FormControl('', [Validators.required, Validators.minLength(4)]),


    });
  }

  get description() {
    return this.sujetForm.get('description');}
  get sujet() {
    return this.sujetForm.get('sujet');
  }



addNewSujet() {
  let data = this.sujetForm.value;
  let datas = this.services.userDetails();
  console.log(data);

  let model: SaveSujet = new SaveSujet();
  model.id = null;
  model.description = data.description;
  model.idEtudiant = datas.id;
  model.idStage = data.stage;

  if (!data.description || !data.stage) {
    this.messageCommande = `
      <div class="alert alert-danger" role="alert">
        Veuillez remplir tous les champs requis.
      </div>`;
  } else {
    this.services.addSujet(model).subscribe(
      (res) => {
        this.messageCommande = `
          <div class="alert alert-success" role="alert">
            Sujet ajouté avec succès !
          </div>`;

        // Attendre 2.5 secondes avant de rediriger
        setTimeout(() => {
          this.messageCommande = '';
          this.router.navigate(['/listeSujet']);
        }, 2500);
      },
      (err) => {
        this.messageCommande = `
          <div class="alert alert-danger" role="alert">
            Une erreur est survenue lors de l'ajout du sujet.
          </div>`;
      }
    );
  }
}

      ngOnInit(): void {
    this.services.getStage().subscribe((stage) => {
      this.listeStage = stage;
      console.log(stage);
    });
  }
}
