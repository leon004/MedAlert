import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';

import { ReportComponent } from './report/report.component';
import { VideoComponent } from './video/video.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { YtVideoModalComponent } from './video/yt-video-modal/yt-video-modal.component';
import { TeamComponent } from './team/team.component';

import {MatBadgeModule} from '@angular/material/badge';

import { isUndefined } from 'util';


@NgModule({
  declarations: [ HomeComponent, ReportComponent, VideoComponent, YtVideoModalComponent,TeamComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,
    MatCardModule,
    SlickCarouselModule,
    MatBadgeModule,
    NgCircleProgressModule.forRoot(),
  ]
})
export class HomeModule { }
