import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {CarListComponent} from '../car-list/car-list.component';
import {CaraddComponent} from '../caradd/caradd.component';

const routes: Routes = [
  { path: 'carList', component: CarListComponent },
  { path: 'addCar', component: CaraddComponent }
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
