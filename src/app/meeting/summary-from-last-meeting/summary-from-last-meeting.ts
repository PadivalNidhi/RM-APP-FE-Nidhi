import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';
import { ClientMeetingSummary } from '../../interfaces/client.interface';

@Component({
  selector: 'app-summary-from-last-meeting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-from-last-meeting.html',
  styleUrls: ['../meeting.component.scss','./summary-from-last-meeting.scss']
})
export class SummaryFromLastMeeting implements OnInit {
  summaryData = signal<ClientMeetingSummary | null>(null);
  @Input() clientId: string | null = null;

  constructor(private meetingsService: MeetingsService) { }

  ngOnInit(): void {
  if (this.clientId) {
      this.meetingsService.getSummaryFromLastMeeting(this.clientId).subscribe(data => {
        this.summaryData.set(data);
      });  
    }

    }
  }
