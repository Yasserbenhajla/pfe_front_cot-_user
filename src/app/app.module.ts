import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { AjouterEncadrantComponent } from './ajouter-encadrant/ajouter-encadrant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { LoginEncadrantComponent } from './login-encadrant/login-encadrant.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AjouterJournalComponent } from './ajouter-journal/ajouter-journal.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';
import { DemandeConventionComponent } from './demande-convention/demande-convention.component';
import { ListeRapportComponent } from './liste-rapport/liste-rapport.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterEtudiantComponent,
    AjouterEncadrantComponent,
    LoginEtudiantComponent,
    LoginEncadrantComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AjouterJournalComponent,
    AjouterRapportComponent,
    DemandeConventionComponent,
    ListeRapportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
