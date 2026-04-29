import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderPage } from './pages/order-page/order-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public readonly title = signal('MacDrive');
}
