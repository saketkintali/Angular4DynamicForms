import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { QuestionBase } from './question-base';
import { checkBoxQuestion} from './question-checkboxes';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      console.log('question',question)
         if(question.controlType == 'checkboxes') {
           let CheckBoxQuestion = <checkBoxQuestion>question;

           let tempArr = [];
               for(let i=0;i < CheckBoxQuestion.options.length; i++){
tempArr.push(new FormControl())
               }
 group[question.key] = new FormArray(tempArr);

                

            
            
        } else {
group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
        }
        
 
      });
    return new FormGroup(group);
  }
}
