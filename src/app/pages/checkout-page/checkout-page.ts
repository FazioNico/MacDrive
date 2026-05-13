import { Component, inject } from '@angular/core';
import { OrderService } from '../../services/order/order-service';
import { TotalOrderPipe } from '../../pipes/total-order/total-order-pipe';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-checkout-page',
  imports: [TotalOrderPipe, CurrencyPipe, RouterLink],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {
  private readonly _router = inject(Router);
  private readonly _orderService = inject(OrderService);
  public readonly orderForm = this._orderService.orderForm;

  async handleSubmitOrder() {
    const orderId = await this._orderService.submitOrder();
    await this._router.navigateByUrl(`/success?id=${orderId}`);
  }
}
