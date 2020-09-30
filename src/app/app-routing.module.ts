import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewregisterComponent } from './newregister/newregister.component';

const routes: Routes = [
  {path:'', component:NewregisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
