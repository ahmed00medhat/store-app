import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../product';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Product, qty?: number): any {
    if (value == null){
      return null;
    }else {
      return qty * value.getPrice();
    }
  }

}
