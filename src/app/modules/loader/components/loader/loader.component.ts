import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from 'src/app/modules/profile/components/profile/profile.component';
import { ViewComponent } from 'src/app/modules/view/components/view/view.component';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  viewComponent = ViewComponent;
  profileComponent = ProfileComponent;

  ngOnInit(): void {
  }
  
  public loadView() { return import('../../../../modules/view/view.module').then(x => x.ViewModule); }
  public loadProfile() { return import('../../../../modules/profile/profile.module').then(x => x.ProfileModule); }
}
