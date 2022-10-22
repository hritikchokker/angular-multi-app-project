import { Component } from '@angular/core';
import { CommonPlatformService } from 'projects/wrapper-app/src/app/common-platform.service';

@Component({
  selector: 'second-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-app';

  constructor(private commonPlatService: CommonPlatformService) {

  }
}
