import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { SiteLandingComponent } from './site-landing/site-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLandingComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
