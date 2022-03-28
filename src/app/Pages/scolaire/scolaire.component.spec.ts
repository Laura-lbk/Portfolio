import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScolaireComponent } from './scolaire.component';

describe('ScolaireComponent', () => {
  let component: ScolaireComponent;
  let fixture: ComponentFixture<ScolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScolaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
