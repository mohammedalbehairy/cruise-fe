import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      breadcrumb: 'List'
    }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      breadcrumb: 'Create'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CruiseRoutingModule { }
