import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockexchangeComponent } from './add-stockexchange.component';

describe('AddStockexchangeComponent', () => {
  let component: AddStockexchangeComponent;
  let fixture: ComponentFixture<AddStockexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStockexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
