import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.sass']
})
export class DateComponent implements OnInit {
  message: string;
  constructor() {
    this.message = new Date().toDateString();
  }

  ngOnInit() {
    this.realTimeClock();
  }

  public realTimeClock(): void {
    setInterval(() => {
      this.message = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString() ;
    }, 1000);
  }
}
