import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompanySectorComponent } from './delete-company-sector.component';

describe('DeleteCompanySectorComponent', () => {
  let component: DeleteCompanySectorComponent;
  let fixture: ComponentFixture<DeleteCompanySectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCompanySectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCompanySectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
