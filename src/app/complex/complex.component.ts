import { Component, OnInit } from '@angular/core';
import { Validators, Validator } from '@angular/common';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { PAYMENT_METHOD_TYPE, User, LANGUAGES } from '../shared/misc/common-data';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES, PaymentMethodComponent]
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;
    public languages = Object.assign([],LANGUAGES);

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            preference: this._fb.group({
                language: ['EN'],
                nickName: ['aa']
            }),
            addresses: this._fb.array([
                this.initAddress(),
            ]),
            paymentMethods: this._fb.array([
                this.initPaymentMethod(),
                this.initPaymentMethod(PAYMENT_METHOD_TYPE.BANK)
            ])
        });
    }

    initAddress() {
        return this._fb.group({
            street: [''],
            postcode: ['']
        });
    }

    addAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    initPaymentMethod(type: string = PAYMENT_METHOD_TYPE.CARD) {
        return this._fb.group({
            type: [type],
            cardNo: ['', type === PAYMENT_METHOD_TYPE.CARD ? <any>Validators.required : null],
            bankAccountNo: ['', type === PAYMENT_METHOD_TYPE.BANK ? <any>Validators.required : null]
        });
    }

    addPaymentMethod() {
        const control = <FormArray>this.myForm.controls['paymentMethods'];
        control.push(this.initPaymentMethod());
    }

    removePaymentMethod(i: number) {
        const control = <FormArray>this.myForm.controls['paymentMethods'];
        control.removeAt(i);
    }

    save(model: User) {
        // call API to save
        console.log(model);
    }
}