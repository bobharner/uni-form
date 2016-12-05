import { Component, OnInit, Input } from '@angular/core';
import { Form } from './form.model';
import { FormElement } from '../form-element/form-element.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
