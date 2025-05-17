import { ConfirmationDemande } from './../Entities/ConfirmationDemande';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Encadrant } from '../Entities/Encadrant.Entities';
import { SaveRapport } from '../Entities/SaveRapport';
import { CrudService } from '../service/crud.service';
import { SaveConfirmationDemande } from '../Entities/SaveConfirmationDemande';

@Component({
  selector: 'app-confirmation-demande-stage',
  templateUrl: './confirmation-demande-stage.component.html',
  styleUrls: ['./confirmation-demande-stage.component.css']
})
export class ConfirmationDemandeStageComponent {
  messageCommande = '';
  imgURL: any;
  ConfirmationForm: FormGroup;
  userFile: any;
  public imagePath: any;

  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.ConfirmationForm = this.fb.group({
      confirmationStage: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  get confirmationStage() {
    return this.ConfirmationForm.get('confirmationStage');
  }

  addNewConfirmationDemande() {
    if (!this.ConfirmationForm.valid || !this.imgURL) {
      this.messageCommande = `
        <div class="alert alert-danger" role="alert">
          Veuillez remplir tous les champs correctement et ajouter un fichier.
        </div>`;
      return;
    }

    let model: SaveConfirmationDemande = new SaveConfirmationDemande();
    model.id = null;
    model.confirmationStage = this.imgURL;

    this.services.addConfirmation(model).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/listeConfirmation']);
      },
      (err) => {
        console.error(err);
      }
    );

    setTimeout(() => {
      this.messageCommande = '';
    }, 3000);
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
