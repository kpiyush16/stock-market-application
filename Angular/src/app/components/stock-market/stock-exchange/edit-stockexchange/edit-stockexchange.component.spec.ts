import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStockexchangeComponent } from './edit-stockexchange.component';

describe('EditStockexchangeComponent', () => {
  let component: EditStockexchangeComponent;
  let fixture: ComponentFixture<EditStockexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStockexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStockexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
