import { Pipe, PipeTransform } from '@angular/core';
import { OrderDataInterface } from '../../services/fire/fire-service';

@Pipe({
  name: 'totalOrder',
})
export class TotalOrderPipe implements PipeTransform {
  transform(order: OrderDataInterface): number {
    return order.recipes.reduce((p, o) => {
      return p + (o.count * o.price);
    }, 0) / 100;
  }
}
