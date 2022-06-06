import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutMeComponent implements OnInit {

  components: any[] = [];
  TITRE: string = '';
  TITREYTB: string = '';
  TEXT1: string = '';
  TEXT2: string = '';
  TEXT3: string = '';
  TITREART: string = '';
  SOUSTITREART1: string = '';
  SOUSTITREART2: string = '';
  TEXT4: string = '';
  TEXT5: string = '';
  responsiveOptions;
  DEBUT: string = '';
  CONCOURS: string = '';
  FARAON: string = '';


  constructor(private translate: TranslateService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }

  ngOnInit(): void {
    this.getTranslation();
    console.log(this.TITRE);


  }


  getTranslation() {
    this.translate.get('ABOUT').subscribe((translated: string) => {
      let parsed = JSON.parse(JSON.stringify(translated));
      this.TITRE = parsed.HORSE.TITRE;
      this.TITREYTB = parsed.INFLUENCER.TITRE;
      this.TEXT1 = parsed.INFLUENCER.TEXT1;
      this.TEXT2 = parsed.INFLUENCER.TEXT2;
      this.TEXT3 = parsed.INFLUENCER.TEXT3;
      this.TITREART = parsed.ARTIST.TITRE;
      this.TEXT4 = parsed.ARTIST.TEXT1;
      this.TEXT5 = parsed.ARTIST.TEXT2;
      this.SOUSTITREART1 = parsed.ARTIST.TITREDRAW;
      this.SOUSTITREART2 = parsed.ARTIST.TITREPIANO;
      this.DEBUT = parsed.HORSE.TEXT1;
      this.CONCOURS = parsed.HORSE.TEXT2;
      this.FARAON = parsed.HORSE.TEXT3;

      this.components = [
        {classe: 'debut', text: this.DEBUT},
        {classe: 'concours', text: this.CONCOURS},
        {classe: 'faraon', text: this.FARAON}
      ];
    });
  }
}
