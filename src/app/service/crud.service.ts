import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../Entities/Etudiant.Entities';
import { Encadrant } from '../Entities/Encadrant.Entities';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SaveJournal } from '../Entities/SaveJournal';
import { SaveRapport } from '../Entities/SaveRapport';
import { Convention } from '../Entities/Convention.Entities';
import { Observable } from 'rxjs';
import { Rapport } from '../Entities/Rapport.Entities';


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

    addConvention(convention:Convention){
      return this.http.post<any>(this.apiUrl+"/convention", convention);
    }

    addJournal(saveJournal: SaveJournal) {
      return this.http.post<any>(this.apiUrl + '/journal', saveJournal);
    }

    addRapport(saveRapport: SaveRapport) {
      return this.http.post<any>(this.apiUrl + '/rapport', saveRapport);
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

    getEncadrant(): Observable<Encadrant[]> {
      return this.http.get<Encadrant[]>(this.apiUrl + "/Encadrant");
    }

    getRapport(): Observable<Rapport[]> {
      return this.http.get<Rapport[]>(this.apiUrl + "/rapport");
    }


}
