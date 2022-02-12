import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerCarsRoutingModule } from './owner-cars-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { OwnerCarsComponent } from '../../components/owner-cars/owner-cars.component';
import { RegistryCarsOwnerComponent } from '../../components/registry-cars-owner/registry-cars-owner.component';


@NgModule({
  declarations: [
    OwnerCarsComponent,
    RegistryCarsOwnerComponent],
  imports: [
    CommonModule,
    OwnerCarsRoutingModule,
    SharedModule
  ]
})
export class OwnerCarsModule { }
