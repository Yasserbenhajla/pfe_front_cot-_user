import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { SaveRapportFinal } from 'src/app/Entities/SaveRapportFinal';

@Component({
  selector: 'app-ajouter-rapport-final',
  templateUrl: './ajouter-rapport-final.component.html',
  styleUrls: ['./ajouter-rapport-final.component.css']
})
export class AjouterRapportFinalComponent {
  messageCommande = '';
  imgURL: any;
  rapportFinalForm: FormGroup;
  userFile: any;
  public imagePath: any;
  public message!: string;
  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.rapportFinalForm = this.fb.group({
      rapportFinal: new FormControl('', [Validators.required, Validators.minLength(4)]),
      autorisation: new FormControl('', [Validators.required])
    });
  }

  get rapportFinal() {
    return this.rapportFinalForm.get('rapportFinal');
  }

  get autorisation() {
    return this.rapportFinalForm.get('autorisation');
  }

  addNewRapportFinal() {
    let data = this.rapportFinalForm.value;
        let datas = this.services.userDetails();
        console.log(data);
        let model: SaveRapportFinal = new SaveRapportFinal();
        console.log(model);
        model.id = null;
        model.rapportFinal = this.imgURL;
        model.autorisation =this.imgURL;
        model.idEtudiant = datas.id;


        if (
          data.rapportFinal == 0 ||

          data.autorisation == 0 ||

          data.idEtudiant ==0

        ) {
          this.messageCommande = `<div class="alert
          alert-danger" role="alert">
          remplir votre champ
        </div>`;
        } else {
          this.services.addRapportFinal(model).subscribe(
            (res) => {
              console.log(res);

              this.router.navigate(['/listeRapportFFinal']);
            },
            (err) => {}
          );
          setTimeout(() => {
            this.messageCommande = '';
          }, 3000);
        }
      }


  OnSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgURL = reader.result;
        console.log(this.imgURL);
      };
    }
  }
}
