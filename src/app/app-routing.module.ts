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
import { AjouterRapportEncadrantComponent } from './ajouter-rapport-encadrant/ajouter-rapport-encadrant.component';
import { ListeRapportEncadrantComponent } from './liste-rapport-encadrant/liste-rapport-encadrant.component';
import { Contact } from './Entities/Contact';
import { ContactComponent } from './contact/contact.component';
import { ListeSujetComponent } from './liste-sujet/liste-sujet.component';
import { AjouterSujetComponent } from './ajouter-sujet/ajouter-sujet.component';
import { ResetNvpEnComponent } from './reset-nvp-en/reset-nvp-en.component';
import { GererProfilEtudiantComponent } from './gerer-profil-etudiant/gerer-profil-etudiant.component';
import { GererProfilComponent } from './gerer-profil/gerer-profil.component';



const routes: Routes = [
  { path: 'ajouterEncadrant', component: AjouterEncadrantComponent },
  { path: 'ajouterEtudiant', component: AjouterEtudiantComponent },
  { path: '', component:LoginEtudiantComponent },
  { path: 'loginEncadrant', component:LoginEncadrantComponent },
  { path: 'ajouterJournal', component:AjouterJournalComponent},
  { path: 'ajouterRapport', component:AjouterRapportComponent},
  { path: 'demandeConvention', component:DemandeConventionComponent},
  { path: 'listeRapport', component:ListeRapportComponent},
  { path: 'home', component:HomeComponent},
  {path: 'ListeAffectation',component:AffectationComponent},
  {path: 'ListeDemandeStage',component:ListeDemandeStageComponent},
  {path: 'ConfirmtionDemande',component:ConfirmationDemandeStageComponent},
  {path: 'AjouterStage',component:AjouterStageComponent},
  {path: 'AjouterRapportFinal',component:AjouterRapportFinalComponent},
  {path: 'ajouterRapportEncadrant',component:AjouterRapportEncadrantComponent},
  {path: 'listeRapportEncadrant',component:ListeRapportEncadrantComponent},
  {path: 'Contact',component:ContactComponent},
  {path: 'listesujet',component:ListeSujetComponent},
  {path: 'AjouterSujet',component:AjouterSujetComponent},
  {path: 'ForgetPassword',component:ResetNvpEnComponent},
  {path: 'modifierProfilEtudiant/:id',component:GererProfilEtudiantComponent},
   {path: 'Profil',component:GererProfilComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
