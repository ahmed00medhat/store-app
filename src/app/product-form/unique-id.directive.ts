import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appUniqueId]',
  providers: [{provide: NG_VALIDATORS, useExisting: UniqueIdDirective, multi: true}]
})
export class UniqueIdDirective implements Validator {

  // @Input() uniqueId: string;

  validate(c: AbstractControl): { [key: string]: any; } {
    // throw new Error('Method not implemented.');
    // console.log('in directive:' + c.value);
    // return checkId(c.value);
    const forbidden = (c.value === 'P123');
    return forbidden ? {'appUniqueId': {value: c.value}} : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    // throw new Error('Method not implemented.');
    // return null;
  }

  constructor() { }


}


