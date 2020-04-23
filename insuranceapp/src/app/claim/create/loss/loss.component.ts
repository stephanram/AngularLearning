import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularMatControlModule } from '../../../ui-module/angular-mat-control/angular-mat-control.module'

@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})

export class LossComponent implements OnInit {
  lostDate: FormControl;
  lossForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.lostDate = new FormControl ('', [Validators.required]);
    this.lossForm = formBuilder.group({
      lostDate: this.lostDate
    });
  }

  ngOnInit(): void {
  }

}
