import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl(''),
        address: new FormGroup({
            pin: new FormControl(''),
            street: new FormControl(''),
            city: new FormControl(''),
            state: new FormControl('')
        }),
    });

    onSubmit() {
        console.log(this.profile.value);
        alert("FirstName" + this.profile.value.address.pin + "LastName" + this.profile.value.lastName);
    }
    constructor() { }

    ngOnInit(): void {
    }

}
