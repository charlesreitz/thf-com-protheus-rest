import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGuardComponent } from './auth-guard.component';

describe('AuthGuardComponent', () => {
  let component: AuthGuardComponent;
  let fixture: ComponentFixture<AuthGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
