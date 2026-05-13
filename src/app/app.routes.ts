import { Routes } from '@angular/router';
import { OrderPage } from './pages/order-page/order-page';
import { AdminPage } from './pages/admin-page/admin-page';
import { OrderDetail } from './pages/order-detail/order-detail';
import { authGuardGuard } from './guards/auth/auth-guard-guard';
import { orderDetailResolver } from './resolvers/order-detail/order-detail-resolver';

export const routes: Routes = [
  {
    path: 'order-page',
    component: OrderPage,
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout-page/checkout-page').then(c => c.CheckoutPage)
  },
  {
    path: 'success',
    loadComponent: () => import('./pages/success-page/success-page').then(c => c.SuccessPage)
  },
  {
    path: 'admin',
    canActivate: [authGuardGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/admin-page/admin-page')
                                .then(c => c.AdminPage),
      },
      {
        path: ':id',
        component: OrderDetail,
        resolve: {
          orderDetail: orderDetailResolver
        }
      },
    ]
  },
  {
    path: '',
    redirectTo: 'order-page',
    pathMatch: 'full'
  },
];
