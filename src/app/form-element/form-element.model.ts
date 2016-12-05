/**
 * A part of a form (such as a form field or page break)
 */
export class FormElement {
    type: string;
    label: string;

    /**
     * Build a new FormElement using a name and type
     */
    constructor(type: string, label: string) {
        this.type = type;
        this.label = label;
    }
}