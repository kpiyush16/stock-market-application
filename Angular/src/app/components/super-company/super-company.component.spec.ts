import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCompanyComponent } from './super-company.component';

describe('SuperCompanyComponent', () => {
  let component: SuperCompanyComponent;
  let fixture: ComponentFixture<SuperCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
