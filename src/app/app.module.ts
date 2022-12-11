import { createComponent, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api/api.service';

import { ReadComponent } from './read/read.component';
import {CreatepostComponent } from './createpost/createpost.component';

import{FormsModule,ReactiveFormsModule} from '@angular/forms';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { TabsLoggedInPageModule } from './logged-in/tabs-logged-in/tabs-logged-in.module';
import { TabsPageModule } from './tabs/tabs.module';
@NgModule({
  declarations: [AppComponent, CreatepostComponent,],
  imports: [
    BrowserModule, 
    TabsPageModule,
    TabsLoggedInPageModule,
    IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule, 
    ReactiveFormsModule,
     FormsModule, 
     AuthModule.forRoot({
      domain: 'dev-8ywcl6gfku8jyt8i.us.auth0.com',
      clientId: 'D12NTCfFxOPcYvSNKfrg0kRcf7OD1cpC',
    }),
  ],
  providers: [ApiService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
