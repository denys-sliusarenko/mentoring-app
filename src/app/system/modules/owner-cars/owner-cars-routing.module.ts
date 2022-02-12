import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerCarsComponent } from '../../components/owner-cars/owner-cars.component';

const routes: Routes = [
  {
    path: '', component: OwnerCarsComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class OwnerCarsRoutingModule { }
