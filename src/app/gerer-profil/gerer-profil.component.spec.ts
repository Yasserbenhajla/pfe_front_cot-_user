import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererProfilComponent } from './gerer-profil.component';

describe('GererProfilComponent', () => {
  let component: GererProfilComponent;
  let fixture: ComponentFixture<GererProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererProfilComponent]
    });
    fixture = TestBed.createComponent(GererProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
