import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';
import { RiskIndicator } from '../../interfaces/client.interface';

@Component({
  selector: 'app-risk-indicators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './risk-indicators.html',
  styleUrls: ['../meeting.component.scss','./risk-indicators.scss']
})
export class RiskIndicators implements OnInit {
  riskData = signal<RiskIndicator>({ concentrationRisk: '', sharpeRatio: '', valueAtRisk: '', maxDrawdown: '' });
  @Input() clientId: string | null = null;

  constructor(private meetingsService: MeetingsService) { }

ngOnInit(): void {
  if (this.clientId) {
      this.meetingsService.getRiskIndicators(this.clientId).subscribe(data => {
        this.riskData.set(data);
      });  
    }

    }

}
