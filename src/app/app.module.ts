import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component';
import {RoutingModule} from './routing/routing.module';
import {FormsModule} from '@angular/forms';
import { CaraddComponent } from './caradd/caradd.component';
import { DealeraddComponent } from './dealeradd/dealeradd.component';
import { DealerlistComponent } from './dealerlist/dealerlist.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CaraddComponent,
    DealeraddComponent,
    DealerlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
