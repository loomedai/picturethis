import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import{ReadComponent} from './read/read.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path:'createpost',component:CreatepostComponent
  },
  {
    path:'read',component:ReadComponent
  },
  {
    path: '',
    loadChildren: () => import('./logged-in/tabs-logged-in/tabs-logged-in.module').then( m => m.TabsLoggedInPageModule)
  },
 



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
