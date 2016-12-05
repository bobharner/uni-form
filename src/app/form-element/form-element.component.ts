import { Component, OnInit, Input } from '@angular/core';
import { FormElement } from './form-element.model';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  formElement: FormElement;

  @Input() element: FormElement;

  constructor() { }

  ngOnInit() {
  }

}
