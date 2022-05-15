import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HeaderOneComponent } from './header-one/header-one.component';


import { FooterComponent } from './footer/footer.component';
import { BrandsComponent } from './brands/brands.component';
import { CtaComponent } from './cta/cta.component';
import { ServicesidebarComponent } from './servicesidebar/servicesidebar.component';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContactBtnComponent } from './contact-btn/contact-btn.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PreloaderComponent } from './preloader/preloader.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [ConfirmModalComponent,PreloaderComponent,ContactBtnComponent,HeaderOneComponent,  BreadcrumbComponent, FooterComponent, BrandsComponent, CtaComponent, ServicesidebarComponent,  ContactBtnComponent],
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
  exports: [ConfirmModalComponent,PreloaderComponent,ContactBtnComponent,HeaderOneComponent, BreadcrumbComponent, FooterComponent, BrandsComponent, CtaComponent, ServicesidebarComponent]
})
export class SharedModule { }
