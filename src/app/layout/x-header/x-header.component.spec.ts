import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XHeaderComponent } from './x-header.component';

describe('XHeaderComponent', () => {
  let component: XHeaderComponent;
  let fixture: ComponentFixture<XHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
