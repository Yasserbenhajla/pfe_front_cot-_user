import { HomeComponent } from './home/home.component';
import { DemandeConventionComponent } from './demande-convention/demande-convention.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEncadrantComponent } from './ajouter-encadrant/ajouter-encadrant.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { LoginEncadrantComponent } from './login-encadrant/login-encadrant.component';
import { AjouterJournalComponent } from './ajouter-journal/ajouter-journal.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';
import { ListeRapportComponent } from './liste-rapport/liste-rapport.component';
import { AffectationComponent } from './affectation/affectation.component';
import { ListeDemandeStageComponent } from './liste-demande-stage/liste-demande-stage.component';
import { ConfirmationDemandeStageComponent } from './confirmation-demande-stage/confirmation-demande-stage.component';
import { AjouterStageComponent } from './ajouter-stage/ajouter-stage.component';
import { AjouterRapportFinalComponent } from './ajouter-rapport-final/ajouter-rapport-final.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { AjouterRapportEncadrantComponent } from './ajouter-rapport-encadrant/ajouter-rapport-encadrant.component';
import { ListeRapportEncadrantComponent } from './liste-rapport-encadrant/liste-rapport-encadrant.component';

const routes: Routes = [
  { path: '', component: AjouterEncadrantComponent },
  { path: 'ajouterEtudiant', component: AjouterEtudiantComponent },
  { path: 'loginEtudiant', component:LoginEtudiantComponent },
  { path: 'loginEncadrant', component:LoginEncadrantComponent },
  { path: 'ajouterJournal', component:AjouterJournalComponent},
  { path: 'ajouterRapport', component:AjouterRapportComponent},
  { path: 'demandeConvention', component:DemandeConventionComponent},
  { path: 'listeRapport', component:ListeRapportComponent},
  { path: 'home', component:HomeComponent},
  {path: 'ListeAffectation',component:AffectationComponent},
  {path: 'ListeDemande',component:ListeDemandeStageComponent},
  {path: 'ConfirmtionDemande',component:ConfirmationDemandeStageComponent},
  {path: 'AjouterStage',component:AjouterStageComponent},
  {path: 'AjouterRapportFinal',component:AjouterRapportFinalComponent},
  {path: 'RestPassword',component:RestPasswordComponent},
  {path: 'AjouterRapportEncadrant',component:AjouterRapportEncadrantComponent},
  {path: 'listeRapportEncadrant',component:ListeRapportEncadrantComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
