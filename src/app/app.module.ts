import { createComponent, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api/api.service';

import { ProfilepageComponent } from './logged-in/profilepage/profilepage.component';
import { ReadComponent } from './read/read.component';
import {CreatepostComponent } from './createpost/createpost.component';

@NgModule({
  declarations: [AppComponent, ProfilepageComponent,CreatepostComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [ApiService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
