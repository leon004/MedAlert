

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  // Home
  { path: '',
    children: [
      {
        path: "",
        loadChildren: () =>
         import('./web-landing/web-landing.module').then(m => m.WebLandingModule),
         data: { breadcrumb: 'Homepage' }

      }]
    },



  {
    path: "**",
    redirectTo: "auth/404",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
