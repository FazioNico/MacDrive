import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FireService } from '../../services/fire/fire-service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { TotalOrderPipe } from '../../pipes/total-order/total-order-pipe';
import { IonContent } from '@ionic/angular/standalone';

const IonElements = [
  IonContent,
];
@Component({
  selector: 'app-admin-page',
  imports: [RouterLink, AsyncPipe, TotalOrderPipe, CurrencyPipe, ...IonElements],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {
  private readonly _fireService = inject(FireService);
  public readonly orders$ = this._fireService.loadOrders();
}
