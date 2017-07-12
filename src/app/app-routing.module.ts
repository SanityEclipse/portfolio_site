import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path:'', redirectTo:'/site-landing', pathMatch:'full'}
]

@NgModule({
  declarations:[],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}
