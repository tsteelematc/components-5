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