import { Component, OnInit, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';
import { ClientInfo } from '../../interfaces/client.interface';

@Component({
  selector: 'app-client-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-profile.component.html',
  styleUrls: ['../meeting.component.scss','./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  clientProfile = signal<ClientInfo | null>(null); // Property to hold fetched data as signal
  @Input() clientId: string | null = null;
  constructor(private meetingsService: MeetingsService) { }

  ngOnInit(): void {
    if (this.clientId !== null) {
      this.meetingsService.getClientProfile(this.clientId!).subscribe(data => {
        this.clientProfile.set(data);
      });
    }
  }

}
