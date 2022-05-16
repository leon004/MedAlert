import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesFormRoutingModule } from './report-forms-routing.module';
import { ReportFormsComponent } from './report-forms.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { ThanksComponent } from './thanks/thanks.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ReportFormsComponent, ThanksComponent],
  imports: [
    CommonModule,
    MesFormRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    SharedModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule

  ]
})
export class ReportFormsModule { }
