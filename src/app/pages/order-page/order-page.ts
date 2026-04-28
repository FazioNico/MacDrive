import { Component, inject, OnInit, signal } from '@angular/core';
import { Category } from '../../interfaces';
import { ApiService } from '../../services/api-service/api-service';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-order-page',
  imports: [RouterLink],
  templateUrl: './order-page.html',
  styleUrl: './order-page.css',
})
export class OrderPage implements OnInit {
  protected readonly categories = inject(ApiService).categories;
  protected readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    console.log(params);
  }
}
