import { Injectable } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_a } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingFromWebService(){
    const ptFromWeb = [
      {
        name: 'Pepperroni'
        , price: 1.75
      }
      , {
        name: 'Olives'
        , price: 2.25
      }
      , {
        name: 'Extra Cheese'
        , price: 0.75
      }
    ];

    return ptFromWeb;
  }

}
