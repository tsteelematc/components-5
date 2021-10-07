import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  // getting the data back from the method below in the pizza toppings component.ts
  getPizzaToppingsFromWebService() {
    const pizzaToppingsFromWeb = [
      {
        name: 'Pepperoni'
        , price: 1.75
      }
      , {
        name: 'Sausage'
        , price: 2.00
      }
      , {
        name: 'Canadian Bacon'
        , price: 1.50
      }
      , {
        name: 'Black Olives'
        , price: 0.50
      }
      , {
        name: 'Mushrooms'
        , price: 0.50
      }
      , {
        name: 'Extra Cheese'
        , price: 0.75
      }
      
    ];
    return pizzaToppingsFromWeb;
  }
}
