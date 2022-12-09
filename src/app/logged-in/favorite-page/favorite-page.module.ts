import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritePagePageRoutingModule } from './favorite-page-routing.module';

import { FavoritePagePage } from './favorite-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritePagePageRoutingModule
  ],
  declarations: [FavoritePagePage]
})
export class FavoritePagePageModule {}
