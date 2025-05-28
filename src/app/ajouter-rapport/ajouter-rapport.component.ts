import { Encadrant } from './../Entities/Encadrant.Entities';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { SaveRapport } from '../Entities/SaveRapport';

@Component({
  selector: 'app-ajouter-rapport',
  templateUrl: './ajouter-rapport.component.html',
  styleUrls: ['./ajouter-rapport.component.css']
})
export class AjouterRapportComponent {
  messageCommande = '';
  imgURL: any;
  rapportForm: FormGroup;
  userFile: any;
  public imagePath: any;
  listeEncadrant: Encadrant[];


  public message!: string;

  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    let formControls = {
      rapport: new FormControl('', [Validators.required, Validators.minLength(4)]),

      encadrant: new FormControl('', [Validators.required]),

    };
    this.rapportForm = this.fb.group(formControls);
  }

  get rapport() {
    return this.rapportForm.get('rapport');
  }

  get encadrant() {
    return this.rapportForm.get('encadrant');
  }

  addNewRapport() {
    let data = this.rapportForm.value;
    let datas = this.services.userDetails();
    console.log(data);
    let model: SaveRapport = new SaveRapport();
    console.log(model);
    model.id = null;
    model.rapport = this.imgURL;
    model.idEtudiant = datas.id;
    model.idEncadrant= data.encadrant;

    if (
      data.rapport == 0 ||

      data.idEncadrant == 0

    ) {
      this.messageCommande = `<div class="alert
      alert-danger" role="alert">
      remplir votre champ
    </div>`;
    } else {
      this.services.addRapport(model).subscribe(
        (res) => {
          console.log(res);

          this.router.navigate(['/home']);
        },
        (err) => {}
      );
      setTimeout(() => {
        this.messageCommande = '';
      }, 3000);
    }
  }

  ngOnInit(): void {
    this.services.getEncadrant().subscribe((encadrant) => {
      this.listeEncadrant = encadrant;
      console.log(encadrant);
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
