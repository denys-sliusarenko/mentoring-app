import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'system', loadChildren: () => import('../app/system/system.module').then(m => m.SystemModule)},
 // { path: '', redirectTo:"system" , pathMatch:'full'},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
