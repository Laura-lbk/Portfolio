import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RoutesRoutingModule} from "./app-routing.module";
import {ButtonModule} from "primeng/button";
import {HelloworldComponent} from "./helloworld/helloworld.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageModule} from "primeng/message";
import {TabMenuModule} from "primeng/tabmenu";
import {NavigationMenuComponent} from "./navigation-menu/navigation-menu.component";
import { ScolaireComponent } from './Pages/scolaire/scolaire.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { ExperiencesComponent } from './Pages/experiences/experiences.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    NavigationMenuComponent,
    ScolaireComponent,
    ExperiencesComponent
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
    BrowserAnimationsModule,
    FormsModule,
    MessageModule,
    TabMenuModule,
    DropdownModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
