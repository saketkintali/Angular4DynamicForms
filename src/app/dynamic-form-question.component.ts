import { Component, Input, ElementRef, ViewChild , AfterViewInit } from '@angular/core';
import { FormGroup, NgControl }        from '@angular/forms';

import { QuestionBase }     from './question-base';

@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html',
  
  styleUrls:['./dynamic-form-question.component.css'],
})

export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @ViewChild('target') target: any;

   constructor(private elRef: ElementRef) {
  }

 
 

 checkCondition(value:string) {
      // if(value == 'valueNotNull') {
      //   console.log('ttttttt',this.form.controls.brave.value)
      // return  this.form.controls.brave.value != "" 
      // }
      //  console.log('ttttttt',value)
      //   console.log('ttttttt',eval(value))
      return eval(value);
    
    }
  get isValid() { 

if(this.form.controls[this.question.key]){
  return this.form.controls[this.question.key].valid; 
} 
 }


    handleClick(){
         console.log(this.elRef.nativeElement.querySelector('.hide-button'));
    }


}
