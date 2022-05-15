import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { ContentComponent } from './content/content.component';
import { PrivacyComponent } from './privacy.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [PrivacyComponent, ContentComponent],
  imports: [
    CommonModule,
    PrivacyRoutingModule,
    SharedModule
  ]
})
export class PrivacyModule { }
