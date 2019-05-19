import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommerceComponent } from './eCommerce/eCommerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'eCommerce',
        component: EcommerceComponent,
        data: {
          title: 'eCommerce'
        }, canActivate: [AuthGuard]
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics'
        }, canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
