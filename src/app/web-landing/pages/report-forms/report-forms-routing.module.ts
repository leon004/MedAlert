import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesComponent } from './forms/mes/mes.component';

import { ReportFormsComponent } from './report-forms.component';

const routes: Routes = [
  // Home
  { path: 'mes',
    component:MesComponent
},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesFormRoutingModule { }
