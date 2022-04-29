import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadImperativeComponent } from './lazy-load-imperative.component';

describe('LazyLoadImperativeComponent', () => {
  let component: LazyLoadImperativeComponent;
  let fixture: ComponentFixture<LazyLoadImperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadImperativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadImperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
