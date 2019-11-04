import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGetdataComponent } from './test-getdata.component';

describe('TestGetdataComponent', () => {
  let component: TestGetdataComponent;
  let fixture: ComponentFixture<TestGetdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGetdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
