import { Component, OnInit, Input } from '@angular/core';
import { Validators, Validator } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { PAYMENT_METHOD_TYPE } from '../shared/misc/common-data';

@Component({
    moduleId: module.id,
    selector: 'payment-method',
    templateUrl: 'payment-method.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class PaymentMethodComponent implements OnInit {
    @Input('form')
    public paymentForm: FormGroup;

    ngOnInit() {
        this.paymentForm.controls['type'].valueChanges.subscribe(x => {
            const cardCtrl = <FormControl>this.paymentForm.controls['cardNo'];
            const bankCtrl = <FormControl>this.paymentForm.controls['bankAccountNo'];
            if (x === PAYMENT_METHOD_TYPE.BANK) {
                cardCtrl.setValidators(null);
                cardCtrl.updateValue('');
                bankCtrl.setValidators(<any>Validators.required);
            }

            if (x === PAYMENT_METHOD_TYPE.CARD) {
                cardCtrl.setValidators(<any>Validators.required);
                bankCtrl.setValidators(null);
                bankCtrl.updateValue('');
            }
        })
    }
}