import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'aspire-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line: no-inferrable-types
  title = 'Auto Insurance Claim Cycle Management';
  logoPath = '../assets/logo.png';
}
