import { SaveRapportEncadrant } from './../Entities/SaveRapportEncadrant';
import { Encadrant } from './../Entities/Encadrant.Entities';
import { TypeStage } from './../Entities/TypeStage';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../Entities/Etudiant.Entities';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SaveJournal } from '../Entities/SaveJournal';
import { SaveRapport } from '../Entities/SaveRapport';
import { Convention } from '../Entities/Convention.Entities';
import { Observable } from 'rxjs';
import { Rapport } from '../Entities/Rapport.Entities';
import { Affectation } from '../Entities/Affectation';
import { Qualite } from '../Entities/Qualite.Entites';
import { Specialite } from '../Entities/Specialite.Entites';
import { DemandeStage } from '../Entities/DemandeStage';
import { ConfirmationDemande } from '../Entities/ConfirmationDemande';
import { Stage } from '../Entities/Stage';
import { SaveRapportFinal } from '../Entities/SaveRapportFinal';
import { RapportEncadrant } from '../Entities/RapportEncadrant';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiUrl='http://localhost:8081/api'
  GoogleUrl='http://localhost:8081/api/Etudiant/login-google'
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

      EncadrantDetails(){
      let token:any=localStorage.getItem('myTokenEncadrant');
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

     getEtudiant(): Observable<Etudiant[]> {
      return this.http.get<Etudiant[]>(this.apiUrl + "/Etudiant");
    }


    getRapport(): Observable<Rapport[]> {
      return this.http.get<Rapport[]>(this.apiUrl + "/rapport");
    }


    getQualite(): Observable<Qualite[]> {
      return this.http.get<Qualite[]>(this.apiUrl + "/Qualite");
    }
    getSpecialite(): Observable<Specialite[]> {
      return this.http.get<Specialite[]>(this.apiUrl + "/Specialite");
    }


    getAffectation(): Observable<Affectation[]> {
      return this.http.get<Affectation[]>(this.apiUrl + "/affectation");
    }

    signInWithGoogle(idToken: string): Observable<any> {
      const params = new HttpParams().set('id_token', idToken);
      return this.http.post(this.GoogleUrl, null, { params });

    }

    getDemande(): Observable<DemandeStage[]> {
      return this.http.get<DemandeStage[]>(this.apiUrl + "/demandeStage");
    }


    addConfirmation(confirmationDemande: ConfirmationDemande) {
      return this.http.post<any>(this.apiUrl + "/Confirmation", confirmationDemande);
    }

    addStage(stage: Stage) {
      return this.http.post<any>(this.apiUrl + "/stage", stage);
    }

    getTypeStage(): Observable<TypeStage[]> {
      return this.http.get<TypeStage[]>(this.apiUrl + "/type_stage");
    }

   addRapportFinal(saveRapportFinal:SaveRapportFinal) {
  return this.http.post<any>(this.apiUrl + '/rapportFinal', saveRapportFinal);
}

forgotPassword(email: string): Observable<any> {
  return this.http.post(
    `${this.apiUrl}/Etudiant/forgot-password?email=${email}`,
    {},
    { responseType: 'text' }
  );
}

resetPassword(token: string, newPassword: string): Observable<string> {
  const url = `${this.apiUrl}/Etudiant/reset-password?token=${token}&newPassword=${newPassword}`;
  return this.http.post(url, {}, { responseType: 'text' });
}

  getAllRapportByEncadrant(): Observable<Rapport[]> {
      return this.http.get<Rapport[]>(this.apiUrl + "/rapport/get-all-by-id-Encadrant/"+this.EncadrantDetails()?.id);
    }

 addRapportEncadrant(saveRapportEncadrant:SaveRapportEncadrant) {
  return this.http.post<any>(this.apiUrl + '/rapportEncadrant', saveRapportEncadrant);
}

getAllRapportByEtudiant(): Observable<RapportEncadrant[]> {
      return this.http.get<RapportEncadrant[]>(this.apiUrl + "/rapportEncadrant/get-all-by-id-Etudiant/"+this.userDetails()?.id);
    }


}
