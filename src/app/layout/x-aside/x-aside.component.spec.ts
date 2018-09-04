import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XAsideComponent } from './x-aside.component';

describe('XAsideComponent', () => {
  let component: XAsideComponent;
  let fixture: ComponentFixture<XAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
