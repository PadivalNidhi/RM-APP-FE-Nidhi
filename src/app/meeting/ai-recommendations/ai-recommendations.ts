import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-recommendations.html',
  styleUrls: ['../meeting.component.scss','./ai-recommendations.scss']
})
export class AiRecommendations implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}

