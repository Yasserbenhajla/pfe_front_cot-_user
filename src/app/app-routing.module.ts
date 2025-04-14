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

const routes: Routes = [
  { path: '', component: AjouterEncadrantComponent },
  { path: 'ajouterEtudiant', component: AjouterEtudiantComponent },
  { path: 'loginEtudiant', component:LoginEtudiantComponent },
  { path: 'loginEncadrant', component:LoginEncadrantComponent },
  { path: 'ajouterJournal', component:AjouterJournalComponent},
  { path: 'ajouterRapport', component:AjouterRapportComponent},
  { path: 'demandeConvention', component:DemandeConventionComponent},
  { path: 'listeRapport', component:ListeRapportComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
