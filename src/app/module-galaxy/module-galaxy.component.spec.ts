import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleGalaxyComponent } from './module-galaxy.component';

describe('ModuleGalaxyComponent', () => {
  let component: ModuleGalaxyComponent;
  let fixture: ComponentFixture<ModuleGalaxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGalaxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
