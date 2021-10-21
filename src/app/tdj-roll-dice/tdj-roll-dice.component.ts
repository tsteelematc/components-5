import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdj-roll-dice',
  templateUrl: './tdj-roll-dice.component.html',
  styleUrls: ['./tdj-roll-dice.component.css']
})
export class TdjRollDiceComponent implements OnInit {

  //Dependency Injection
  constructor() { }

  ngOnInit(): void {
  }

  //Finds a Number within given values
  getNumber = (max:number) => {
    const number = Math.trunc(Math.random()*max) + 1;
    return number;
  };

  rollDiceFour = () => {
    let max = 4; //Dice Value
    let rn = (this.getNumber(max));
    //Display Dice value to User
    console.log(`D4 ${rn}`);
  };

  rollDiceSix = () => {
    let max = 6; //Dice Value
    let rn = (this.getNumber(max));
    //Display Dice value to User
    console.log(`D6 ${rn}`);
  };

  rollDiceEight = () => {
    let max = 8; //Dice Value
    let rn = (this.getNumber(max));
    //Display Dice value to User
    console.log(`D8 ${rn}`);
  };

  rollDiceTen = () => {
    let max = 10; //Dice Value
    let rn = (this.getNumber(max));
    //Display Dice value to User
    console.log(`D10 ${rn}`);
  };

  rollDiceTwelve = () => {
    let max = 12; //Dice Value
    let rn = (this.getNumber(max));
    //Display Dice value to User
    console.log(`D12 ${rn}`);
  };

  rollDiceTwenty = () => {
    let max = 20; //Dice Value
    let rn = (this.getNumber(max));
    //Display Dice value to User
    console.log(`D20 ${rn}`);
  };


  areYouJoking = () => {
    console.log("are you joking?");
    
  };

}
