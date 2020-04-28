import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { CountryService } from '../../../services/country.service';
import { VehicleService } from '../../../services/vehicle.service';
import { CommonService } from '../../../services/common.service';

// validators
import { DateValidator } from '../../../custom-validators/dateValidator';

@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})

export class LossComponent implements OnInit {
  countryList: any;
  genderList: any;
  vehicleTypeList: any;
  licenseTypeList: any;

  selectedCountry: any;
  uploadedFile: any;
  selectedGender: any;
  selectedLicenseType: any;
  selectedVehicleType: any;

  lossForm: FormGroup;

  lostDate: FormControl;
  lostTime: FormControl;
  lostPlace: FormControl;
  driveReason: FormControl;
  isReportedToPolice: FormControl;
  firNumber: FormControl;
  vehicleSpeed: FormControl;
  vehicleLocation: FormControl;
  countries: FormControl;
  peopleCount: FormControl;
  policeStation: FormControl;
  accidentStatement: FormControl;
  driverName: FormControl;
  driverContactPhone: FormControl;
  driverLicense: FormControl;
  licenseEffectiveFrom: FormControl;
  licenseEffectiveTo: FormControl;
  dateOfBirth: FormControl;
  gender: FormControl;
  vehicleType: FormControl;
  licenseType: FormControl;
  issuingRTO: FormControl;
  insuredRelation: FormControl;

  lossFormError: any = {};

  constructor(formBuilder: FormBuilder,
              private countryService: CountryService,
              private vehicleService: VehicleService,
              private commonService: CommonService) {

    this.lostDate = new FormControl('', [Validators.required, DateValidator]);
    this.lostTime = new FormControl('12:00', [Validators.required]);
    this.lostPlace = new FormControl('Test', [Validators.required]);
    this.driveReason = new FormControl('Test', [Validators.required]);
    this.isReportedToPolice = new FormControl(true, [Validators.required]);
    this.vehicleSpeed = new FormControl('10', [Validators.required]);
    this.firNumber = new FormControl('12535', []);
    this.vehicleLocation = new FormControl('Algeria', [Validators.required]);
    this.peopleCount = new FormControl('10', [Validators.required]);
    this.policeStation = new FormControl('Test', [Validators.required]);
    this.accidentStatement = new FormControl('', [Validators.required]);
    this.driverName = new FormControl('Test', [Validators.required]);
    this.driverContactPhone = new FormControl('1234567890', [Validators.required]);
    this.driverLicense = new FormControl('sfsf', [Validators.required]);
    this.licenseEffectiveFrom = new FormControl('2020-10-10', [Validators.required]);
    this.licenseEffectiveTo = new FormControl('2020-10-10', [Validators.required]);
    this.dateOfBirth = new FormControl('2020-10-10', [Validators.required]);
    this.gender = new FormControl('m', [Validators.required]);
    this.vehicleType = new FormControl('0', [Validators.required]);
    this.licenseType = new FormControl('0', [Validators.required]);
    this.issuingRTO = new FormControl('sfdsf', [Validators.required]);
    this.insuredRelation = new FormControl('sdfsd', [Validators.required]);

    this.lossForm = formBuilder.group({
      lostDate: this.lostDate,
      lostTime: this.lostTime,
      lostPlace: this.lostPlace,
      driveReason: this.driveReason,
      isReportedToPolice: this.isReportedToPolice,
      firNumber: this.firNumber,
      vehicleSpeed: this.vehicleSpeed,
      vehicleLocation: this.vehicleLocation,
      peopleCount: this.peopleCount,
      policeStation: this.policeStation,
      accidentStatement: this.accidentStatement,
      driverName: this.driverName,
      driverContactPhone: this.driverContactPhone,
      driverLicense: this.driverLicense,
      licenseEffectiveFrom: this.licenseEffectiveFrom,
      licenseEffectiveTo: this.licenseEffectiveTo,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
      vehicleType: this.vehicleType,
      licenseType: this.licenseType,
      issuingRTO: this.issuingRTO,
      insuredRelation: this.insuredRelation
    });

  }

  ngOnInit(): void {

    //#region View Data
    this.countryService.getCountries().subscribe(response => {
      this.countryList = response;
    });
    this.genderList = this.commonService.getGender();
    this.vehicleTypeList = this.vehicleService.getVehicleType();
    this.licenseTypeList = this.vehicleService.getLicenseType();
    //#endregion

    //#region Control Validation subscribe
    this.lostDate.statusChanges.subscribe((status) => this.lossDateErrorHandler(status));
    //#region
  }

  //#region Events
  onFileChanged($event) {
    console.log($event);
  }

  onSubmit() {
    console.log('Submitted');
    console.log(this.lossForm.value);
  }
  //#endregion

  //#region Control Validations
  lossDateErrorHandler(status: any) {
    this.lossFormError.lostDate = '';
    console.log('Event emitted');
    if (status === 'INVALID') {
      if ((this.lostDate.touched) && (this.lostDate.errors)) {
        if (this.lostDate.errors.required) {
          this.lossFormError.lostDate = 'Lost Date is required';
        }
        else if (this.lostDate.errors.dateValidator) {
          this.lossFormError.lostDate = 'Lost Date is Invalid';
        }
      }
    }

  }

  //#endregion

}

