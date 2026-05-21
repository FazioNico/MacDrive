import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonRow } from '@ionic/angular/standalone';
import JSConfetti from 'js-confetti';

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
  selector: 'app-success-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ...IonElements],
  templateUrl: './success-page.html',
  styleUrl: './success-page.css',
})
export class SuccessPage implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  public readonly orderId = signal<string | undefined>(undefined);

  ngOnInit(): void {
    const orderId = this._route.snapshot.queryParams['id'];
    this.orderId.set(orderId);
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}
