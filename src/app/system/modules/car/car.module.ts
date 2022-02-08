import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarComponent } from '../../components/car/car.component';
import { CarRoutingModule } from './car-routing.model';



@NgModule({
  declarations: [
    CarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarRoutingModule
  ]
})
export class CarModule { }
