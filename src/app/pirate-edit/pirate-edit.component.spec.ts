import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateEditComponent } from './pirate-edit.component';

describe('PirateEditComponent', () => {
  let component: PirateEditComponent;
  let fixture: ComponentFixture<PirateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
