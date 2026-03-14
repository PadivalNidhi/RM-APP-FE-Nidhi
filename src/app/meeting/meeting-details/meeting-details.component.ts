import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';
import { Meeting } from '../../interfaces/meeting.interface';

@Component({
  selector: 'app-meeting-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meeting-details.component.html',
  styleUrls: ['../meeting.component.scss','./meeting-details.component.scss']
})
export class MeetingDetailsComponent implements OnInit {
  @Input() clientId: string | null = null;
  @Input() meeting: Meeting | null = null;

  meetingDetails = signal<Meeting | null>(null); // Property to hold fetched data as signal

  constructor(private meetingsService: MeetingsService) { }

  ngOnInit(): void {

      this.meetingDetails.set(this.meeting);

  }

}
