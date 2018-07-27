import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateCardAddComponent } from './pirate-card-add.component';

describe('PirateCardAddComponent', () => {
  let component: PirateCardAddComponent;
  let fixture: ComponentFixture<PirateCardAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateCardAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
