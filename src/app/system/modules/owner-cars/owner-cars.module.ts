import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerCarsRoutingModule } from './owner-cars-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OwnerCarsRoutingModule,
    SharedModule
  ]
})
export class OwnerCarsModule { }
