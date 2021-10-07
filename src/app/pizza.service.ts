import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromWebService() {

    const ptFromWeb = [
      {
        name: 'Pepperoni'
        , price: 1.75
      }
      , {
        name: 'Olives'
        , price: 2.25
      }      
      , {
        // Extra cheese should be cheaper...
        name: 'Extra Cheese'
        , price: 0.75
      }
    ];

    return ptFromWeb;
  }
}
