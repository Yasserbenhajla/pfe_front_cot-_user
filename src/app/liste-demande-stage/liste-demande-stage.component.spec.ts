import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeStageComponent } from './liste-demande-stage.component';

describe('ListeDemandeStageComponent', () => {
  let component: ListeDemandeStageComponent;
  let fixture: ComponentFixture<ListeDemandeStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDemandeStageComponent]
    });
    fixture = TestBed.createComponent(ListeDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
