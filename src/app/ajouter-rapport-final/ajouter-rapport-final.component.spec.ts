import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRapportFinalComponent } from './ajouter-rapport-final.component';

describe('AjouterRapportFinalComponent', () => {
  let component: AjouterRapportFinalComponent;
  let fixture: ComponentFixture<AjouterRapportFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterRapportFinalComponent]
    });
    fixture = TestBed.createComponent(AjouterRapportFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
