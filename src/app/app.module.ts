import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { TipAmountComponent } from './tip-amount/tip-amount.component';
import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlAdditionComponent } from './al-addition/al-addition.component';
import { MatDialogModule } from '@angular/material/dialog';
import { WisconsinSalesTaxComponent } from './wisconsin-sales-tax/wisconsin-sales-tax.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { TdjRollDiceComponent } from './tdj-roll-dice/tdj-roll-dice.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    AlAdditionComponent,
    TjsMultiplicationComponent,
    TjsAdditionComponent,
    TjsMultiplicationComponent,
    WisconsinSalesTaxComponent,
    TipAmountComponent,
    TdjRollDiceComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatCheckboxModule
    , MatButtonModule
    , MatSliderModule
    , MatDialogModule
    , MatFormFieldModule
    , MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
