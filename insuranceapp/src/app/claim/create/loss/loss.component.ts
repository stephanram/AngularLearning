import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, Form } from '@angular/forms';
import { AngularMatControlModule } from '../../../ui-module/angular-mat-control/angular-mat-control.module'

@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})

export class LossComponent implements OnInit {
  lossForm: FormGroup;

  lostDate: FormControl;
  lostTime: FormControl;
  lostPlace: FormControl;
  driveReason: FormControl;
  isReportedToPolice: FormControl;
  firNumber: FormControl;
  constructor(private formBuilder: FormBuilder) {
    this.lostDate = new FormControl ('', [Validators.required]);
    this.lostTime = new FormControl('', [Validators.required]);
    this.lostPlace = new FormControl('', [Validators.required]);
    this.driveReason = new FormControl('', [Validators.required]);
    this.isReportedToPolice = new FormControl(false, [Validators.required]);
    this.firNumber = new FormControl('', []);

    this.lossForm = formBuilder.group({
      lostDate: this.lostDate,
      lostTime: this.lostTime,
      lostPlace: this.lostPlace,
      driveReason: this.driveReason,
      isReportedToPolice: this.isReportedToPolice,
      firNumber: this.firNumber
    });
  }

  ngOnInit(): void {
  }

}

