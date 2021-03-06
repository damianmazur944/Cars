import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraddComponent } from './caradd.component';

describe('CaraddComponent', () => {
  let component: CaraddComponent;
  let fixture: ComponentFixture<CaraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
