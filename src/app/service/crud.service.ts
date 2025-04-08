import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Entities/Etudiant.Entities';
import { Encadrant } from '../Entities/Encadrant.Entities';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SaveJournal } from '../Entities/SaveJournal';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl='http://localhost:8081/api'
   helper=new JwtHelperService()
  loginUserUrl='http://localhost:8081/api/Etudiant/login'
  loginUseerUrl='http://localhost:8081/api/Encadrant/login'

  constructor(
    private http:HttpClient) { }



    addetudiant(etudiant:Etudiant){
      return this.http.post<any>(this.apiUrl+"/Etudiant", etudiant);
    }

    addJournal(saveJournal: SaveJournal) {
      return this.http.post<any>(this.apiUrl + '/journal', saveJournal);
    }

    addEncadrant(encadrant: Encadrant) {
      return this.http.post<any>(this.apiUrl + "/Encadrant", encadrant);
    }


    userDetails(){
      let token:any=localStorage.getItem('myToken');
      let decodeToken= this.helper.decodeToken(token);
       return decodeToken.data;
     }


     loginEtudiant(etudiant:Etudiant){
      return this.http.post<any>(this.loginUserUrl, etudiant);
    }
    loginEncadrant(encadrant:Encadrant){
      return this.http.post<any>(this.loginUseerUrl, encadrant);
    }




}
