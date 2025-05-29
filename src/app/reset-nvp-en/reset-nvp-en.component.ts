import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Etudiant } from '../Entities/Etudiant.Entities';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reset-nvp-en',
  templateUrl: './reset-nvp-en.component.html',
  styleUrls: ['./reset-nvp-en.component.css']
})
export class ResetNvpEnComponent {
 resetForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private service:CrudService,
    private router:Router,

  ){
    let formControls = {
      email: new FormControl('',[
        Validators.required,
      Validators.email]),}
      this.resetForm = this.fb.group(formControls)
}
get email() {return this.resetForm.get('email');}

resetmdpclt() {
  let data = this.resetForm.value;
  console.log(data);
  let etudiant = new Etudiant(
    data.null, data.null,data.null,data.email,data.null,data.null,data.null);
  console.log(etudiant);

  if (
    data.email == 0
  ) {
   Swal.fire({
        title: 'Erreur',
        text: 'Tous les champs sont obligatoires.',
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
  } else {
  this.service.resetMdpEtudiant(etudiant).subscribe(
    res=>{
      console.log(res);
        Swal.fire({
        title: 'success',
        text: 'Email Envoyer avec success.',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000,
      });
    },
    err=>{
      console.log(err);
      Swal.fire({
        title: 'Erreur',
        text: 'Probleme.',
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
      this.router.navigate(['/Login']).then(()=>window.location.reload());

    }
  )

  }
}

  ngOnInit(): void {
  }

}
