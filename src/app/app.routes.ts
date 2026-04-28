import { Routes } from '@angular/router';
import { OrderPage } from './pages/order-page/order-page';
import { AdminPage } from './pages/admin-page/admin-page';
import { OrderDetail } from './pages/order-detail/order-detail';
import { authGuardGuard } from './guards/auth/auth-guard-guard';
import { orderDetailResolver } from './resolvers/order-detail/order-detail-resolver';

export const routes: Routes = [
  {
    path: 'order-page',
    component: OrderPage
  },
  {
    path: 'order-detail-page',
    children: [
      {
        path: ':id',
        component: OrderDetail,
        resolve: {
          orderDetail: orderDetailResolver
        }
      },
      {
        path: '',
        redirectTo: '/order-page',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin-page/admin-page')
                            .then(c => c.AdminPage),
    canActivate: [authGuardGuard]
    // component: AdminPage
  },
  {
    path: '',
    redirectTo: 'order-page',
    pathMatch: 'full'
  },
];
