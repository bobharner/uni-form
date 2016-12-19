/**
 * A part of a form (such as a form field or page break)
 */
export class FormElement<T> {
    elementType: string;
    label: string;

    /**
     * Build a new FormElement using a name and type
     */
    constructor(elementType: string, label: string) {
        this.elementType = elementType;
        this.label = label;
    }
};
