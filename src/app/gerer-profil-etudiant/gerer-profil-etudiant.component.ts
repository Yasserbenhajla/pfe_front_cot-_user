import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../service/crud.service';
import { Etudiant } from '../Entities/Etudiant.Entities';

@Component({
  selector: 'app-gerer-profil-etudiant',
  templateUrl: './gerer-profil-etudiant.component.html',
  styleUrls: ['./gerer-profil-etudiant.component.css']
})
export class GererProfilEtudiantComponent {
userDetails: any;
  updateForm: FormGroup;
  id: number;
  userFile:any
  message:any
  imagePath:any
  imgURL:any

  showAddPhotoOverlay: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute,
  ) {
    let formControles = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z .'-]+"),
        Validators.minLength(4),
      ]),

      prenom: new FormControl('', [Validators.required]),


      email: new FormControl('', [Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),



      password: new FormControl('', [Validators.required]),


      niveau: new FormControl('', [Validators.required]),

      tel: new FormControl('', [Validators.required]),



    };
    this.updateForm = this.fb.group(formControles);
    this.userDetails = this.service.userDetails();
  }

  get nom() {
    return this.updateForm.get('nom');
  }
  get prenom() {
    return this.updateForm.get('prenom');
  }
  get email() {
    return this.updateForm.get('email');
  }
  get password() {
    return this.updateForm.get('password');
  }
  get niveau() {
    return this.updateForm.get('niveau');
  }
  get telephone() {
    return this.updateForm.get('tel');
  }






  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;
    this.service.findClientById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateForm.patchValue({
        nom: event.nom,
        prenom: event.prenom,
        email: event.email,
        password: event.password,
        niveau: event.niveau,
        tel: event.tel,

       });});
  }



  updateEtudiant() {
    let datas =this.service.userDetails();
    let data = this.updateForm.value;


    let etudiant =new Etudiant(
      this.id,
      data.nom,
      data.prenom,
      data.email,
      data.password,
      data.niveau,
      data.tel,
      );
    console.log(etudiant);
    console.log(data);
    if(
      data.nom == 0 ||
      data.prenom == 0||
      data.email == 0 ||
      data.password == 0 ||
      data.niveau == 0 ||
      data.tel==0


    ){
      Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'remplir votre champ !',
              });

    }else{
    this.service.updateEtudiant(etudiant,this.id).subscribe((res) => {
      console.log(res);
      let token = res.token;
      localStorage.setItem("myTokenClient",res.token);
      this.userDetails=this.service.userDetails();

        Swal.fire({
                icon: 'success',
                title: 'success',
                text: 'Votre modification a été effectuée avec succès!',
              });



      this.route.navigate(['/profilclient']).then(() => {
        window.location.reload();
      });

    });
  }
  }
}
