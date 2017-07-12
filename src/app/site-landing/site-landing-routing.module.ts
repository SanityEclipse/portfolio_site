import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SiteLandingComponent } from './site-landing.component';

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild([
    { path:'site-landing', component: SiteLandingComponent }
  ])],
  exports: [ RouterModule ],
  providers: []
})

export class SiteLandingRoutingModule {}
