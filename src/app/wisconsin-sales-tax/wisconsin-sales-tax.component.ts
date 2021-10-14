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

  subtotal = "";
  wisconsinSalesTaxRate = 0.05;

  get wisconsinSalesTax() {
    return  Number(this.subtotal) * this.wisconsinSalesTaxRate;
  };
}
