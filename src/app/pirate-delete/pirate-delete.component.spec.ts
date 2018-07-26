import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateDeleteComponent } from './pirate-delete.component';

describe('PirateDeleteComponent', () => {
  let component: PirateDeleteComponent;
  let fixture: ComponentFixture<PirateDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
