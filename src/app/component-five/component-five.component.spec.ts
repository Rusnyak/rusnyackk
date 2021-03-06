import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFiveComponent } from './component-five.component';

describe('ComponentFiveComponent', () => {
  let component: ComponentFiveComponent;
  let fixture: ComponentFixture<ComponentFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
