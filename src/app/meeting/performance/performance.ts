import { Component, Inject, Input, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';
import { ClientPerformance } from '../../interfaces/client.interface';
import Chart from 'chart.js/auto';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './performance.html',
  styleUrls: ['../meeting.component.scss','./performance.scss']
})
export class Performance implements OnInit {
  performanceData = signal<ClientPerformance | null>(null);
  monthlyReturnPercentage = signal<string | null>(null); 

  @Input() clientId: string | null = null;
  @Input() rmId: string | null = null;

  constructor(
    private meetingsService: MeetingsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.getPerformanceData();
  }

  getPerformanceData(): void {
        if (this.rmId && this.clientId) {
          this.meetingsService.getPerformanceData(
            this.rmId, this.clientId).subscribe(data => {
            this.performanceData.set(data);
            if (isPlatformBrowser(this.platformId)) {
              setTimeout(() => this.renderChart(), 0);
            }
          });
        }
  }

  renderChart(): void {
    const data = this.performanceData();
    if (!data || !data.monthlyData) return;
    const ctx = document.getElementById('performanceChart') as HTMLCanvasElement;
    if (!ctx) return;
    const months = data.monthlyData.map(m => m.month);
    const investments = data.monthlyData.map(m => parseFloat(m.returnPercentage));
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: 'Monthly Investments',
          data: investments,
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37,99,235,0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { title: { display: true, text: 'Month' } },
          y: { title: { display: true, text: 'Monthly Investments' } }
        }
      }
    });
  }

}
