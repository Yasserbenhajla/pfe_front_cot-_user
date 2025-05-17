import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDemandeStageComponent } from './confirmation-demande-stage.component';

describe('ConfirmationDemandeStageComponent', () => {
  let component: ConfirmationDemandeStageComponent;
  let fixture: ComponentFixture<ConfirmationDemandeStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDemandeStageComponent]
    });
    fixture = TestBed.createComponent(ConfirmationDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
