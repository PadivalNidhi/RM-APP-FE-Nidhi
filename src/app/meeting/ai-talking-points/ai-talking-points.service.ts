import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface TalkingPoint {
  type: 'opener' | 'portfolio' | 'product' | 'objection';
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiTalkingPointsService {

  constructor() {}

  getTalkingPoints(): Observable<TalkingPoint[]> {
    const mockData: TalkingPoint[] = [
      {
        type: 'opener',
        text: "Ask about daughter's university plans — she turns 18 next month. Natural lead-in to long-term planning."
      },
      {
        type: 'opener',
        text: 'Check if there are any upcoming major life events or expenses.'
      },
      {
        type: 'portfolio',
        text: 'Portfolio is overweight in large-cap equities; consider diversification.'
      },
      {
        type: 'portfolio',
        text: 'Debt allocation is below recommended levels given current market volatility.'
      },
      {
        type: 'product',
        text: 'Introduce structured products as a hedge against downside risk.'
      },
      {
        type: 'product',
        text: 'Consider tax-saving instruments aligned with financial goals.'
      },
      {
        type: 'objection',
        text: 'Client may resist reallocating equities due to recent gains.'
      },
      {
        type: 'objection',
        text: 'Concerns about liquidity might come up—prepare alternatives.'
      }
    ];

    return of(mockData); // simulate API
  }
}