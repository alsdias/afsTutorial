import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OriginalInitPageComponent } from './original-init-page/original-init-page.component';
import { AppChildComponent } from './app-child/app-child.component';
import { AppItemComponent } from './app-item/app-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ChildNgComponent } from './child-ng/child-ng.component';
import { ItemSwitchComponents } from './item-switch.component';
import { FakeDBComponent } from './model/fake-db/fake-db.component';
import { BindingComponent } from './binding/binding.component';
import { FakeDbComponent } from './fake-db/fake-db.component';
import { ProvComponent } from './prov/prov.component';
import { DbService } from './model/db.service';

@NgModule({
  declarations: [
    AppComponent,
    OriginalInitPageComponent,
    AppChildComponent,
    AppItemComponent,
    ItemDetailComponent,
    ChildNgComponent,
    ItemSwitchComponents,
    FakeDBComponent,
    BindingComponent,
    FakeDbComponent,
    ProvComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
