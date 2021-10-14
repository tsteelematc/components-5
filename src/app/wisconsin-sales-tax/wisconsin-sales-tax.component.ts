import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wisconsin-sales-tax',
  templateUrl: './wisconsin-sales-tax.component.html',
  styleUrls: ['./wisconsin-sales-tax.component.css']
})
export class WisconsinSalesTaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // TS "getter" property ! ! !
  // get total() {
  //   return this.pizzaToppings
  //     .filter(
  //       x => x.checked
  //     )
  //     .reduce(
  //       (acc, foo) => acc + foo.price
  //       , 0
  //     )
  //   ;
  // };

}
