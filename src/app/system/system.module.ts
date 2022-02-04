import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-routing.module';
import { UserModule } from './modules/user/user.module';
import { CarModule } from './modules/car/car.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SystemComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    CarModule,
    SharedModule,
    SystemRoutingModule,
  ]
})
export class SystemModule { }
