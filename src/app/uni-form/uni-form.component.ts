import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UniForm } from '../model/uni-form';
import { FormElement } from '../model/form-element';
// import { FormElementService } from '../form-element/form-element.service';

@Component({
    selector: 'uni-form',
    templateUrl: './uni-form.component.html',
    styleUrls: ['./uni-form.component.css']
})
export class UniFormComponent implements OnInit {

    // @Input()
    form: UniForm;

    constructor() {
        this.form = new UniForm();
        this.form.elements = [
            new FormElement('pageBreak', 'This is a section header'),
            new FormElement('checkbox', 'This is a checkbox'),
            new FormElement('inputText', 'This is an input text box'),
        ];
    }

    ngOnInit() {
    }

}
