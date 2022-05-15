import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { ServiceDetailsRoutingModule } from './support-material-routing.module';
import { SupportMaterialComponent } from './support-materialcomponent';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { BannerComponent } from './banner/banner.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [SupportMaterialComponent, ContentComponent, BannerComponent, VideosComponent],
  imports: [
    CommonModule,
    ServiceDetailsRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule
  ]
})
export class SupportMaterialModule { }
