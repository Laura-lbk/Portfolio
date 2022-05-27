import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-scolaire',
  templateUrl: './scolaire.component.html',
  styleUrls: ['./scolaire.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScolaireComponent implements OnInit {

  MASTER: string = '';
  LICENCE: string = '';
  DUT: string = '';
  BAC: string = '';

  constructor(public translate: TranslateService) {
    this.getTranslation();
  }

  getTranslation(){
    this.translate.get('SCOLARITE').subscribe((translated: string) => {
      let parsed = JSON.parse(JSON.stringify(translated));
      this.MASTER = parsed.MASTER;
      this.LICENCE = parsed.LICENCE;
      this.DUT = parsed.DUT;
      this.BAC = parsed.BAC;
    });

  }

  ngOnInit(): void {
  }

}
