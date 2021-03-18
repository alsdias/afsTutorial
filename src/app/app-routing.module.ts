import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OriginalInitPageComponent } from './original-init-page/original-init-page.component';
import { BindingComponent } from './binding/binding.component';
import { FakeDbComponent } from './fake-db/fake-db.component';
import { ProvComponent } from './prov/prov.component';

const routes: Routes = [
  {path: '',   redirectTo: 'index',  pathMatch: 'full'},
  {path: 'ori-init-page', component: OriginalInitPageComponent },
  {path: 'binding', component: BindingComponent },
  {path: 'fakedb', component: FakeDbComponent },
  {path: 'prov', component: ProvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
