import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { AboutMeModule } from './about-me/about-me.module';
import { ContactModule } from './contact/contact.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SiteLandingModule } from './site-landing/site-landing.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AboutMeModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ContactModule,
    PortfolioModule,
    SiteLandingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
