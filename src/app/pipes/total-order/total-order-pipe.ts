import { Pipe, PipeTransform } from '@angular/core';
import { OrderDataInterface } from '../../services/fire/fire-service';

@Pipe({
  name: 'totalOrder',
})
export class TotalOrderPipe implements PipeTransform {
  transform(order: Partial<OrderDataInterface>): number {
    const recipes = order.recipes || [];
    return recipes.reduce((p, o) => {
      return p + (o.count * o.price);
    }, 0) / 100;
  }
}
