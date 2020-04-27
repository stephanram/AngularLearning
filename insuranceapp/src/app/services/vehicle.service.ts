import { Injectable } from '@angular/core';
import { VehicleType } from '../models/vehicleType';
import { LicenseType } from '../models/licenseType';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicleType() {
    return VehicleType;
  }

  getLicenseType() {
    return LicenseType;
  }

}
