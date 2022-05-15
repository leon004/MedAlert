import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllyTypesComponent } from "./ally-types/ally-types.component";

import { JoinUsComponent } from "./join-us.component";

const routes: Routes = [
  {
    path: "",
    component: JoinUsComponent,
    children: [
      {
        path: "types",
        component: AllyTypesComponent,
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqsRoutingModule {}
