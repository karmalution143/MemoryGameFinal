import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../app.component.css']
})
export class AboutComponent {

  baseCards = [
    { "id": 1, "value": "🐶" },
    { "id": 2, "value": "🐱" },
    { "id": 3, "value": "🐭" },
    { "id": 4, "value": "🐹" },
    { "id": 5, "value": "🦊" },
    { "id": 6, "value": "🐻" },
    { "id": 7, "value": "🐼" },
    { "id": 8, "value": "🐨" }
  ];

  cards = Array.from({ length: 50 }, (_, i) => ({
    ...this.baseCards[i % this.baseCards.length],
    id: i + 1
  }));

  getRandomStyles() {
    const randomX = Math.random() * 90 + '%';
    const randomY = Math.random() * 90 + '%';
    const randomRotation = Math.random() * 180 + 'deg';

    return {
      'position': 'absolute',
      'left': randomX,
      'top': randomY,
      'transform': `rotate(${randomRotation})`,
      'z-index': -1
    };
  }
}