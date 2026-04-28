import { Routes } from '@angular/router';
import { OrderPage } from './pages/order-page/order-page';
import { AdminPage } from './pages/admin-page/admin-page';

export const routes: Routes = [
  {
    path: 'order-page',
    component: OrderPage
  },
  {
    path: 'admin',
    component: AdminPage
  },
  {
    path: '',
    redirectTo: 'order-page',
    pathMatch: 'full'
  },
];
