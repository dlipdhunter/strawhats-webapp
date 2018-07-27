import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateCrewAddComponent } from './pirate-crew-add.component';

describe('PirateCrewAddComponent', () => {
  let component: PirateCrewAddComponent;
  let fixture: ComponentFixture<PirateCrewAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateCrewAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateCrewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
