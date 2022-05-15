import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebLandingRoutingModule } from './web-landing-routing.module';
import { WebLandingComponent } from './web-landing.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [WebLandingComponent],
  imports: [
    CommonModule,
    SharedModule,
    WebLandingRoutingModule
    ]
})
export class WebLandingModule { }
