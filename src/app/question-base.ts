export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  condition: any;
  showHelp: boolean;
  labelHtmlClass: string;
  fieldHtmlClass: string;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
       condition?: any,
       showHelp?:boolean,
      labelHtmlClass?: string,
      fieldHtmlClass?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
     this.showHelp = !!options.showHelp;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
       this.condition = options.condition || true;
    this.labelHtmlClass = options.labelHtmlClass || '';
  this.fieldHtmlClass = options.fieldHtmlClass || ''; 
  }
}
