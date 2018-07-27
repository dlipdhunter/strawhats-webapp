import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateCrewAddModalComponent } from './pirate-crew-add-modal.component';

describe('PirateCrewAddModalComponent', () => {
  let component: PirateCrewAddModalComponent;
  let fixture: ComponentFixture<PirateCrewAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateCrewAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateCrewAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
