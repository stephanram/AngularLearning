import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `'<p>
                {{name}} works!
              </p>'`,
  styles: [`
    p {
      background-color : red;
    }
 `]
})
export class TestComponent implements OnInit {
  public name = 'Stephan';
  constructor() { }

  ngOnInit() {
  }

}
