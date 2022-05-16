import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscComponent } from './forms/esc/esc.component';
import { ReportFormsComponent } from './report-forms.component';

const routes: Routes = [
  // Home
  { path: 'mes',
    component:EscComponent
},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesFormRoutingModule { }
