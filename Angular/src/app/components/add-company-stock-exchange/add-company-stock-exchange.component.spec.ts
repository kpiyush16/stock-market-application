import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyStockExchangeComponent } from './add-company-stock-exchange.component';

describe('AddCompanyStockExchangeComponent', () => {
  let component: AddCompanyStockExchangeComponent;
  let fixture: ComponentFixture<AddCompanyStockExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompanyStockExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyStockExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
