import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from '../../components/owner/owner.component';
import { CarComponent } from '../../components/car/car.component';

const routes: Routes = [
  {
    path: '', component: CarComponent
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
export class CarRoutingModule { }
