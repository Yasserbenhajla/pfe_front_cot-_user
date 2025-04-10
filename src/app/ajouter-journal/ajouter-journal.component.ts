import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { SaveJournal } from '../Entities/SaveJournal';
import { Journal } from '../Entities/Journal.Entities';

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
  imgURL: any

   //public message!: string;
   constructor(private services : CrudService , private router : Router,private fb:FormBuilder) {
     let formControls = {


      journal: new FormControl('',[
         Validators.required]),
      }

      this.contactForm = this.fb.group(formControls)
    }

    get journal() { return this.contactForm.get('journal');}


    addNewjournal() {
     let data = this.contactForm.value;
     let datas=this.services.userDetails()
     console.log(data);
     let model:SaveJournal=new SaveJournal();
     console.log(model);
     model.id=null;

     model.journal=this.imgURL;

     model.idEtudiant=datas?.id ;
     if (

       data.journal == 0
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
