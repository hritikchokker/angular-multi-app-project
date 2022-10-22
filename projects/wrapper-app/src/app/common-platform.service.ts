import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class CommonPlatformService {

  constructor() {
    console.log('service is called');
  }
}
