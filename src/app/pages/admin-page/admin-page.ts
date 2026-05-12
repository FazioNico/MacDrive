import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FireService } from '../../services/fire/fire-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {
  private readonly _fireService = inject(FireService);
  public readonly orders$ = this._fireService.loadOrders();
}
