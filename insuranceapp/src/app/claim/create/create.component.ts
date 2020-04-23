import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  claimTypes: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.claimTypes = [
      {
        label : 'Loss', icon: '', routerLink: 'loss'
      },
      {
        label : 'Damage', icon: '', routerLink: 'damage'
      }
    ]
  }

}
