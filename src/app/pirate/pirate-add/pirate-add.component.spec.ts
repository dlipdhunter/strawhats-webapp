import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateAddComponent } from './pirate-add.component';

describe('PirateAddComponent', () => {
  let component: PirateAddComponent;
  let fixture: ComponentFixture<PirateAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
