import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';


const routes: Routes = [
  
  {
 path: '', component: SystemComponent, children: [
        { path: 'owners', loadChildren: () => import('./modules/owner/owner.module').then(m => m.OwnerModule) },
        { path: 'cars', loadChildren: () => import('./modules/car/car.module').then(m => m.CarModule) },

   ]
    // path: '', component: SystemComponent, children: [
    //    { path: 'owners', loadChildren: () => import('./modules/owner/owner.module').then(m => m.OwnerModule) },
    // ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
