import { Injectable } from '@angular/core';
import { Gender } from '../models/gender';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getGender() {
    return Gender;
  }
}
