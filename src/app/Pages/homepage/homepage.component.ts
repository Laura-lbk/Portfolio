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
  age: number = 0;
  TITLE1: string = '';
  TITLE2: string = '';
  TITLE3: string = '';
  TITLE4: string = '';
  TITLE: string = '';
  BASES: string = '';
  INTER: string = '';
  V: string = '';
  AGILE: string = '';
  MAETIC: string = '';
  THEORIE: string = '';
  STRATEGIE: string = '';
  titreCarte2: string = '';
  TOOLTIP1: string = '';
  TOOLTIP2: string = '';
  TOOLTIP3: string = '';
  SKILL1: string = '';
  SKILL2: string = '';
  SKILL3: string = '';
  SKILL4: string = '';
  SKILL5: string = '';
  SKILL6: string = '';
  SKILL7: string = '';
  SKILL8: string = '';
  SKILL9: string = '';
  SKILL10: string = '';


  constructor(public translate: TranslateService) {
    this.getTranslation();
  }

  getTranslation() {
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
      this.TITLE4 = parsed.CARTE2.TITLE4;
      this.TITLE = parsed.CARTE2.LEGENDE.TITLE;
      this.BASES = parsed.CARTE2.LEGENDE.BASES;
      this.INTER = parsed.CARTE2.LEGENDE.INTER;
      this.V = parsed.CARTE2.GESTION.V;
      this.AGILE = parsed.CARTE2.GESTION.AGILE;
      this.MAETIC = parsed.CARTE2.GESTION.MAETIC;
      this.THEORIE = parsed.CARTE2.GESTION.THEORIE;
      this.STRATEGIE = parsed.CARTE2.GESTION.STRATEGIE;
      this.TOOLTIP1  = parsed.CARTE2.TOOLTIP.TOOLTIP1;
      this.TOOLTIP2 = parsed.CARTE2.TOOLTIP.TOOLTIP2;
      this.TOOLTIP3 = parsed.CARTE2.TOOLTIP.TOOLTIP3;
      this.SKILL1 = parsed.CARTE2.SOFTSKILL.SKILL1;
      this.SKILL2 = parsed.CARTE2.SOFTSKILL.SKILL2;
      this.SKILL3 = parsed.CARTE2.SOFTSKILL.SKILL3;
      this.SKILL4 = parsed.CARTE2.SOFTSKILL.SKILL4;
      this.SKILL5 = parsed.CARTE2.SOFTSKILL.SKILL5;
      this.SKILL6 = parsed.CARTE2.SOFTSKILL.SKILL6;
      this.SKILL7 = parsed.CARTE2.SOFTSKILL.SKILL7;
      this.SKILL8 = parsed.CARTE2.SOFTSKILL.SKILL8;
      this.SKILL9 = parsed.CARTE2.SOFTSKILL.SKILL9;
      this.SKILL10 = parsed.CARTE2.SOFTSKILL.SKILL10;
    });
    this.age = this.calculateAge('04/28/1999');
  }

  ngOnInit(): void {
  }

  public calculateAge(birthdate: any): number {
    return moment().diff(birthdate, 'years');
  }


}
