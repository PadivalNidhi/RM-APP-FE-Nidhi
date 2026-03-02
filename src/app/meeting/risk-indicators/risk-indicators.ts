import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-risk-indicators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './risk-indicators.html',
  styleUrls: ['../meeting.component.scss','./risk-indicators.scss']
})
export class RiskIndicators implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
