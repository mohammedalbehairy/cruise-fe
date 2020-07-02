import { TemplateWrapperComponent } from './core/layout/template-wrapper/template-wrapper.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './shared/components/access-denied/access-denied.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: TemplateWrapperComponent,
    children: [
      {
        path: 'dashboard',
        data: {
          breadcrumb: 'Dashboard'
        },
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'cruise',
        data: {
          breadcrumb: 'Cruise'
        },
        loadChildren: () => import('./pages/cruise/cruise.module').then(m => m.CruiseModule)
      },
    ]
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
