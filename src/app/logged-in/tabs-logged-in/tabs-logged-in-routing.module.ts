import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsLoggedInPage } from './tabs-logged-in.page';

const routes: Routes = [
  {
    path: 'login',
    component: TabsLoggedInPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile-page/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'favorit',
        loadChildren: () => import('../favorite-page/favorite-page.module').then(m => m.FavoritePagePageModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('../post-page/post-page.module').then(m => m.PostPagePageModule)
      },
      {
      path: 'create',
      loadChildren: () => import('../create-page/create-page.module').then(m => m.CreatePagePageModule)
      },
      {
        path: 'update/:id',
        loadChildren: () => import('../create-page/create-page.module').then(m => m.CreatePagePageModule)
        },
      {
        path: 'profile',
        redirectTo: '/login/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'profile',
    redirectTo: '/login/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsLoggedInPageRoutingModule {}
