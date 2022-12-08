import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsLoggedInPageRoutingModule } from './tabs-logged-in-routing.module';

import { TabsLoggedInPage } from './tabs-logged-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsLoggedInPageRoutingModule
  ],
  declarations: [TabsLoggedInPage]
})
export class TabsLoggedInPageModule {}
