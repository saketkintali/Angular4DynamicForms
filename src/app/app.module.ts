import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { ToggleComponent } from './toggle.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent,ToggleComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
