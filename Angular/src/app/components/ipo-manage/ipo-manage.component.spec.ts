import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoManageComponent } from './ipo-manage.component';

describe('IpoManageComponent', () => {
  let component: IpoManageComponent;
  let fixture: ComponentFixture<IpoManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
