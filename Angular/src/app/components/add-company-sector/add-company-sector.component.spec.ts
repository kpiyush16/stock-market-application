import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanySectorComponent } from './add-company-sector.component';

describe('AddCompanySectorComponent', () => {
  let component: AddCompanySectorComponent;
  let fixture: ComponentFixture<AddCompanySectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompanySectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanySectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
