import { Component } from '@angular/core';

import { Form } from './model/form';
import { FormElement } from './model/form-element';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Uni-Form';
    form: Form;

    Constructor() {
        // FIXME: Temporarily hard-coding a list of form elements

        this.form = new Form();
        this.form.elements = [
            new FormElement('pageBreak', 'This is a section header'),
            new FormElement('checkbox', 'This is a checkbox'),
            new FormElement('inputText', 'This is an input text box'),
        ];

    }
}
