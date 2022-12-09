import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritePagePage } from './favorite-page.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritePagePageRoutingModule {}
