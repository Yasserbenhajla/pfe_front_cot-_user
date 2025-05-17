import { Component } from '@angular/core';
import { DemandeStage } from '../Entities/DemandeStage';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-demande-stage',
  templateUrl: './liste-demande-stage.component.html',
  styleUrls: ['./liste-demande-stage.component.css']
})
export class ListeDemandeStageComponent {
  listeDemandes: DemandeStage[] = [];

  constructor(private service: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.service.getDemande().subscribe(demandes => {
      this.listeDemandes = demandes;
    });
  }

  downloadDocx(base64String: string) {
    const fileName = "demande-stage.docx";

    const cleanedBase64 = base64String.includes("base64,")
      ? base64String.split("base64,")[1]
      : base64String;

    try {
      const byteCharacters = atob(cleanedBase64);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      });

      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      link.click();

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Erreur lors du décodage base64 :", error);
    }
  }

  downloadPdf(base64String: any) {
    const fileName = "demande-stage";
    const source = `${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`;
    link.click();
  }
}

