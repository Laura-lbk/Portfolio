import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import * as moment from 'moment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  titre1: string = '';
  text1: string = '';
  text2: string = '';
  text3: string = '';
  age: number;
  TITLE1: string = '';
  TITLE2: string = '';
  TITLE3: string = '';
  TITLE: string = '';
  BASES: string = '';
  INTER: string = '';
  V: string = '';
  AGILE: string = '';
  MAETIC: string = '';
  THEORIE: string = '';
  STRATEGIE: string = '';
  titreCarte2: string = '';


  constructor(public translate: TranslateService) {
      this.translate.get('HOMEPAGE').subscribe((translated: string) => {
        let parsed = JSON.parse(JSON.stringify(translated));
        this.titre1 = parsed.TITRE1;
        this.text1 = parsed.TEXT1;
        this.text2 = parsed.TEXT2;
        this.text3 = parsed.TEXT3;
        this.titreCarte2 = parsed.TITRECARTE2;
        this.TITLE1 = parsed.CARTE2.TITLE1;
        this.TITLE2 = parsed.CARTE2.TITLE2;
        this.TITLE3 = parsed.CARTE2.TITLE3;
        this.TITLE = parsed.CARTE2.LEGENDE.TITLE;
        this.BASES = parsed.CARTE2.LEGENDE.BASES;
        this.INTER = parsed.CARTE2.LEGENDE.INTER;
        this.V = parsed.CARTE2.GESTION.V;
        this.AGILE = parsed.CARTE2.GESTION.AGILE;
        this.MAETIC = parsed.CARTE2.GESTION.MAETIC;
        this.THEORIE = parsed.CARTE2.GESTION.THEORIE;
        this.STRATEGIE = parsed.CARTE2.GESTION.STRATEGIE;

      });
      this.age = this.calculateAge('04/28/1999');
      console.log(this.age);
  }

  ngOnInit(): void {
  }

  public calculateAge(birthdate: any): number {
    return moment().diff(birthdate, 'years');
  }


}
