import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full'}, // normal
  { path: 'home', component: LayoutComponent, children: [
    {path: 'dashboard', component: DashboardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
