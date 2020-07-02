import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [AccessDeniedComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
