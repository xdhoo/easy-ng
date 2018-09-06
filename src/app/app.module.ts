import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { ViewsModule } from './views/views.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    ViewsModule,
    NgZorroAntdModule.forRoot()

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
