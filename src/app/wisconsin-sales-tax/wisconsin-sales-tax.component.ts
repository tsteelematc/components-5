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

  subtotal = 0;
  wisconsinSalesTaxRate = 0.05;
  wisconsinSalesTax = 0;

  get calculateTax() {
    return this.wisconsinSalesTax = this.subtotal * this.wisconsinSalesTaxRate;
  };
}
