import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AppRoutingModule } from './../app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateWrapperComponent } from './layout/template-wrapper/template-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TemplateWrapperComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NzBreadCrumbModule,
    NzAnchorModule,
    NzDropDownModule,
    NzLayoutModule,
    NzMenuModule,
    ScrollingModule,
    NzCollapseModule,
    DemoNgZorroAntdModule
  ]
})
export class CoreModule { }
