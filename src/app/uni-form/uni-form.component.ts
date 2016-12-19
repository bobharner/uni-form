import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Form } from '../model/form';
import { FormElement } from '../model/form-element';
// import { FormElementService } from '../form-element/form-element.service';

@Component({
    selector: 'uni-form',
    templateUrl: './uni-form.component.html',
    styleUrls: ['./uni-form.component.css']
})
export class UniFormComponent implements OnInit {

    // @Input()
    form: Form;

    constructor() {
        this.form = new Form();
        this.form.elements = [
            new FormElement('pageBreak', 'This is a section header'),
            new FormElement('checkbox', 'This is a checkbox'),
            new FormElement('inputText', 'This is an input text box'),
        ];
    }

    ngOnInit() {
    }

}
