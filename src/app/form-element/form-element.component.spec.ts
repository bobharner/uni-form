/**
 * Jasmine unit tests for the form-element component
 */

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormElementComponent } from './form-element.component';

describe('FormElementComponent', () => {
    let component: FormElementComponent;
    let fixture: ComponentFixture<FormElementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormElementComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
