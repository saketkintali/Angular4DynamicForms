import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionService } from './question.service';
import { QuestionControlService }    from './question-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';


  constructor(private qcs: QuestionControlService, private qs: QuestionService) {  }



  ngOnInit() {
   
    this.form = this.qcs.toFormGroup(this.questions);
   console.log('vvvvvvvvvvvvvvvvvvvv',this.form);
  }

  onSubmit() {

let obj = this.form.value;
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 } 


let dupForm = this.form;
     
     let checkService = this.qs.getQuestions();
      for(let i=0; i<checkService.length; i++) {
          if(checkService[i].condition){
              let conditionVal = eval(checkService[i].condition)
      if(!conditionVal || checkService[i].controlType =="template") {
         delete copy[checkService[i].key];
         console.log('rrrrrrrrrrrr',this.form.value,copy)
      }
     }
    }
    this.payLoad = JSON.stringify(copy);
    }
}
