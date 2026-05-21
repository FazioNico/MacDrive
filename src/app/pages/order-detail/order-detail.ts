import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderDataInterface } from '../../services/fire/fire-service';
import { CurrencyPipe } from '@angular/common';
import { TotalOrderPipe } from '../../pipes/total-order/total-order-pipe';
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
  selector: 'app-order-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, CurrencyPipe, TotalOrderPipe, ...IonElements],
  templateUrl: './order-detail.html',
  styleUrl: './order-detail.css',
})
export class OrderDetail implements OnInit {
  protected readonly route = inject(ActivatedRoute);
  protected readonly orderDetail = signal<OrderDataInterface | undefined>(undefined);
  
  ngOnInit(): void {
    const orderDetail = this.route.snapshot.data['orderDetail'];
    this.orderDetail.set(orderDetail);
  }
}
