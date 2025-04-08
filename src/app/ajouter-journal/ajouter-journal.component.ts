import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { SaveJournal } from '../Entities/SaveJournal';

@Component({
  selector: 'app-ajouter-journal',
  templateUrl: './ajouter-journal.component.html',
  styleUrls: ['./ajouter-journal.component.css']
})
export class AjouterJournalComponent {


  messageCommande=""
  contactForm:FormGroup

   userFile: any;
   public imagePath: any;
   emailURL: any

   public message!: string;

   //public message!: string;
   constructor(private services : CrudService , private router : Router,private fb:FormBuilder) {
     let formControls = {


           ordonnace: new FormControl('',[
         Validators.required]),
      }

      this.contactForm = this.fb.group(formControls)
    }

    get ordonnace() { return this.contactForm.get('ordonnace');}


    addNewjournal() {
     let data = this.contactForm.value;
     let datas=this.services.userDetails()
     console.log(data);
     let model:SaveJournal=new SaveJournal();
     console.log(model);
     model.id=null;

     model.journal=data.ordannace;

     model.idEtudiant=datas?.id ;
     if (

       data.ordannace == 0
     ) {
       this.messageCommande=`<div class="alert alert-danger" role="alert">
       remplir votre champ
     </div>`
     } else {
     this.services.addJournal(model).subscribe(
       res=>{
         console.log(res);
         this.messageCommande=`<div class="alert alert-success" role="alert">
         Message envoyer avec succe
       </div>`

         this.router.navigate(['/listpatient'])
         ;
       },
        err=>{
         this.messageCommande=`<div class="alert alert-warning" role="alert">
         service en panne!!!!
       </div>`

       })
       setTimeout(() => {
         this.messageCommande=""
       }, 3000);

     }
   }


   ngOnInit(): void {

   }
}
