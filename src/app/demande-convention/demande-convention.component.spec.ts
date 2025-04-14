import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeConventionComponent } from './demande-convention.component';

describe('DemandeConventionComponent', () => {
  let component: DemandeConventionComponent;
  let fixture: ComponentFixture<DemandeConventionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeConventionComponent]
    });
    fixture = TestBed.createComponent(DemandeConventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
