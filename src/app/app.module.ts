import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PizzaExtrasComponent } from './pizza-extras/pizza-extras.component';
import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [
        AppComponent,
        PizzaToppingsComponent,
        PizzaExtrasComponent,
        TjsMultiplicationComponent
    ],
    imports: [
        BrowserModule
        , FormsModule
        , BrowserAnimationsModule
        , MatCardModule
        , MatCheckboxModule
        , MatButtonModule
        , MatInputModule
        , MatFormFieldModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
