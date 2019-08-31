import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposeComponent } from './repose.component';

describe('ReposeComponent', () => {
  let component: ReposeComponent;
  let fixture: ComponentFixture<ReposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
