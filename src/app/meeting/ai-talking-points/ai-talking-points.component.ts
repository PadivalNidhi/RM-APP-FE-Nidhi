import { Component, OnInit } from '@angular/core';
import { AiTalkingPointsService, TalkingPoint } from './ai-talking-points.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-talking-points',
  templateUrl: './ai-talking-points.component.html',
  styleUrls: ['./ai-talking-points.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AiTalkingPointsComponent implements OnInit {

  talkingPoints: TalkingPoint[] = [];

  pointTypes = [
    { key: 'opener', label: 'Conversation Openers', class: 'opener' },
    { key: 'portfolio', label: 'Portfolio Discussion', class: 'portfolio' },
    { key: 'product', label: 'Product Introduction', class: 'product' },
    { key: 'objection', label: 'Anticipated Objections', class: 'objection' }
  ];

  constructor(private talkingPointsService: AiTalkingPointsService) {}

  ngOnInit(): void {
    this.loadTalkingPoints();
  }

  loadTalkingPoints() {
    this.talkingPointsService.getTalkingPoints().subscribe(data => {
      this.talkingPoints = data;
    });
  }

  getPointsByType(type: string): TalkingPoint[] {
    return this.talkingPoints.filter(p => p.type === type);
  }
}