import { Component } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { ProfileGuard } from './core/guards/profile.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'LazyLoader';
  view = false;
  constructor(private router: Router) {
  }
  public loadView() { return import('./modules/view/view.module').then(x => x.ViewModule); }
  public loadProfile() { return import('./modules/profile/profile.module').then(x => x.ProfileModule); }
}

