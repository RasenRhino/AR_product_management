import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatesectionComponent } from './updatesection/updatesection.component';
import { NewsectionComponent } from './newsection/newsection.component';
import {ArshowComponent} from './arshow/arshow.component';
import { ArcamComponent } from './arcam/arcam.component';

const routes: Routes = [
  {path:'update',component:UpdatesectionComponent},
  {path:'new',component:NewsectionComponent},
  {path:'ar',component:ArshowComponent},
  {path:'cam',component:ArcamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
