import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciSeriesComponent } from './fibonacci-series.component';

describe('FibonacciSeriesComponent', () => {
  let component: FibonacciSeriesComponent;
  let fixture: ComponentFixture<FibonacciSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibonacciSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
