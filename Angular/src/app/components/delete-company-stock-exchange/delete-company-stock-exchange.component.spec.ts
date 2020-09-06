import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompanyStockExchangeComponent } from './delete-company-stock-exchange.component';

describe('DeleteCompanyStockExchangeComponent', () => {
  let component: DeleteCompanyStockExchangeComponent;
  let fixture: ComponentFixture<DeleteCompanyStockExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCompanyStockExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCompanyStockExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
