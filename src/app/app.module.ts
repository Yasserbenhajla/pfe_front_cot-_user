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
import { HomeComponent } from './home/home.component';

import { AffectationComponent } from './affectation/affectation.component';
import { ListeDemandeStageComponent } from './liste-demande-stage/liste-demande-stage.component';
import { ConfirmationDemandeStageComponent } from './confirmation-demande-stage/confirmation-demande-stage.component';
import { AjouterStageComponent } from './ajouter-stage/ajouter-stage.component';
import { AjouterRapportFinalComponent } from './ajouter-rapport-final/ajouter-rapport-final.component';
import { AjouterRapportEncadrantComponent } from './ajouter-rapport-encadrant/ajouter-rapport-encadrant.component';
import { ListeRapportEncadrantComponent } from './liste-rapport-encadrant/liste-rapport-encadrant.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { ContactComponent } from './contact/contact.component';
import { AjouterSujetComponent } from './ajouter-sujet/ajouter-sujet.component';
import { ListeSujetComponent } from './liste-sujet/liste-sujet.component';
import { ResetNvpEnComponent } from './reset-nvp-en/reset-nvp-en.component';
import { GererProfilEtudiantComponent } from './gerer-profil-etudiant/gerer-profil-etudiant.component';
import { GererProfilComponent } from './gerer-profil/gerer-profil.component';


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
    ListeRapportComponent,
    HomeComponent,
    AffectationComponent,
    ListeDemandeStageComponent,
    ConfirmationDemandeStageComponent,
    AjouterStageComponent,
    AjouterRapportFinalComponent,
    AjouterRapportEncadrantComponent,
    ListeRapportEncadrantComponent,
    ChatBotComponent,
    ContactComponent,
    AjouterSujetComponent,
    ListeSujetComponent,
    ResetNvpEnComponent,
    GererProfilEtudiantComponent,
    GererProfilComponent,
  



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
