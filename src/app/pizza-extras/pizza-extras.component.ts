import { Component, OnInit } from '@angular/core';

interface ExtrasDisplay {
    name: string;
    price: number;
    imageFile: string;
  }
  
@Component({
  selector: 'app-pizza-extras',
  templateUrl: './pizza-extras.component.html',
  styleUrls: ['./pizza-extras.component.css']
})
export class PizzaExtrasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
