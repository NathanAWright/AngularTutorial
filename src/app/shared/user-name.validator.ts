import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenNameValidator(control: AbstractControl): {[key : string]: any} | null{
//     const forbidden = /admin/.test(control.value);
//     return forbidden ? { 'forbiddenName': {value: control.value}} : null;
// }

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn{
    return (control: AbstractControl): {[key : string]: any} | null => {
        const forbidden = forbiddenName.test(control.value);
        return forbidden ? { 'forbiddenName': {value: control.value}} : null;
    }
}

/*
This tutorial attempts to explain the code:
https://www.youtube.com/watch?v=nm-x8gsqB2E&index=54&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ
*/