import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Homepage' } },
  { path: 'us/:section', loadChildren: () => import('./pages/who-are-we/who-are-we.module').then(m => m.WhoAreWeModule), data: { breadcrumb: 'Resultados y Estadísticas' } },
  { path: 'report', loadChildren: () => import('./pages/report-forms/report-forms.module').then(m => m.ReportFormsModule), data: { breadcrumb: 'Categorías de Reporte' } },
  { path: 'join-us', loadChildren: () => import('./pages/join-us/join-us.module').then(m => m.JoinUsModule), data: { breadcrumb: 'Únete' } },
  { path: 'support-material', loadChildren: () => import('./pages/support-material/support-material.module').then(m => m.SupportMaterialModule), data: { breadcrumb: 'Material de Apoyo' } },
  { path: 'notice-of-privacy', loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyModule), data: { breadcrumb: 'Material de Apoyo' } },



];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebLandingRoutingModule { }
