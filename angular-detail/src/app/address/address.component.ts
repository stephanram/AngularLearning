import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass']
})
export class AddressComponent implements OnInit {
  addressInfo: any;
  // tslint:disable-next-line:no-input-rename
  @Input('name') firstName: string;

  constructor() {
  }

  ngOnInit() {
    this.addressInfo = {
      firstName: this.firstName,
      lastName: 'Thinagaran',
      email: 'stephanram@gmail.com',
      phone: [
        '4587896654',
        '5565899945'
      ]
    };
  }

}
