import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sortByOrder'
})
export class SortByOrderPipe implements PipeTransform {

  transform(value: any[]):any[] {
    return value.sort((n1,n2) => 
    {
      return n1.order - n2.order; 
    });
  }
}