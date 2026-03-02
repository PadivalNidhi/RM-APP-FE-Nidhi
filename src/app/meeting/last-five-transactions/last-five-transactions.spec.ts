import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFiveTransactions } from './last-five-transactions';

describe('LastFiveTransactions', () => {
  let component: LastFiveTransactions;
  let fixture: ComponentFixture<LastFiveTransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastFiveTransactions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastFiveTransactions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
