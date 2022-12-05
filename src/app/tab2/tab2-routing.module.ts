import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import {ReadComponent} from '../read/read.component'

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path:'read',component:ReadComponent
    
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
