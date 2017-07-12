import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteLandingRoutingModule } from './site-landing-routing.module';

import { SiteLandingComponent } from './site-landing.component';

@NgModule({
  declarations: [ SiteLandingComponent ],
  imports: [ CommonModule, SiteLandingRoutingModule ],
  exports: [],
  providers: []
})

export class SiteLandingModule {}
