import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild([
    { path:'portfolio', component: PortfolioComponent }
  ])],
  exports: [ RouterModule ],
  providers: []
})

export class PortfolioRoutingModule {}
