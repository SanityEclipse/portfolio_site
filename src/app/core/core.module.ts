import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavHeaderComponent } from './nav-header.component';

@NgModule({
  declarations:[ NavHeaderComponent ],
  imports: [ CommonModule, RouterModule ],
  exports: [ NavHeaderComponent ],
  providers: []
})

export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
