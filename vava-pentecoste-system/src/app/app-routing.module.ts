import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { Full_ROUTES } from './components/shared/routes/full-layout.routes';
import { FullLayoutComponent } from './components/layouts/full/full-layout.component';
import { ContentLayoutComponent } from './components/layouts/content/content-layout.component';
import { LoginComponent } from './components/users/login/login.component';


const routes: Routes = [
  { path: '',
  redirectTo: 'dashboard/eCommerce',
  pathMatch: 'full',
  },
  {
     path: 'user/login',
     component: LoginComponent
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES},
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: [
    {
       path: 'pages',
        loadChildren: './components/pages/content-pages/content-pages.module#ContentPagesModule'
    }],
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
