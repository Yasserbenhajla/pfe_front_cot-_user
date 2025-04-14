import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Convention } from '../Entities/Convention.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-demande-convention',
  templateUrl: './demande-convention.component.html',
  styleUrls: ['./demande-convention.component.css']
})
export class DemandeConventionComponent {
  messageCommande = "";
  conventionForm: FormGroup;
  userFile: any;
  imagePath: any;
  imgURL: any

  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.conventionForm = this.fb.group({
      convention: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  get convention() {
    return this.conventionForm.get('convention');
  }

  addNewConvention() {
    let data = this.conventionForm.value;
    console.log(data);

    let conv = new Convention(undefined, this.imgURL);
    console.log(conv);

    if (!data.convention || data.convention.trim().length === 0) {
      this.messageCommande = `<div class="alert alert-danger" role="alert">
        Veuillez remplir le champ convention.
      </div>`;
    } else {
      this.services.addConvention(conv).subscribe(
        res => {
          console.log(res);
          this.messageCommande = `<div class="alert alert-success" role="alert">
            Convention ajoutée avec succès.
          </div>`;
          this.router.navigate(['/listeConvention']).then(() => {
            window.location.reload();

          });
        },
        err => {
          this.messageCommande = `<div class="alert alert-warning" role="alert">
            Erreur lors de l'ajout. La convention existe peut-être déjà.
          </div>`;
        }
      );

      setTimeout(() => {
        this.messageCommande = "";
      }, 3000);
    }
  }

  ngOnInit(): void {}
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
