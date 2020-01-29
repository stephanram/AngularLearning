import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  /*
              <p>
                {{5+5}} works!
              </p>
              <p>
                {{GreetUser()}}
              </p>
              //Property binding
              <input id={{name}} type="text" value="Stephan"/>
              <input id={{name}} [disabled]="isDiabled" type="text" value="Stephan"/>
              <input id={{name}} bind-disabled="isDiabled" type="text" value="Stephan"/>
              <br/>
              //Class binding
              <h4 class = "text-success">{{GreetUser()}}</h4>
              <h4 [class] = "cssSuccess">{{GreetUser()}}</h4>
              <h4 [class.text-error] = "hasError">{{GreetUser()}}</h4>
              <h4 [ngClass] = "messageClass">Multiple Classes</h4>
              //style binding
              <h4 [style.color] = '"yellow"' >Style binding 1</h4>
              <h4 [style.color] = "applyStyleBinding ? 'blue' : 'yellow'">Style binding 2</h4>
              <h4 [ngStyle] = "styleClass">Style binding 3</h4>
              //Event binding
              <br/>
              <button (click) = "WelcomeUser($event)" >Event1</button>
              <br/>
              <button (click) = "greeting = 'Hello'" >Event2</button>
              {{greeting}}
              <br/>
              <br/>
              //Template Reference
              <input #myInput type="text">
              <button (click) = "logMessage(myInput.value)">Log</button>
              <br/>
              //Two way binding Model
              <input [(ngModel)] = "name" type="text">
              {{name}}
              <br/>
              <div *ngIf = "displayName; then thenBlock; else elseBlock"></div>

              //ngIf directive
              <ng-template #thenBlock>
                <h2>Display Name </h2>
              </ng-template>
              <ng-template #elseBlock>
                <h2>Hidden Name </h2>
              </ng-template>
              <br/>
              <div [ngSwitch]="color">
                <div *ngSwitchCase = "'red'">Red Color</div>
                <div *ngSwitchCase = "'blue'">Blue Color</div>
                <div *ngSwitchCase = "'green'">Green Color</div>
                <div *ngSwitchDefault>Pick Again</div>
              </div>
              //ng For
              <br/>
              <div *ngFor = "let color of colorList; index as i">
                <h4 [style.color] = "color">{{i}}</h4>
              </div>
  */
  template: ` <br/>
              <h4> {{parentData}} </h4>
              <button (click) = "sendMessage($event)" >click</button>
            `,
  styles: [`
    p {
      background-color : red;
    }
    .text-success {
      color : blue;
    }
    .text-error {
      color : yellow;
    }
    .text-special {
      font-style : italic;
    }

 `]
})
export class TestComponent implements OnInit {
  name: string;
  isDiabled: boolean;
  cssSuccess: string;
  cssError: string;
  cssSpecial: string;
  hasError: boolean;
  isSpecial: boolean;
  messageClass: any;
  applyStyleBinding: boolean;
  styleClass: any;
  greeting: string;
  displayName: boolean;
  color: string;
  colorList: Array<string>;
  @Input() parentData: string;
  @Output() childEvent: EventEmitter<any>;

  constructor() {
    this.name = '';
    this.isDiabled = true;

    this.cssSuccess = 'text-success';
    this.cssError = 'text-error';
    this.cssSpecial = 'text-special';

    this.hasError = true;
    this.isSpecial = true;

    this.messageClass = {
      'text-success' : !this.hasError,
      'text-error' : this.hasError,
      'text-special' : this.isSpecial
    };

    this.applyStyleBinding = true;

    this.styleClass = {
      color : 'blue',
      fontStyle : 'italic',
    };

    this.displayName = false;

    this.color = 'qweer';

    this.colorList = ['red', 'blue', 'green'];

    this.childEvent = new EventEmitter();

  }

  WelcomeUser = (e: any): void => {
    console.log(e);
  }

  GreetUser = (): string => {
    return 'Welcome ' + this.name;
  }

  logMessage = (message: string): void => {
    console.log(message);
  }

  sendMessage = (event): void => {
    console.log('sendMessage');
    this.childEvent.emit('Hei, Stephan');
  }

  ngOnInit() {
  }

}
