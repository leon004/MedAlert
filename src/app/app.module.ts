import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AgmCoreModule } from "@agm/core";
import { AppComponent } from "./app.component";
import { BidiModule } from "@angular/cdk/bidi";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppRoutingModule } from "./app.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from "angular-crumbs";
import { SharedModule } from "./web-landing/shared/shared.module";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}



@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    BreadcrumbModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),    
    AgmCoreModule.forRoot({
      apiKey: "YOUR_API_KEY"
    }), NgbModule,
   
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {}
