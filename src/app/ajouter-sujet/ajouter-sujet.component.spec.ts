import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSujetComponent } from './ajouter-sujet.component';

describe('AjouterSujetComponent', () => {
  let component: AjouterSujetComponent;
  let fixture: ComponentFixture<AjouterSujetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterSujetComponent]
    });
    fixture = TestBed.createComponent(AjouterSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
