import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, Form } from '@angular/forms';
import { CountryService } from '../../../services/country.service';
import { VehicleService } from '../../../services/vehicle.service';
import { CommonService } from '../../../services/common.service';
import { LicenseType } from '../../../models/licenseType';

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

  constructor(private formBuilder: FormBuilder,
              private countryService: CountryService,
              private vehicleService: VehicleService,
              private commonService: CommonService) {
    // this.lostDate = new FormControl ('', [Validators.required]);
    // this.lostTime = new FormControl('', [Validators.required]);
    // this.lostPlace = new FormControl('', [Validators.required]);
    // this.driveReason = new FormControl('', [Validators.required]);
    // this.isReportedToPolice = new FormControl(false, [Validators.required]);
    // this.vehicleSpeed = new FormControl('', [Validators.required]);
    // this.firNumber = new FormControl('', []);
    // this.vehicleLocation = new FormControl('', [Validators.required]);
    // this.peopleCount = new FormControl('', [Validators.required]);
    // this.policeStation = new FormControl('', [Validators.required]);
    // this.accidentStatement = new FormControl('', [Validators.required]);
    // this.driverName =  new FormControl('', [Validators.required]);
    // this.driverContactPhone = new FormControl('', [Validators.required]);
    // this.driverLicense = new FormControl('', [Validators.required]);
    // this.licenseEffectiveFrom = new FormControl('', [Validators.required]);
    // this.licenseEffectiveTo = new FormControl('', [Validators.required]);
    // this.dateOfBirth = new FormControl('', [Validators.required]);
    // this.gender = new FormControl('', [Validators.required]);
    // this.vehicleType = new FormControl('', [Validators.required]);
    // this.licenseType = new FormControl('', [Validators.required]);
    // this.issuingRTO = new FormControl('', [Validators.required]);
    // this.insuredRelation = new FormControl('', [Validators.required]);

    this.lostDate = new FormControl ('2020-10-10', [Validators.required]);
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
    this.driverName =  new FormControl('Test', [Validators.required]);
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
    this.countryService.getCountries().subscribe(response => {
        this.countryList = response;
    });

    this.genderList = this.commonService.getGender();
    this.vehicleTypeList = this.vehicleService.getVehicleType();
    this.licenseTypeList = this.vehicleService.getLicenseType();
  }

  getSelectedCountry($event) {
    this.selectedCountry = $event.value;
  }

  getSelectedGender($event) {
    this.selectedGender = $event.value;
  }

  getSelectedVehicleType($event) {
    this.selectedVehicleType = $event.value;
  }

  getSelectedLicenseType($event) {
    this.selectedLicenseType = $event.value;
  }

  onFileChanged($event) {
    // this.uploadedFile = $event.target.Files[0];
    // const fileReader = new FileReader();
    // fileReader.onload =  (event) => {
    //   console.log(event.currentTarget);
    // };

  }

  onSubmit() {
    console.log('Submitted');
    console.log(this.lossForm.value);
  }
}

