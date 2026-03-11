import { Component, OnInit, Inject, PLATFORM_ID, AfterViewChecked, Input, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';
import Chart from 'chart.js/auto';
import { ClientPortfolioOverview } from '../../interfaces/client.interface';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrls: ['../meeting.component.scss','./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  overviewData = signal<ClientPortfolioOverview>({ portfolioMarketValue: '', assetAllocation: [] });
  @Input() clientId: string | null = null;

  constructor(private meetingsService: MeetingsService,
             @Inject(PLATFORM_ID) private platformId: Object
  ) { }

ngOnInit(): void {
  if (this.clientId) {
      this.meetingsService.getOverviewData(this.clientId).subscribe(data => {
        this.overviewData.set(data);
        if (isPlatformBrowser(this.platformId)) {
              setTimeout(() => this.renderPieChart(), 0);
            }
      });  
    }

    }
  renderPieChart(): void {
    const ctx = document.getElementById('assetClassPieChart') as HTMLCanvasElement;
    if (!ctx) return;
    const assetItems = this.overviewData().assetAllocation;
    const dataValues = assetItems.map(item => parseFloat(item.current));
    const labels = assetItems.map(item => item.assetClass);
    new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [{
          data: dataValues,
          backgroundColor: [
            '#2563eb', // Equities
            '#0891b2', // Fixed Income
            '#ea580c', // Real Estate
            '#7c3aed', // Alternatives
            '#94a3b8'  // Liquidity
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }
}
