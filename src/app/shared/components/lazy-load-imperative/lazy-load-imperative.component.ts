import { 
  Compiler,
  Component,
  ComponentFactory,
  Injector,
  Input, 
  OnInit, 
  Type, 
  ViewChild, 
  ViewContainerRef } from '@angular/core';
import { LoadChildrenCallback } from '@angular/router';
import { from, Observable, throwError } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-lazy-load-imperative',
  templateUrl: './lazy-load-imperative.component.html',
  styleUrls: ['./lazy-load-imperative.component.sass']
})
export class LazyLoadImperativeComponent implements OnInit {

  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  public container: ViewContainerRef | undefined;

  @Input()
  load: LoadChildrenCallback | undefined;
  component: Type<any> | undefined;

  constructor(private compiler: Compiler,
              private injector: Injector) { }

  ngOnInit(): void {
      this.loadModule().subscribe(componentRef => this.container?.createComponent(componentRef));
  }

  loadModule(): Observable<ComponentFactory<any>> {

    return from(Promise.resolve((this.load as LoadChildrenCallback)()))
    .pipe(
      switchMap(module => {
        this.component = module.rootComponent;
        return this.compiler.compileModuleAsync(module as Type<unknown>);
      }),
      map(factory => factory.create(this.injector)),
      map(factoryRef => factoryRef.componentFactoryResolver.resolveComponentFactory(<Type<any>>this.component)),
      catchError(err => { console.error(err); return throwError(err); })
    )
  }

}

