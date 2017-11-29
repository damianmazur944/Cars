import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component';
import {RoutingModule} from './routing/routing.module';
import {FormsModule} from '@angular/forms';
import { CaraddComponent } from './caradd/caradd.component';
import { DealeraddComponent } from './dealeradd/dealeradd.component';
import { DealerlistComponent } from './dealerlist/dealerlist.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {JwtInterceptor} from './auth/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CaraddComponent,
    DealeraddComponent,
    DealerlistComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
