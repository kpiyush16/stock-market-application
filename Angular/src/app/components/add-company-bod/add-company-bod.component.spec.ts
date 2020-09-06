import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyBodComponent } from './add-company-bod.component';

describe('AddCompanyBodComponent', () => {
  let component: AddCompanyBodComponent;
  let fixture: ComponentFixture<AddCompanyBodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompanyBodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyBodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
