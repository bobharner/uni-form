import { Component, OnInit, Input } from '@angular/core';

import { FormElement } from '../model/form-element';

@Component({
    selector: 'form-element',
    templateUrl: './form-element.component.html',
    styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

    formElement: FormElement<string>;

    @Input() element: FormElement<string>;

    constructor() { }

    ngOnInit() {
    }

};
