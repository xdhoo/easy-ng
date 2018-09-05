import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XButtonsComponent } from './x-buttons.component';

describe('XButtonsComponent', () => {
  let component: XButtonsComponent;
  let fixture: ComponentFixture<XButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
