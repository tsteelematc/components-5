import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  constructor() { }

  getExtrassFromWebService() {

    const extrasFromWeb = [
      {
        name: 'Coke'
        , price: 1.75
        , imageFile: 'coke.jpg'
      }
      , {
        name: 'Sprite'
        , price: 1.75
        , imageFile: 'sprite.jpg'
      }      
      , {
        name: 'Diet Coke'
        , price: 1.75
        , imageFile: 'diet.jpg'
      }      
      , {
        name: 'Fanta Orange'
        , price: 1.75
        , imageFile: 'fanta.jpg'
      }
    ];

    return extrasFromWeb;
  }
}
