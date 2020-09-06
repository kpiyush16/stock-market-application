import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectorComponent } from './add-sector.component';

describe('AddSectorComponent', () => {
  let component: AddSectorComponent;
  let fixture: ComponentFixture<AddSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
