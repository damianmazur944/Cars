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
  { path: 'sign-in', component: SignInComponent },
  { path: 'carList', component: CarListComponent, canActivate: [AuthGuardService] },
  { path: 'carList/:id', component: CarListComponent, canActivate: [AuthGuardService] },
  { path: 'dealerList/showCars/:id', component: CarListComponent, canActivate: [AuthGuardService] },
  { path: 'addDealer', component: DealeraddComponent, canActivate: [AuthGuardService] },
  { path: 'addCar', component: CaraddComponent, canActivate: [AuthGuardService] },
  { path: 'dealerList', component: DealerlistComponent, canActivate: [AuthGuardService] }
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
