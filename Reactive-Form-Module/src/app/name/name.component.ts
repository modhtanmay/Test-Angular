import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

    name = new FormControl('Enter Name');
    email = new FormControl('Enter Email');

    updateName() {
        this.name.setValue('Modh');
    }
    constructor() { }

    ngOnInit(): void {
    }

}
