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

  titreCarte2: string = '';


  constructor(public translate: TranslateService) {
      this.translate.get('HOMEPAGE').subscribe((translated: string) => {
        let parsed = JSON.parse(JSON.stringify(translated));
        this.titre1 = parsed.TITRE1;
        this.text1 = parsed.TEXT1;
        this.text2 = parsed.TEXT2;
        this.text3 = parsed.TEXT3;
        this.titreCarte2 = parsed.TITRECARTE2;
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
