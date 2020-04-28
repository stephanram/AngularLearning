import { AbstractControl } from '@angular/forms';
import { } from 'moment';
import * as moment from 'moment';
const dateValidationError = { dateValidator: true };

export function DateValidator(c: AbstractControl): { [key: string]: boolean } | null {
    const val = c.value;
    let result: any;

    if (!moment(val, 'dd-mm-yyyy', true).isValid()) {
        result = dateValidationError;
    }
    else {
        result = null;
    }
    return result;
}
