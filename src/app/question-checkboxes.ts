import { QuestionBase } from './question-base';

export class checkBoxQuestion extends QuestionBase<string> {
  controlType = 'checkboxes';
  
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    
    this.options = options['options'] || [];
  }
}
