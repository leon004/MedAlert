import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FaqsRoutingModule } from './join-us-routing.module';
import { JoinUsComponent } from './join-us.component';
import { SharedModule } from '../../shared/shared.module';

import { AllyTypesComponent } from './ally-types/ally-types.component';
import { BannerComponent } from './banner/banner.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [AllyTypesComponent,JoinUsComponent, BannerComponent],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    SharedModule,
    NgbModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ]
})
export class JoinUsModule { }
