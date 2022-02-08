import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from '../../components/owner/owner.component';

const routes: Routes = [
  {
    path: '', component: OwnerComponent
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
export class OwnerRoutingModule { }
