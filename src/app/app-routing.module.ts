import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./Pages/homepage/homepage.component";
import {AboutMeComponent} from "./Pages/about-me/about-me.component";
import {ScolaireComponent} from "./Pages/scolaire/scolaire.component";
import {ExperiencesComponent} from "./Pages/experiences/experiences.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'parcours-scolaire',
    component: ScolaireComponent
  },
  {
    path: 'experiences',
    component: ExperiencesComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class RoutesRoutingModule {
}
