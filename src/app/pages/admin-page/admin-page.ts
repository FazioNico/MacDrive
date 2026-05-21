import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FireService } from '../../services/fire/fire-service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { TotalOrderPipe } from '../../pipes/total-order/total-order-pipe';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonRow, IonSpinner } from '@ionic/angular/standalone';

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
  IonSpinner,
];
@Component({
  selector: 'app-admin-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AsyncPipe, TotalOrderPipe, CurrencyPipe, ...IonElements],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {
  private readonly _fireService = inject(FireService);
  public readonly orders$ = this._fireService.loadOrders();
}
