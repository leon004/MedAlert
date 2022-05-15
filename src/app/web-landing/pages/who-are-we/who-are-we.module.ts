import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { WhoAreWeRoutingModule } from './who-are-we-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { BreadcrumbModule } from 'angular-crumbs';

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './banner/banner.component';
import { TabsComponent } from './tabs/tabs.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { WhoAreWeComponent } from './who-are-we.component';
import { AllysComponent } from './allys/allys.component';
import { ResultsComponent } from './results/results.component';
import { CountoModule }  from 'angular2-counto';


@NgModule({
  declarations: [TabsComponent, BannerComponent,ResultsComponent,TabsComponent,WhoAreWeComponent, AllysComponent],
  imports: [
    CommonModule,
    WhoAreWeRoutingModule,
    SharedModule,
    BreadcrumbModule,
    NgbModule,
    MatButtonModule,
    SlickCarouselModule,
    MatTableModule,
    MatIconModule,
    PdfViewerModule,
    MatFormFieldModule,
    MatSelectModule,
    CountoModule 
  ]
})
export class WhoAreWeModule { }
