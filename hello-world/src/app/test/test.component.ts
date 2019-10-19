import { Component, OnInit } from '@angular/core';

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
  */
  template: ` <br/>
              //Template Reference
              <input #myInput type="text">
              <button (click) = "logMessage(myInput.value)">Log</button>
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

  constructor() {
    this.name = 'Stephan';
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

  ngOnInit() {
  }

}
