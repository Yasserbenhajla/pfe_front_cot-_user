import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveStage } from '../Entities/SaveStage';
import { TypeStage } from '../Entities/TypeStage';
import { CrudService } from '../service/crud.service';
import { Contact } from '../Entities/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 messageCommande = '';
  ContactForm: FormGroup;


  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    const formControls = {
      nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      sujet: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),


    };
    this.ContactForm = this.fb.group(formControls);
  }


  get nom() { return this.ContactForm.get('nom'); }
  get prenom() { return this.ContactForm.get('prenom'); }
  get email() { return this.ContactForm.get('email'); }
  get sujet() { return this.ContactForm.get('sujet'); }
  get message() { return this.ContactForm.get('message'); }



  addNewContact() {
  if (this.ContactForm.invalid) {
    this.messageCommande = `
      <div class="alert alert-danger" role="alert">
        Veuillez remplir tous les champs obligatoires correctement.
      </div>`;
    return;
  }

  const data = this.ContactForm.value;
  const model: Contact = new Contact();

  model.id = null;
  model.nom = data.nom;
  model.prenom = data.prenom;
  model.email = data.email;
  model.sujet = data.sujet;
  model.message = data.message;

  this.services.addContact(model).subscribe(
    (res) => {
      console.log(res);
      this.messageCommande = `
        <div class="alert alert-success" role="alert">
          Votre message a été envoyé avec succès !
        </div>`;

      // Redirection après 2,5s
      setTimeout(() => {
        this.messageCommande = '';
        this.router.navigate(['/listeContact']);
      }, 2500);
    },
    (err) => {
      this.messageCommande = `
        <div class="alert alert-danger" role="alert">
          Une erreur est survenue lors de l'envoi du message.
        </div>`;
    }
  );
}
}

