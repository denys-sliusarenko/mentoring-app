import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerCarsRoutingModule } from './owner-cars-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OwnerCarsComponent } from '../../components/owner-cars/owner-cars.component';
import { RegistryCarsOwnerComponent } from '../../components/registry-cars-owner/registry-cars-owner.component';
import { AddOwnerCarsComponent } from '../../components/add-owner-cars/add-owner-cars.component';
import { AllOwnersAndCarsComponent } from '../../components/all-owners-and-cars/all-owners-and-cars.component';


@NgModule({
  declarations: [
    OwnerCarsComponent,
    RegistryCarsOwnerComponent,
    AddOwnerCarsComponent,
    AllOwnersAndCarsComponent],
  imports: [
    CommonModule,
    OwnerCarsRoutingModule,
    SharedModule
  ]
})
export class OwnerCarsModule { }
