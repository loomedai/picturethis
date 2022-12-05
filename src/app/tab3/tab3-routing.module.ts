import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { CreatepostComponent } from '../createpost/createpost.component';
import{ReadComponent} from '../read/read.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path:'creatpost',component:CreatepostComponent
  },
  {
    path:'read',component:ReadComponent
    
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
