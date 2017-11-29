import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CarListComponent} from '../car-list/car-list.component';
import {CaraddComponent} from '../caradd/caradd.component';
import {DealeraddComponent} from '../dealeradd/dealeradd.component';
import {DealerlistComponent} from '../dealerlist/dealerlist.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'carList', component: CarListComponent, canActivate: [AuthGuardService] },
  { path: 'carList/:id', component: CarListComponent },
  { path: 'dealerList/showCars/:id', component: CarListComponent },
  { path: 'addDealer', component: DealeraddComponent },
  { path: 'addCar', component: CaraddComponent },
  {path: 'dealerList', component: DealerlistComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule {
}
