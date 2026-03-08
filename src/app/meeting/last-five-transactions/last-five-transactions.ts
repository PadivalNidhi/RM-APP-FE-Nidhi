import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';
import { LastTransactions, Transaction } from '../../interfaces/client.interface';

@Component({
  selector: 'app-last-five-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-five-transactions.html',
  styleUrls: ['../meeting.component.scss','./last-five-transactions.scss']
})
export class LastFiveTransactions implements OnInit {

  transactions = signal<Transaction[]>([]);

    @Input() clientId: string | null = null;

  transactionTypes: { sell: string; buy: string } = { sell: '', buy: '' };

  constructor(private meetingsService: MeetingsService) { }

  ngOnInit(): void {
    if (this.clientId) {
      this.meetingsService.getLastFiveTransactions(this.clientId).subscribe(data => {
        this.transactions.set(data.transactions);
      });
    }

  
  }

}
