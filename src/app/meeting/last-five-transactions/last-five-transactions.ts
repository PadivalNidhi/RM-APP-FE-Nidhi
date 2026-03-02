
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-five-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-five-transactions.html',
  styleUrls: ['../meeting.component.scss','./last-five-transactions.scss']
})
export class LastFiveTransactions implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
