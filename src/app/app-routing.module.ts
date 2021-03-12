import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OriginalInitPageComponent } from './original-init-page/original-init-page.component';

const routes: Routes = [
  {path: '',   redirectTo: 'index',  pathMatch: 'full'},
  {path: 'ori-init-page', component: OriginalInitPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
