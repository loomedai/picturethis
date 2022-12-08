import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsLoggedInPage } from './tabs-logged-in.page';

const routes: Routes = [
  {
    path: '',
    component: TabsLoggedInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsLoggedInPageRoutingModule {}
