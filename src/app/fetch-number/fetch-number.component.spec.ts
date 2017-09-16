import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchNumberComponent } from './fetch-number.component';

describe('FetchNumberComponent', () => {
  let component: FetchNumberComponent;
  let fixture: ComponentFixture<FetchNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
