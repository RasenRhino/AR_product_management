import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatesectionComponent } from './updatesection/updatesection.component';
import { NewsectionComponent } from './newsection/newsection.component';
const routes: Routes = [
  {path:'update',component:UpdatesectionComponent},
  {path:'new',component:NewsectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
