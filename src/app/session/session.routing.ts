import { ErrorComponent } from "./error/error.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { Routes } from "@angular/router";
import { LogInComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

export const SessionRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "404",
        component: NotFoundComponent
      },
      {
        path: "error",
        component: ErrorComponent
      },     
      {
        path: "login",
        component: LogInComponent
      }
    ]
  }
];
