import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsLoggedInPage } from './tabs-logged-in.page';

const routes: Routes = [
  {
    path: 'tabslogin',
    component: TabsLoggedInPage,
    children: [
      {
        path: 'tablogin1',
        loadChildren: () => import('../profile-page/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'tablogin1',
        redirectTo: '/tabslogin/tablogin1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'tablogin1',
    redirectTo: '/tabslogin/tablogin1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsLoggedInPageRoutingModule {}
