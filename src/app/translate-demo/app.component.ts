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
    public margin = -618 //-618;

    constructor(private _fb: FormBuilder, private trans: TranslateService) { }

    ngOnInit() {
        
        // this.trans.currentLang = 'zh';
        this.trans.setDefaultLang('zh');
        this.trans.enableFallback(true);

        this.trans.onLangChange.subscribe(x => console.log(x));

        this.trans.use('en');
        this.trans.use('zh');

        console.log(this.trans.instant('hello greet', ['ms.', 'jecelyn']));
        ;

    }
    panIt(e: any, img: HTMLImageElement) {
        // document.getElementById('me')
        
        const margin = this.margin; // +img.style.marginLeft.replace('px', '');
        var delta: number = margin + e.deltaX;

        console.log(e, img, margin, delta);
        console.log(delta, margin);
        if (delta >= -1750 && delta <= -150) {
            // img.style.marginLeft = margin + e.deltaX
            this.margin  = margin + e.deltaX;
        }
    }
}