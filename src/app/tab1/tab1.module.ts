import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HomepostComponent } from '../homepagecomponents/homepost/homepost.component';
import { HeroheaderComponent } from '../homepagecomponents/heroheader/heroheader.component';
import { LeaderboardComponent } from '../homepagecomponents/leaderboard/leaderboard.component';
import { Tab1PageRoutingModule } from './tab1-routing.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page,  HomepostComponent, HeroheaderComponent, LeaderboardComponent]
})
export class Tab1PageModule {}