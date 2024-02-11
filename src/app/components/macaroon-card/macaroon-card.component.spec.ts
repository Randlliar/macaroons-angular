import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacaroonCardComponent } from './macaroon-card.component';

describe('MacaroonCardComponent', () => {
  let component: MacaroonCardComponent;
  let fixture: ComponentFixture<MacaroonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacaroonCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacaroonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
