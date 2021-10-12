import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Components App';

  pizzas = [
    "Pizza 1"
  ];

  addPizza = () => this.pizzas = [
    ...this.pizzas
    , `Pizza ${this.pizzas.length + 1}`
  ];

  pizzaToppingsChanged = (pts: any) => console.log(pts);
}
