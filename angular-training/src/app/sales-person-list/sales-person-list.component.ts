import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
    selector: 'app-sales-person-list',
    templateUrl: './sales-person-list.component.html',
    styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


    salesPersonList: SalesPerson[] = [
        new SalesPerson("Anup", "kumar", "anup.kumar@gmail.com", 80000),
        new SalesPerson("Anup", "kumar", "anup.kumar@gmail.com", 40000),
        new SalesPerson("Anup", "kumar", "anup.kumar@gmail.com", 30000),
        new SalesPerson("Tanmay", "Modh", "anup.kumar@gmail.com", 100000)
    ]

    constructor() { }

    ngOnInit(): void {
    }


}
