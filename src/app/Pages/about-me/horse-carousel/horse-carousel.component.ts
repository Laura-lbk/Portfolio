import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-horse-carousel',
  templateUrl: './horse-carousel.component.html',
  styleUrls: ['./horse-carousel.component.scss']
})
export class HorseCarouselComponent implements OnInit {

  @Input() TEXT: string | undefined;
  @Input() CLASSE: string | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('composant enfant')
  }

}
