import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateListComponent } from './pirate-list.component';

describe('PirateListComponent', () => {
  let component: PirateListComponent;
  let fixture: ComponentFixture<PirateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
