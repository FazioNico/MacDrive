import { inject, Injectable, signal } from '@angular/core';
import { Category, Database } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public readonly categories = signal<Category[]>([]);
  private readonly _http: HttpClient = inject(HttpClient);

  constructor() {
    this.getRecipes();
  }

  async getRecipes(): Promise<Category[]> {
    const url = './resto-data.json';
    const request = this._http.get<Database>(url);
    const json: Database = await firstValueFrom(request);
    const result = json.data;
    this.categories.set(result);
    return result;
  };

  async sendOrder(order: any) {
    console.log('Order send to database...', order);
  }
}
