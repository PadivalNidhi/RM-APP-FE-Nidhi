import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskIndicators } from './risk-indicators';

describe('RiskIndicators', () => {
  let component: RiskIndicators;
  let fixture: ComponentFixture<RiskIndicators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskIndicators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskIndicators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
