import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRapportEncadrantComponent } from './ajouter-rapport-encadrant.component';

describe('AjouterRapportEncadrantComponent', () => {
  let component: AjouterRapportEncadrantComponent;
  let fixture: ComponentFixture<AjouterRapportEncadrantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterRapportEncadrantComponent]
    });
    fixture = TestBed.createComponent(AjouterRapportEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
