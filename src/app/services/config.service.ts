import { Injectable, Inject } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
    console.log('config service initialized')
    console.log(this.configToken)
   }
}
