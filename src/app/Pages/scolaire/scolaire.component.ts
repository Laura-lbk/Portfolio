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
  EXPLICATION: string = '';
  TITRET1: string = '';
  TITRET2: string = '';
  TITRET3: string = '';
  TITRET4: string = '';
  ERP: string = '';
  JAVA: string = '';
  SWIFT: string = '';
  SYMFONY: string = '';
  ANDROID: string = '';
  DESCRIPTION: string = '';
  TITRET1INI: string = '';
  TITRET2INI: string = '';
  TITRET3INI: string = '';
  TITRET4INI: string = '';
  TITRET5INI: string = '';
  TITRET6INI: string = '';
  TITRET7INI: string = '';
  TITRET8INI: string = '';
  SYMFONYLICENCE: string = '';
  ANDROIDLICENCE: string = '';
  NUMERIQUELLES: string = '';
  FORUM: string = '';
  NUIT: string = '';
  JEU: string = '';

  constructor(public translate: TranslateService) {
    this.getTranslation();
  }

  getTranslation(){
    this.translate.get('SCOLARITE').subscribe((translated: string) => {
      let parsed = JSON.parse(JSON.stringify(translated));
      let masterdetail = parsed.MASTERDETAIL;
      let licencedetail = parsed.LICENCEDETAIL;
      let dutdetail = parsed.DUTDETAIL;
      let initiation = masterdetail.INITIATION;
      let thematic = masterdetail.THEMATIC;
      this.MASTER = parsed.MASTER;
      this.LICENCE = parsed.LICENCE;
      this.DUT = parsed.DUT;
      this.BAC = parsed.BAC;
      this.EXPLICATION = thematic.EXPLICATION;
      this.TITRET1 = thematic.TITRET1;
      this.TITRET2 = thematic.TITRET2;
      this.TITRET3 = thematic.TITRET3;
      this.TITRET4 = thematic.TITRET4;
      this.ERP = masterdetail.ERP;
      this.JAVA = masterdetail.JAVA;
      this.SWIFT = masterdetail.SWIFT;
      this.SYMFONY = masterdetail.SYMFONY;
      this.ANDROID = masterdetail.ANDROID;
      this.DESCRIPTION = initiation.DESCRIPTION;
      this.TITRET1INI = initiation.TITRET1;
      this.TITRET2INI = initiation.TITRET2;
      this.TITRET3INI = initiation.TITRET3;
      this.TITRET4INI = initiation.TITRET4;
      this.TITRET5INI = initiation.TITRET5;
      this.TITRET6INI = initiation.TITRET6;
      this.TITRET7INI = initiation.TITRET7;
      this.TITRET8INI = initiation.TITRET8;
      this.SYMFONYLICENCE = licencedetail.SYMFONY;
      this.ANDROIDLICENCE = licencedetail.ANDROID;
      this.NUMERIQUELLES = dutdetail.NUMERIQUELLES;
      this.FORUM = dutdetail.FORUM;
      this.NUIT = dutdetail.NUIT;
      this.JEU = dutdetail.JEU;
    });

  }

  ngOnInit(): void {
  }

}
