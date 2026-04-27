import { Component, inject, OnInit, signal } from '@angular/core';
import { Category } from '../../interfaces';
import { ApiService } from '../../services/api-service/api-service';


@Component({
  selector: 'app-order-page',
  imports: [],
  templateUrl: './order-page.html',
  styleUrl: './order-page.css',
})
export class OrderPage {
  protected readonly categories = inject(ApiService).categories;
}
