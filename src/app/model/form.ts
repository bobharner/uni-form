import { FormElement } from '../model/form-element';

/**
 * A named collection of form elements
 */
export class Form {
    name: string;
    elements: FormElement<string>[];

    Constructor(name: string, elements: FormElement<string>[]) {
        this.name = name;
        this.elements = elements;
    }
};
