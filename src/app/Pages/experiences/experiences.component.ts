import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperiencesComponent implements OnInit {

  TITRE1: string = '';
  SOUSTITRE1: string = '';
  CONTENU1: string = '';
  TITRE2: string = '';
  SOUSTITRE2: string = '';
  CONTENU2: string = '';
  TITRE3: string = '';
  SOUSTITRE3: string = '';
  CONTENU3: string = '';
  TITRE4: string = '';
  SOUSTITRE4: string = '';
  CONTENU4: string = '';

  constructor(public translate: TranslateService) {
    this.getTranslation();
  }

  getTranslation(){
    this.translate.get('PRO').subscribe((translated: string) => {
      let parsed = JSON.parse(JSON.stringify(translated));
      this.TITRE1 = parsed.TITRE1;
      this.SOUSTITRE1 = parsed.SOUSTITRE1;
      this.CONTENU1 = parsed.CONTENU1;
      this.TITRE2 = parsed.TITRE2;
      this.SOUSTITRE2 = parsed.SOUSTITRE2;
      this.CONTENU2 = parsed.CONTENU2;
      this.TITRE3 = parsed.TITRE3;
      this.SOUSTITRE3 = parsed.SOUSTITRE3;
      this.CONTENU3 = parsed.CONTENU3;
      this.TITRE4 = parsed.TITRE4;
      this.SOUSTITRE4 = parsed.SOUSTITRE4;
      this.CONTENU4 = parsed.CONTENU4;
    });

  }

  ngOnInit(): void {
  }

}
