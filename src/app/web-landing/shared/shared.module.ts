import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderOneComponent } from './header-one/header-one.component';
import { FooterComponent } from './footer/footer.component';


import { ContactBtnComponent } from './contact-btn/contact-btn.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PreloaderComponent } from './preloader/preloader.component';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [PreloaderComponent,ContactBtnComponent,HeaderOneComponent,  FooterComponent,   ContactBtnComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    SlickCarouselModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports: [PreloaderComponent,ContactBtnComponent,HeaderOneComponent,  FooterComponent]
})
export class SharedModule { }
