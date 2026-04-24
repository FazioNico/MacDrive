import { Component, OnInit, signal } from '@angular/core';
import { Category } from '../../interfaces';
import { getRecipes } from '../../api-service';

@Component({
  selector: 'app-order-page',
  imports: [],
  templateUrl: './order-page.html',
  styleUrl: './order-page.css',
})
export class OrderPage implements OnInit {
  protected readonly categories = signal<Category[]>([]);

  async ngOnInit() {
    const data = await getRecipes();
    this.categories.update(()=> data);
  }
}
