import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from '../../components/owner/owner.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
   OwnerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    OwnerRoutingModule,
  ]
})
export class OwnerModule { }
