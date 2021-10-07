import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

// shaping the data 
interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // Magic ctor DI (Dependency Injection) = defining a parameter in the constructor
  constructor(
    // I want to be able to make calls to our pizza service
    private pizzaSvc: PizzaService
  ) { }

  pizzaToppings: PizzaToppingDisplay[] = [];

  ngOnInit(): void {
    const pt = this.pizzaSvc.getPizzaToppingsFromWebService();
    console.log(pt);

    this.pizzaToppings = pt.map(
      x => ({
        ...x
        , checked: false
      })
    );
  }

}
