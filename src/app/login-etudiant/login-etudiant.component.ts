import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etudiant } from '../Entities/Etudiant.Entities';
import { CrudService } from '../service/crud.service';
declare var google:any
@Component({
  selector: 'app-login',
  templateUrl: './login-etudiant.component.html',
  styleUrls: ['./login-etudiant.component.css']
})
export class LoginEtudiantComponent {

  messageCommande=""
  loginForm: FormGroup
  forgotPasswordMessage: string = '';
  forgotPasswordForm: FormGroup;
  activeTab: string = 'login';
  passwordVisible: boolean = false;
    constructor(
      private fb: FormBuilder,
      private service:CrudService,
      private router:Router
    ) {
      let formControls = {
        email: new FormControl('',[
          Validators.required,
          Validators.email

        ]),
        password: new FormControl('',[
          Validators.required,

        ])
      }

      this.loginForm = this.fb.group(formControls)
    }

    get email() { return this.loginForm.get('email') }
    get password() { return this.loginForm.get('password') }

    login() {
      let data = this.loginForm.value;
      console.log(data);
      let etudiant = new Etudiant(
       null, null,null,data.email,data.password,null);
      console.log(etudiant);
      if (

        data.email == 0 ||
        data.password == 0
      )
      {
        this.messageCommande=`<div class="alert alert-success" role="alert">
        avec success
      </div>`
      } else {

        this.service.loginEtudiant(etudiant).subscribe(
          res=>{

            console.log(res);
            this.messageCommande=`<div class="alert alert-success" role="alert">
        avec success
      </div>`
            let token = res.token;
            localStorage.setItem("myToken",token);
            this.router.navigate(['/home']).then(()=>{window.location.reload()});
          },
          err=>{
            console.log(err);
            this.messageCommande=`<div class="alert alert-success" role="alert">
            avec success
          </div>`

          }
        )

      }
      }

      ngOnInit(): void {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {


          google.accounts.id.initialize({
            client_id: '181821814316-l4sbhh9oo4q89o4sgl6h87sih1ap1red.apps.googleusercontent.com',
            callback: this.handleCredentialResponse.bind(this)
          });

          google.accounts.id.renderButton(
            document.getElementById('g_id_signin'),
            { theme: 'outline', size: 'medium', shape: 'pill', text: 'continue_with' }
          );

          google.accounts.id.prompt();
        };
      }

      handleCredentialResponse(response: any): void {
        const idToken = response.credential;
        console.log("ID Token:", idToken);

        this.service.signInWithGoogle(idToken).subscribe(
          res => {
            console.log('Connexion réussie via Google!', res);
            localStorage.setItem("myToken", res.token);
            this.router.navigate(['']).then(() => window.location.reload());
          },
          err => {
            console.error('Erreur de connexion Google:', err);
            this.messageCommande = `
              <div class="alert alert-danger" role="alert">
                Erreur lors de la connexion avec Google.
              </div>`;
          }
        );
      }
  switchTab(tab: string) {
    this.activeTab = tab;
    this.messageCommande = '';
    this.forgotPasswordMessage = '';
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
      forgotPassword() {
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordMessage = `<div class="alert alert-danger" role="alert">
        Veuillez entrer un email valide
      </div>`;
      return;
    }

    let email = this.forgotPasswordForm.get('email')?.value;
    this.service.forgotPassword(email).subscribe({
      next: (res) => {
        this.forgotPasswordMessage = `<div class="alert alert-success" role="alert">
          Un lien de réinitialisation a été envoyé à votre email
        </div>`;
        this.forgotPasswordForm.reset();
      },
      error: (err) => {
        this.forgotPasswordMessage = `<div class="alert alert-danger" role="alert">
          ${err.error || "Erreur lors de l'envoi du lien de réinitialisation"}
        </div>`;
      },
    });
  }

}
