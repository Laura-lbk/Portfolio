import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseCarouselComponent } from './horse-carousel.component';

describe('HorseCarouselComponent', () => {
  let component: HorseCarouselComponent;
  let fixture: ComponentFixture<HorseCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
