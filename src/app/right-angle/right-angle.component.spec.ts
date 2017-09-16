import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAngleComponent } from './right-angle.component';

describe('RightAngleComponent', () => {
  let component: RightAngleComponent;
  let fixture: ComponentFixture<RightAngleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightAngleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightAngleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
