import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportMaterialComponent } from './support-materialcomponent';

const routes: Routes = [{ path: '', component: SupportMaterialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDetailsRoutingModule { }
