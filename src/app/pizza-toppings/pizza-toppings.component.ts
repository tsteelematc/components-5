import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface pizzaToppingDisplay {
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

  // Magic ctor DI (dependency injection)
  constructor(
    private pizzaSvc: PizzaService
  ) { }
  
  pizzaToppings: pizzaToppingDisplay[] = [];

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
