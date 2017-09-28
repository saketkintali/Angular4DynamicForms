import { Injectable }       from '@angular/core';
import { RadiosQuestion } from './question-radios';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { checkBoxQuestion }  from './question-checkboxes';
import { Template }  from './question.template';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new Template({
          key: 'ReplaceVehicle',
          template: "<div class='section-header section-header--form clearfix'><h2 id='replaceVehicleHeading'>Replace Vehicle</h2></div>",
      }),

        new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        labelHtmlClass: 'dummyclass',
        fieldHtmlClass: 'testclass',
        value: 'Bombasto',
        type: 'name',
        showHelp: true,
        required: true,
       
        
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        labelHtmlClass: 'dummyclass',
        fieldHtmlClass: 'testclass',
        type: 'email',
       
         condition: true,
      }),

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        labelHtmlClass: 'dummyclass',
        fieldHtmlClass: 'testclass',
       options: [
           {key: '',  value: 'Select'},
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
    
        value: ''
       
      }),

      new RadiosQuestion({
        key: 'gender',
        label: 'Gender',
        labelHtmlClass: 'dummyclass',
        fieldHtmlClass: 'testclass',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'},
        ],
       condition: 'this.form.controls.brave.value == \'solid\''
      }),

      new checkBoxQuestion({
        key: 'checkValue',
        label: 'Check Value',
        labelHtmlClass: 'dummyclass',
        fieldHtmlClass: 'testclass',
        options: [
          {key: 'good',  value: 'Good'},
          {key: 'bad',  value: 'Bad'},
          {key: 'neutral',   value: 'Neutral'},
        ],
      
      }),

    
 ];

    return questions;
  }
}
