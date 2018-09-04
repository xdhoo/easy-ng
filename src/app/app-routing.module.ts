import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full'}, // normal
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  { path: 'home', component: LayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
