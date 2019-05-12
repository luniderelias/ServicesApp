import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { Full_ROUTES } from './components/shared/routes/full-layout.routes';
import { FullLayoutComponent } from './components/layouts/full/full-layout.component';
import { ContentLayoutComponent } from './components/layouts/content/content-layout.component';

import { AuthGuard } from './components/shared/auth/auth-guard.service';


const routes: Routes = [
  { path: '',
  redirectTo: 'dashboard/eCommerce',
  pathMatch: 'full',
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES,  canActivate: [AuthGuard]},
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: Full_ROUTES,  canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
