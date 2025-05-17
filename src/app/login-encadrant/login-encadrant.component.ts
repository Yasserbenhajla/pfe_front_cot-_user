import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Encadrant } from '../Entities/Encadrant.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login-encadrant',
  templateUrl: './login-encadrant.component.html',
  styleUrls: ['./login-encadrant.component.css']
})
export class LoginEncadrantComponent {

  messageCommande=""
    loginForm: FormGroup
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
        let encadrant = new Encadrant(
         null, null,null,data.email,data.password,null);
        console.log(encadrant);
        if (

          data.email == 0 ||
          data.password == 0
        )
        {
          this.messageCommande=`<div class="alert alert-success" role="alert">
          avec success
        </div>`
        } else {

          this.service.loginEncadrant(encadrant).subscribe(
            res=>{

              console.log(res);
              this.messageCommande=`<div class="alert alert-success" role="alert">
          avec success
        </div>`
              let token = res.token;
              localStorage.setItem("myTokenEncadrant",token);
              this.router.navigate(['/']).then(()=>{window.location.reload()});
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
    }
