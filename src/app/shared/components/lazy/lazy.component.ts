
import { Compiler, Component, Injector, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { LoadChildrenCallback } from '@angular/router';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.sass']
})
export class LazyComponent<T> implements OnInit {

  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  public container: ViewContainerRef | undefined;

  @Input()
  load: LoadChildrenCallback | undefined;
  component: Type<any> | undefined;

  constructor(private compiler: Compiler, 
              private vcr: ViewContainerRef, 
              private injector: Injector) { }

  ngOnInit(): void {
      this.loadModule();
  }

  async loadModule() {
    let module = await (<LoadChildrenCallback>this.load)();
    this.component = module.rootComponent;
    let factory = await this.compiler.compileModuleAsync(module);
    let factoryRef = factory.create(this.injector)
    let resolvedComponent = factoryRef.componentFactoryResolver
                                      .resolveComponentFactory(<Type<any>>this.component);
    this.container?.createComponent(resolvedComponent);
  }

}
