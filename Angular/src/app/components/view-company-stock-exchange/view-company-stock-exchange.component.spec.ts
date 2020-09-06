import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompanyStockExchangeComponent } from './view-company-stock-exchange.component';

describe('ViewCompanyStockExchangeComponent', () => {
  let component: ViewCompanyStockExchangeComponent;
  let fixture: ComponentFixture<ViewCompanyStockExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCompanyStockExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompanyStockExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
