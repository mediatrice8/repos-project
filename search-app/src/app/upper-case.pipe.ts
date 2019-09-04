import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  
})
export class UpperCasePipe implements PipeTransform {

  transform(value: any): string {
    return value.toUpperCase;
  }

}
