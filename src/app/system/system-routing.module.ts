import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';


const routes: Routes = [
  {
    path: '', component:SystemComponent
    // path: 'system', loadChildren: () => import('../app/system/system.module').then(m => m.SystemModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class SystemRoutingModule { }
