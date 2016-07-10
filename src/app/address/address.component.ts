import { Component, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AddressComponent {
    @Input('group')
    public adressForm: FormGroup;
}