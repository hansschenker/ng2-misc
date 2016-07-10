import { Component, OnInit } from '@angular/core';
import { Validators, Validator } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
          this.myForm = new FormGroup({
              name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
              address: new FormGroup({
                  address1: new FormControl('', <any>Validators.required),
                  postcode: new FormControl()
              })
          });

        this.myForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            address: this._fb.group({
                address1: ['', <any>Validators.required],
                postcode: []
            })
        });

        // subscribe to form changes  
        this.subcribeToFormChanges();

        (<FormControl>this.myForm.controls['name'])
            .updateValue('John', { onlySelf: true });

    }

    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;
        
        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

    save(form: any) {
        this.submitted = true;
        console.log(form);
    }
}

export interface User {
    name: string;
    address: {
        address1?: string;
        postcode?: string;
    }
}

// export interface User {
//     username: any;
//     password: any;
//     confirmPassword: any;
//     email: any;
//     name: {
//         first: any;
//         last: any;
//     }
// }
