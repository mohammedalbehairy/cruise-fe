import { MonitorComponent } from './monitor/monitor.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'analysis',
    pathMatch: 'full'
  },
  {
    path: 'analysis',
    component: AnalysisComponent,
    data: {
      breadcrumb: 'Analysis'
    }
  },
  {
    path: 'monitor',
    component: MonitorComponent,
    data: {
      breadcrumb: 'Monitor'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
