import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

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

  // Magic ctor DI (dependency injection)
  constructor(
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
  };

 //console.log(this.availablePizzaToppings);

 // TS Getter property

  get totalPrice(){
    return this.pizzaToppings
      .filter(
        x => x.checked
      )
      .reduce(
        (acc, x) => acc + x.price 
        , 0
      )
      ;
  };

  checkAll = ()  => this.pizzaToppings = this.pizzaToppings.map(
    x => ({
      ...x 
      , checked: true
    })
  );

  clearAll = () => this.pizzaToppings = this.pizzaToppings.map(
    x => ({
      ...x
      , checked: false
    })
  );

  // calculateTotal = () => {
  //   this.totalPrice = this.availablePizzaToppings
  //     .filter(x => x.checked)
  //       .reduce(
  //         (acc, x) => acc + x.price 
  //         , 0
  //       )
  //     ;

  // }
}


