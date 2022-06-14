import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem, SelectItem} from 'primeng/api';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationMenuComponent implements OnInit {

  items: MenuItem[] = [];
  languages: any[];
  selectedLanguage: any;
  //activeItem: MenuItem | undefined;

  parcours:string = 'Parcours Scolaire';

  constructor(private router: Router,
              public translate: TranslateService) {
    this.languages = [
      {icon: 'fi fi-fr', value: 'fr', label: 'Français'},
      {icon: 'fi fi-gb', value: 'en', label: 'English'},
    ];

    this.translate.setDefaultLang('fr');
    this.translate.use(localStorage.getItem('language') || 'fr');

    this.translate.get('MENU').subscribe((translated: string) => {
      let parsed = JSON.parse(JSON.stringify(translated));
      this.items = [
        {label: 'Laura Lieberknecht', icon: 'pi pi-id-card', routerLink: 'home'},
        {label: parsed.PARCOURS , routerLink: 'parcours-scolaire'},
        {label: parsed.EXPERIENCE, routerLink: 'experiences'},
        {label: parsed.ABOUT, icon: 'pi pi-search-plus', routerLink: 'about'},
      ];
    });
  }

  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('language') || 'fr';
  }

  selected(): void{
    localStorage.setItem('language', this.selectedLanguage);
    window.location.reload()
  }

}
