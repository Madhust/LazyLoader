import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadDeclarativeComponent } from './lazy-load-declarative.component';

describe('LazyLoadDeclarativeComponent', () => {
  let component: LazyLoadDeclarativeComponent;
  let fixture: ComponentFixture<LazyLoadDeclarativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadDeclarativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadDeclarativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
