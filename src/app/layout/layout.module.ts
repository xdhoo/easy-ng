import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { XAsideComponent } from './x-aside/x-aside.component';
import { XHeaderComponent } from './x-header/x-header.component';
import { LayoutComponent } from './layout.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { XMenuComponent } from './x-menu/x-menu.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule
  ],
  declarations: [XAsideComponent, XMenuComponent, XHeaderComponent, LayoutComponent]
})
export class LayoutModule { }
