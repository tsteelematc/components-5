import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-tip-amount',
  templateUrl: './tip-amount.component.html',
  styleUrls: ['./tip-amount.component.css']
})
export class TipAmountComponent implements OnInit {

  constructor(
    public pizzaSvc: PizzaService

  ) { }

  ngOnInit(): void {
  }

  tipPercent = 20;

  get tipAmount() {
    return this.pizzaSvc.total * (this.tipPercent / 100.0); 
  }
}
