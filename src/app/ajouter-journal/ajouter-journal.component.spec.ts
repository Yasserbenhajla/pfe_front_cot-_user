import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterJournalComponent } from './ajouter-journal.component';

describe('AjouterJournalComponent', () => {
  let component: AjouterJournalComponent;
  let fixture: ComponentFixture<AjouterJournalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterJournalComponent]
    });
    fixture = TestBed.createComponent(AjouterJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
