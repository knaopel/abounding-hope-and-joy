import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreaks'
})
export class LineBreaksPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.replace(/\n/g, '<br />');
    return value;
  }

}
