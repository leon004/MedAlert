import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(translate: TranslateService,private titleService:Title, private breadcrumbService: BreadcrumbService) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang("en");

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
  }


    ngOnInit(): void {
      this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
        this.titleService.setTitle(this.createTitle(crumbs));
      });
    }
    onActivate(event){
      window.scroll(0,0);
    }
    private createTitle(routesCollection: Breadcrumb[]) {
      const title = 'MedAlert';
      const titles = routesCollection.filter((route) => route.displayName);

      if (!titles.length) { return title; }

      const routeTitle = this.titlesToString(titles);
      return `${title}${routeTitle}`;
    }

    private titlesToString(titles) {
      return titles.reduce((prev, curr) => {
        return `${prev} | ${curr.displayName}`;
      }, '');
    }
  }

