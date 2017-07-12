import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild([
    { path:'contact', component: ContactComponent }
  ])],
  exports: [ RouterModule ],
  providers: []
})

export class ContactRoutingModule {}
