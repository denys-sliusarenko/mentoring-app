import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';


const routes: Routes = [
  
  {
 path: '', component: SystemComponent, children: [
        { path: 'owners', loadChildren: () => import('./modules/owner/owner.module').then(m => m.OwnerModule) },
        { path: 'cars', loadChildren: () => import('./modules/car/car.module').then(m => m.CarModule) },
        { path: 'owner-cars', loadChildren: () => import('./modules/owner-cars/owner-cars.module').then(m => m.OwnerCarsModule) },


   ]
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
