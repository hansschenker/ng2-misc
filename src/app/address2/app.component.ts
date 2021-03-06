import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Customer } from '../shared/interfaces/customer.interface';
import { AddressComponent } from '../address/address.component';

import { TranslateService } from '../translate';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES, AddressComponent]
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder, private trans: TranslateService) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
        // this.trans.currentLang = 'zh';
        this.trans.setDefaultLang('en');
        this.trans.enableFallback(true);

        console.log(this.trans.instant('hello_greet_who', ['ms.', 'jecelyn']));
        ;
        
    }

    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addAddress() {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
    }
}