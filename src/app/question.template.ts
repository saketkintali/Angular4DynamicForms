import { QuestionBase } from './question-base';

export class Template extends QuestionBase<string> {
  controlType = 'template';
    template: string;
 

  constructor(options: {} = {}) {
    super(options);
   
    this.template = options['template'] || '';
   
  }
}
