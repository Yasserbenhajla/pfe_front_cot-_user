import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererProfilEtudiantComponent } from './gerer-profil-etudiant.component';

describe('GererProfilEtudiantComponent', () => {
  let component: GererProfilEtudiantComponent;
  let fixture: ComponentFixture<GererProfilEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererProfilEtudiantComponent]
    });
    fixture = TestBed.createComponent(GererProfilEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
