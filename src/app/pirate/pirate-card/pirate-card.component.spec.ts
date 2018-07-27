import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateCardComponent } from './pirate-card.component';

describe('PirateCardComponent', () => {
  let component: PirateCardComponent;
  let fixture: ComponentFixture<PirateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
