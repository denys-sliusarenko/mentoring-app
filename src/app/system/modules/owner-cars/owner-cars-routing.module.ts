import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerCarsComponent } from '../../components/owner-cars/owner-cars.component';
import { AddOwnerCarsComponent } from '../../components/add-owner-cars/add-owner-cars.component';
import { AllOwnersAndCarsComponent } from '../../components/all-owners-and-cars/all-owners-and-cars.component';

const routes: Routes = [
  {
    path: '', component: OwnerCarsComponent, children: [
      { path: 'all-owner-cars', component: AllOwnersAndCarsComponent },
      { path: 'add-owner-cars', component: AddOwnerCarsComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OwnerCarsRoutingModule { }
