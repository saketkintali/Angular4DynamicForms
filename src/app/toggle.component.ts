import { 
    Component, Input, trigger, state, animate, transition, style
} from '@angular/core';

@Component({
    selector: 'toggle',
    template: `
     <div class="modal" [@toggleState]="shouldToggle">
        <ng-content></ng-content>
    </div>
    `,
    styles: [
  `
  .modal {
    background-color:#ffffff;
    border:1px solid lightgray;
    box-shadow:0 0 7px rgba(0,0,0,.2);
    width:40%;
    text-align:center;
    padding:30px;
    border-radius:6px;
    font-weight:400;
    margin:40px auto;
    overflow-y: hidden;
  }
  `
  ],
 animations: [
    trigger('toggleState', [
    // What happens when toggleState is true
      state('true' , style({ maxHeight: '200px' })),
      // What happens when toggleState is false
      state('false', style({ maxHeight: 0, padding: 0, display: 'none' })),
        // transition
      transition('* => *', animate('300ms')),
    ])
  ],
})
export class ToggleComponent {
      @Input() shouldToggle = false;
}