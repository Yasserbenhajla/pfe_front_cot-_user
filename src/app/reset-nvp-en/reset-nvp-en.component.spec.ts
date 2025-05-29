import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetNvpEnComponent } from './reset-nvp-en.component';

describe('ResetNvpEnComponent', () => {
  let component: ResetNvpEnComponent;
  let fixture: ComponentFixture<ResetNvpEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetNvpEnComponent]
    });
    fixture = TestBed.createComponent(ResetNvpEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
