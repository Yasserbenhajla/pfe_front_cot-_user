import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRapportEncadrantComponent } from './liste-rapport-encadrant.component';

describe('ListeRapportEncadrantComponent', () => {
  let component: ListeRapportEncadrantComponent;
  let fixture: ComponentFixture<ListeRapportEncadrantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeRapportEncadrantComponent]
    });
    fixture = TestBed.createComponent(ListeRapportEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
