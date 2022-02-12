import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-routing.module';
import { OwnerModule } from './modules/owner/owner.module';
import { CarModule } from './modules/car/car.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { OwnerCarsModule } from './modules/owner-cars/owner-cars.module';
import { OwnerCarsComponent } from './components/owner-cars/owner-cars.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SystemComponent,
    OwnerCarsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    OwnerModule,
    CarModule,
    OwnerCarsModule
  ]
})
export class SystemModule { }
