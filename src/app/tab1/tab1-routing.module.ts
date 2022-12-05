import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import{ReadComponent} from '../read/read.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },
  {path:'read',component:ReadComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
