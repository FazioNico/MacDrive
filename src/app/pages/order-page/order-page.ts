import { Component, computed, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api-service/api-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TotalItemPipe } from '../../pipes/total-item/total-item-pipe';
import { FireService } from '../../services/fire/fire-service';
import { TotalOrderPipe } from '../../pipes/total-order/total-order-pipe';
import { CurrencyPipe } from '@angular/common';
import { OrderService } from '../../services/order/order-service';


@Component({
  selector: 'app-order-page',
  imports: [RouterLink, ReactiveFormsModule, TotalItemPipe, TotalOrderPipe, CurrencyPipe],
  templateUrl: './order-page.html',
  styleUrl: './order-page.css',
})
export class OrderPage {
  protected readonly categories = inject(ApiService).categories;
  protected readonly route = inject(ActivatedRoute);
  private readonly _fireService = inject(FireService);
  private readonly _orderService = inject(OrderService);
  protected readonly categorieDisplayed = computed(() => {
    const selectedCategoryUuid = this.selectedCategoryUuid();
    if (!selectedCategoryUuid) {
      return this.categories();
    }
    return this.categories().filter(category => category.uuid === selectedCategoryUuid);
  });
  protected readonly selectedCategoryUuid = signal<string|null>(null);
  protected readonly orderForm = this._orderService.orderForm;

  async addRecipe(recipeUuid: string) {
    const recipes = this.categories().flatMap(c => c.recipes);
    await this._orderService.addRecipe(recipes, recipeUuid);
  }
}


