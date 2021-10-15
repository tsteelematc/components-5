import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../customer.service";

interface DisplayCustomerInfo {
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: number;
}

@Component({
    selector: 'app-customer-info-form',
    templateUrl: './customer-info.component.html',
    styleUrls: ['./customer-info.component.css']
})
export class CustomerServiceComponent implements OnInit {

    // Magic ctor DI (dependency injection)
  constructor(
    private customerSvc: CustomerService
  ) { }
    
}