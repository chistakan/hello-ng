import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuBarComponent } from './manu-bar.component';

describe('ManuBarComponent', () => {
  let component: ManuBarComponent;
  let fixture: ComponentFixture<ManuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
