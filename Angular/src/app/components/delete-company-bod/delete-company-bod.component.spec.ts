import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompanyBodComponent } from './delete-company-bod.component';

describe('DeleteCompanyBodComponent', () => {
  let component: DeleteCompanyBodComponent;
  let fixture: ComponentFixture<DeleteCompanyBodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCompanyBodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCompanyBodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
