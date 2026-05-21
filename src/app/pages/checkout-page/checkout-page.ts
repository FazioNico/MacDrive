import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { OrderService } from '../../services/order/order-service';
import { TotalOrderPipe } from '../../pipes/total-order/total-order-pipe';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { ApiService } from '../../services/api-service/api-service';
import { Category } from '../../interfaces';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonRow } from '@ionic/angular/standalone';

const IonElements = [
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
];
@Component({
  selector: 'app-checkout-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TotalOrderPipe, CurrencyPipe, RouterLink, ...IonElements],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {
  private readonly _router = inject(Router);
  private readonly _orderService = inject(OrderService);
  private readonly _apiService = inject(ApiService);
  public readonly orderForm = this._orderService.orderForm;
  public readonly category = computed<Category|undefined>(() => {
    const categories = this._apiService.categories();
    return categories.find(category => category.uuid  === '6ad53b55-60c7-5cb9-b546-32df543a4f5d');
  });

  async handleAddRecipe(recipeId: string) {
    await this._orderService.addRecipe(this.category()!.recipes, recipeId);
  }

  async handleSubmitOrder() {
    const orderId = await this._orderService.submitOrder();
    await this._router.navigateByUrl(`/success?id=${orderId}`);
  }
}
