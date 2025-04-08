import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEncadrantComponent } from './login-encadrant.component';

describe('LoginEncadrantComponent', () => {
  let component: LoginEncadrantComponent;
  let fixture: ComponentFixture<LoginEncadrantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEncadrantComponent]
    });
    fixture = TestBed.createComponent(LoginEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
