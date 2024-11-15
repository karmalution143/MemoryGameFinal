import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { ActivatedRoute } from '@angular/router';

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  providers: [CardService],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css', '../app.component.css']
})

export class HardComponent implements OnInit {
  username = '';
  wrongAttempts = 0;
  isGameOver = false;
  
  cards: Card[] = [];
  flippedCards: Card[] = [];

   constructor (private cardService: CardService, private route: ActivatedRoute) {}

   ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Guest';
    });
    this.loadCards();
  }

   loadCards(): void {
     const cardData = this.cardService.getCards();
     const pairs = [...cardData, ...cardData];
     this.cards = pairs
       .map((card) => ({ ...card, isFlipped: false, isMatched: false }))
       .sort(() => Math.random() - 0.5);
   }

   flipCard(card: Card): void {
     console.log('Card clicked:', card);
     if (card.isFlipped || card.isMatched || this.flippedCards.length === 2) return;

     card.isFlipped = true;
     this.flippedCards.push(card);

     if (this.flippedCards.length === 2) {
       this.checkForMatch();
     }
   }

   checkForMatch(): void {
     const [card1, card2] = this.flippedCards;

     if (card1.value === card2.value) {
       card1.isMatched = true;
       card2.isMatched = true;
       this.flippedCards = [];
       this.checkGameOver();
     } else {
       this.wrongAttempts++;
       setTimeout(() => {
         card1.isFlipped = false;
         card2.isFlipped = false;
         this.flippedCards = [];
       }, 1000);
     }
   }

   checkGameOver(): void {
    this.isGameOver = this.cards.every(card => card.isMatched);
    if (this.isGameOver) {
      this.endGame();
    }
  }

checkMatch(card1: Card, card2: Card) {
  if (card1.value !== card2.value) {
    this.wrongAttempts++;
  }
}

endGame(): void {
  this.isGameOver = true;
}
 }