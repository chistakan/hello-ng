import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHtmlTableComponent } from './component-html-table.component';

describe('ComponentHtmlTableComponent', () => {
  let component: ComponentHtmlTableComponent;
  let fixture: ComponentFixture<ComponentHtmlTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentHtmlTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHtmlTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
