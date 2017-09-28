import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
     
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
   
    console.log(this.questions)
  }
}
