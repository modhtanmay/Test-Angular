import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private formBuilder: FormBuilder) { }

    // profile = new FormGroup({
    //     firstName: new FormControl('', Validators.required),
    //     lastName: new FormControl(''),
    //     address: new FormGroup({
    //         pin: new FormControl(''),
    //         street: new FormControl(''),
    //         city: new FormControl(''),
    //         state: new FormControl('')
    //     }),
    //     academics: new FormGroup({
    //         ssc: new FormControl(''),
    //         hsc: new FormControl(''),
    //         degree: new FormControl('')
    //     })
    // });

    // Using FormBuilder Service

    profile = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: [''],
        address: this.formBuilder.group({
            pin: [''],
            street: [''],
            city: [''],
            state: ['']
        }),
        academics: this.formBuilder.group({
            ssc: [''],
            hsc: [''],
            degree: ['']
        }),
        info: this.formBuilder.array([
            this.formBuilder.control('')
        ])

    });

    get info() {
        return this.profile.get('info') as FormArray;
    }


    onSubmit() {
        console.log(this.profile.value);
        // alert("FirstName" + this.profile.value.address.pin + "LastName" + this.profile.value.lastName);
    }

    updateProfile() {
        this.profile.patchValue({
            firstName: 'Tanmay',
            address: {
                city: 'Palanpur'
            },
            academics: {
                degree: 'B.Tech'
            }
        })
    }

    addInfo() {
        this.info.push(this.formBuilder.control(''));
    }

    ngOnInit(): void {
    }

}
