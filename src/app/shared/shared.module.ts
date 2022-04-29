import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './components/lazy/lazy.component';
import { LazyLoadDeclarativeComponent } from './components/lazy-load-declarative/lazy-load-declarative.component';
import { LazyLoadImperativeComponent } from './components/lazy-load-imperative/lazy-load-imperative.component';


@NgModule({
  declarations: [LazyComponent, LazyLoadDeclarativeComponent, LazyLoadImperativeComponent],
  imports: [
    CommonModule
  ],
  exports: [LazyLoadDeclarativeComponent, LazyLoadImperativeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }