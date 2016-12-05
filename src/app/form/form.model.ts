import { FormElement } from '../form-element/form-element.model';

/**
 * A named collection of form elements
 */
export class Form {
    name: string;
    elements: FormElement[];

    Constructor(name: string, elements: FormElement[]) {
        this.name = name;
        this.elements = elements;
    }
}