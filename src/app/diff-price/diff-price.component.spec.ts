import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffPriceComponent } from './diff-price.component';

describe('DiffPriceComponent', () => {
  let component: DiffPriceComponent;
  let fixture: ComponentFixture<DiffPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
