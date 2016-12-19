import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { UniFormComponent } from './uni-form/uni-form.component';
import { FormElementComponent } from './form-element/form-element.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, AlertModule],
    declarations: [AppComponent, UniFormComponent, FormElementComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}
