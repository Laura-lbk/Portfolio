import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RoutesRoutingModule} from "./app-routing.module";
import {ButtonModule} from "primeng/button";
import {HelloworldComponent} from "./helloworld/helloworld.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageModule} from "primeng/message";
import {TabMenuModule} from "primeng/tabmenu";
import {CarouselModule} from 'primeng/carousel';
import {NavigationMenuComponent} from "./navigation-menu/navigation-menu.component";
import { ScolaireComponent } from './Pages/scolaire/scolaire.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ExperiencesComponent} from './Pages/experiences/experiences.component';
import {CardModule} from 'primeng/card';
import {HomepageComponent} from "./Pages/homepage/homepage.component";
import {DividerModule} from 'primeng/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ProgressBarModule} from 'primeng/progressbar';
import {AboutMeComponent} from "./Pages/about-me/about-me.component";
import { HorseCarouselComponent } from './Pages/about-me/horse-carousel/horse-carousel.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    NavigationMenuComponent,
    ScolaireComponent,
    ExperiencesComponent,
    HomepageComponent,
    AboutMeComponent,
    HorseCarouselComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    RoutesRoutingModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    FormsModule,
    MessageModule,
    TabMenuModule,
    DropdownModule,
    DividerModule,
    NgbModule,
    ProgressBarModule,
    CarouselModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
