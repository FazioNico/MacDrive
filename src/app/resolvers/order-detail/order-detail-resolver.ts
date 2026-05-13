import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FireService, OrderDataInterface } from '../../services/fire/fire-service';

export const orderDetailResolver: ResolveFn<OrderDataInterface> = (route, state) => {
  const fireService = inject(FireService);
  const id = route.params['id'];
  return fireService.getOrderById(id);
};
