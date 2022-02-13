import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerCarsComponent } from '../../components/owner-cars/owner-cars.component';
import { CombainOwnerCarsComponent } from '../../components/combain-owner-cars/combain-owner-cars.component';
import { AllOwnersAndCarsComponent } from '../../components/all-owners-and-cars/all-owners-and-cars.component';

const routes: Routes = [
  {
    path: '', component: OwnerCarsComponent, children: [
      { path: 'all-owner-cars', component: AllOwnersAndCarsComponent },
      { path: 'combain-owner-cars', component: CombainOwnerCarsComponent }
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
