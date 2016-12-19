/**
 * Jasmine unit tests for the uni-form component 
 */

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UniFormComponent } from './uni-form.component';

describe('UniFormComponent', () => {
    let component: UniFormComponent;
    let fixture: ComponentFixture<UniFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UniFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UniFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
