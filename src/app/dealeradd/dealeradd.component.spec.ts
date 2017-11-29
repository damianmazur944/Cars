import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealeraddComponent } from './dealeradd.component';

describe('DealeraddComponent', () => {
  let component: DealeraddComponent;
  let fixture: ComponentFixture<DealeraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealeraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealeraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
